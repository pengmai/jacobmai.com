import React from 'react';

// import Highcharts from 'highcharts';
// import addHighcharts3dModule from 'highcharts/highcharts-3d';
import { Chart, Highcharts3dChart, ScatterSeries, Title, withHighcharts, XAxis, YAxis, ZAxis } from 'react-jsx-highcharts';
import pcaData from './embeds3d.json';

// addHighcharts3dModule(Highcharts);

function transpose(data: number[][]) {
	const newData = [];
	for (let i = 0; i < data[0].length; i++) {
		const row = [];
		for (const col of data) {
			row.push(col[i]);
		}
		newData.push(row);
	}
	return newData;
}

function EmbedGraph() {
	const labels = { enabled: true };
	const plotOptions = {
		scatter: {
			marker: {
				states: {
					hover: { enabled: false },
					select: { enabled: false }
				}
			}
		}
	};

	return (
		<Highcharts3dChart alpha={30} beta={0} depth={300} viewDistance={0} plotOptions={plotOptions}>
			<Chart />
			<Title>Visualized Word Embeddings</Title>
			<XAxis min={-5} max={5} labels={labels} />
			<YAxis min={-5} max={5} labels={labels} />
			<ZAxis min={-5} max={5} labels={labels}>
				<ScatterSeries data={transpose(pcaData)} dataLabels={['a', 'b', 'c', 'd', 'e', 'f']} />
			</ZAxis>
		</Highcharts3dChart>
	);
}

// export default withHighcharts(EmbedGraph, Highcharts);
