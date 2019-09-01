import { InferenceSession, Tensor } from 'onnxjs';

// @ts-ignore
import model from './name_rnn_v1.1.onnx';

const VOCAB_SIZE = 28;
const EOS = VOCAB_SIZE - 1;
const DASH = VOCAB_SIZE - 2;

const sample = (probs: Float32Array) => {
	const value = Math.random();
	let total = 0;
	for (let i = 0; i < probs.length; i++) {
		total += probs[i];
		if (value < total) { return i; }
	}
	throw Error(`Reached total of ${total} when sampling`);
};

const argmax = (arr: Float32Array) => {
	let argmaxValue = 0;
	let max = -1;
	arr.forEach((el, i) => {
		if (el > max) {
			max = el;
			argmaxValue = i;
		}
	});
	return argmaxValue;
};

type DecoderFunc = (outputs: Float32Array) => number;
const decodeBatch = (decode: DecoderFunc, probs: Float32Array) => {
	const samples = [];
	for (let i = 0; i < probs.length; i += VOCAB_SIZE) {
		samples.push(decode(probs.slice(i, i + VOCAB_SIZE)));
	}
	return samples;
};

export const ordToChar = (ord: number) => {
	// if (ord < 0 || ord > EOS) {
	//     throw Error(`ord index out of range: ${ord}`);
	// }
	if (ord === DASH) {
		return '-';
	}
	return String.fromCharCode(ord + 'a'.charCodeAt(0));
};

export const charToOrd = (char: string) => {
	if (char === '-') {
		return DASH;
	}
	return char.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);
};

/**
 * Tranposes a 1d array to a 2d array with elements of length 1.
 * e.g. [1, 2, 3] -> [[1], [2], [3]]
 * @param arr
 */
const transpose1d = (arr: number[]) =>
	arr.reduce((prev, curr) => prev.concat([[curr]]), [] as number[][]);

interface RunArgs {
	start: string;
	batchSize: number;
	temperature: number;
	maxSteps: number;
	greedy: boolean;
}

const runModel = async (args: RunArgs) => {
	const { start, batchSize, temperature, maxSteps, greedy } = args;
	const primer = start.split('').map(charToOrd);
	const session = new InferenceSession();
	const temp = new Tensor(new Float32Array([temperature]), 'float32');
	await session.loadModel(model);
	const init = Array(batchSize).fill(primer[0]);
	const names = transpose1d(init);
	const inputs = [
		new Tensor(new Int32Array(init), 'int32', [batchSize, 1]),
		new Tensor(new Float32Array(batchSize * 28), 'float32', [batchSize, 28]),
		new Tensor(new Float32Array(batchSize * 28), 'float32', [batchSize, 28]),
		temp
	];

	const step = async () => {
		const outputMap = await session.run(inputs);
		const output = (outputMap.get('output') as Tensor).data;
		const hid1 = outputMap.get('hid_out1') as Tensor;
		const hid2 = outputMap.get('hid_out2') as Tensor;
		return { output, hid1, hid2 };
	};

	for (const char of primer.slice(1)) {
		const { hid1, hid2 } = await step();
		names.forEach((name) => name.push(char));
		const input = Array(batchSize).fill(char);
		inputs[0] = new Tensor(new Int32Array(input), 'int32', [batchSize, 1]);
		inputs[1] = hid1;
		inputs[2] = hid2;
	}

	for (let i = 0; i < maxSteps; i++) {
		const { output, hid1, hid2 } = await step();

		const decode = greedy ? argmax : sample;
		const nextChar = decodeBatch(decode, output as Float32Array);

		inputs[0] = new Tensor(new Int32Array(nextChar), 'int32', [batchSize, 1]);
		inputs[1] = hid1;
		inputs[2] = hid2;

		let numFinished = 0;
		names.forEach((name, batch) => {
			if (name[name.length - 1] === EOS) {
				numFinished++;
			} else {
				name.push(nextChar[batch]);
			}
		});
		if (numFinished === batchSize) {
			return names.map((n) => n.slice(0, -1).map(ordToChar).join(''));
		}
	}

	console.warn('Max steps reached');
	return names.map((n) => n.map(ordToChar).join(''));
};

export default runModel;
