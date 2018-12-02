import React from 'react';
import ReactDOM from 'react-dom';
import './app.scss';

class App extends React.Component {
	constructor() {super()}
	render() {
		return <h1 className='app'>Hello World!!!</h1>;
	}
}
ReactDOM.render(<App/>, document.getElementById('root'));
