import React, { ChangeEvent, FormEvent } from 'react';
import { Form, FormControlProps } from 'react-bootstrap';
import runRNN from './name_rnn';
import Options from './Options';

interface NameRNNState {
	duplicates: { [key: string]: number };
	names: string[];
	greedy: boolean;
	temperature: number;
	text: string;
}

export class NameRNN extends React.Component<{}, NameRNNState> {
	constructor(props: {}) {
		super(props);
		this.state = {
			duplicates: {},
			greedy: false,
			names: [],
			temperature: 7,
			text: ''
		};
	}

	public countDuplicates(names: string[]) {
		const dups: { [key: string]: number } = {};
		const unique = [];
		for (const name of names.sort()) {
			if (dups[name]) {
				dups[name]++;
			} else {
				unique.push(name);
				dups[name] = 1;
			}
		}
		return { dups, unique };
	}

	public handleChange = (e: FormEvent<FormControlProps>) => {
		const text = e.currentTarget.value as string;
		const start = text.trim();
		this.setState({ text });
		if (start.length >= 1 && start.length <= 10) {
			const { greedy, temperature } = this.state;
			runRNN({
				batchSize: 5,
				greedy,
				maxSteps: 50,
				start,
				temperature: temperature / 10
			}).then((names) => {
				const { dups, unique } = this.countDuplicates(names);
				this.setState({ duplicates: dups, names: unique });
			});
		}
	}

	public changeTemperature = (e: ChangeEvent<HTMLInputElement>) => {
		this.setState({ temperature: parseInt(e.target.value, 10) });
	}

	public render() {
		return (
			<div className="text-center">
				<p>Welcome to Name RNN!</p>
				<Options
					changeTemperature={this.changeTemperature}
					temperature={this.state.temperature}
				/>
				<Form>
					<Form.Control
						type="text"
						placeholder=""
						value={this.state.text}
						onChange={this.handleChange}
						isInvalid={this.state.text.length > 10}
					/>
				</Form>
				{this.state.names.map((name) =>
					<p key={name}>
						{name} {this.state.duplicates[name] === 1 ? '' : this.state.duplicates[name]}
					</p>)}
			</div>
		);
	}
}
