import React from 'react';
import axios from 'axios';

export default class PrimeNumberForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			start: 2,
			end: 2
		};
		this.onChange = this.onChange.bind(this);
		this.onClick = this.onClick.bind(this);
	}

	onChange({ target }) {
		this.setState({
			[target.name]: target.value
		});
	}

	onClick(e) {
        e.preventDefault();
		this.props.onSubmit({ start: this.state.start, end: this.state.end });
	}

	render() {
		return (
			<div>
				<form name="primeNumberForm">
					<div className="form-group">
						<div className="form-control">
							<label>Enter Start of Range:</label>
							<input
								id="start"
								name="start"
								type="number"
								className="input"
								value={this.state.start}
								onChange={this.onChange}
							/>
						</div>
						<div className="form-control">
							<label>Enter End of Range:</label>
							<input
								id="end"
								name="end"
								type="number"
								className="input"
								value={this.state.end}
								onChange={this.onChange}
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="form-control">
							<button
								type="submit"
								onClick={this.onClick}
								className="button"
								disabled={this.props.btnDisabled}
							>
								Get all prime numbers.
							</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}
