import React from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';

// Radium styles
var styles = {
	base: {
		color: 'yellow',
		fontWeight : 100,
		fontSize: 21,
		width: '50%',
		margin: '0 25%',
		textAlign :'center',
		background: 'purple',
		':hover': {
			background: 'green'
		}
	}
};

class Hello extends Radium(React.Component) {
	render() {
		return
		<div className="mytheme">
			<h1 style={styles.base}>Hello</h1>
		</div>
	}
};

ReactDOM.render(<Hello/>, document.getElementById('hello'));