import React from 'react';
import ReactDOM from 'react-dom';
import './app.scss';
import PrimeNumberForm from './components/PrimeNumberForm';

import axios from 'axios';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			result: [],
			error: '',
			btnDisabled: false
		};
		this.getPrimeNumbers = this.getPrimeNumbers.bind(this);
	}

	clearPreviousResult() {
		this.setState({ result: [], error: '' });
	}

	getPrimeNumbers({ start, end }) {
        this.clearPreviousResult();
        this.setState({ btnDisabled: true });

		axios.get(`/primenumbers/${start}/${end}`).then(({ data }) => {
			this.setState({ btnDisabled: false });
			if (typeof data !== 'string') this.setState({ result : data});
			else this.setState({ error: data });
		});
	}

	formatResult() {
		return this.state.result.reduce((acc, val, idx) => {
			return idx === 0 ? `${val}` : `${acc}, ${val}`;
		}, '');
	}

	render() {
		return (
			<div className="text-center">
				<h1>Prime Number Generator</h1>
				<PrimeNumberForm
					onSubmit={this.getPrimeNumbers}
					btnDisabled={this.state.btnDisabled}
				/>
				{this.state.btnDisabled && (
					<div className="spinner">
						<i className="fas fa-spinner fa-spin" /> Please wait...
					</div>
				)}
				{!this.state.error && (
					<div>
						<p>All Prime numbers in given range:</p>
						{this.formatResult()}
					</div>
				)}
				{this.state.error && (
					<p className="error">
						<i class="fa fa-info-circle" aria-hidden="true" />
						{this.state.error}
					</p>
				)}
			</div>
		);
	}
}
ReactDOM.render(<App />, document.getElementById('root'));
