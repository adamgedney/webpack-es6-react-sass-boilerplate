var utils = require('./utils.js');


/**
 * SomeModel Class
 */
class SomeModel{
	getAll(){
		return new Promise(function(resolve,reject) {
			console.log('all');
			resolve({id: 'ejinvpidnadion869'});
		});
	};

	getByID(args){
		return new Promise(function(resolve,reject){
			console.log(args.id, 'GET by ID');
			args.name = 'getByID';

			resolve(args);
		});
	};

	updateByID(args){
		return new Promise(function(resolve,reject) {
			console.log(args.id, 'UPDATE');

			resolve(args);
		});
	};
}

let Model = new SomeModel();

/**
 * Promises
 */
Model.getAll()
	.then(data=>{
		return Model.getByID({id:data.id});
	}).then(data=>{
		console.log('DATA1', data);
		return Model.updateByID({id:data.id});
	}).then(data=>{
		console.log('DATA2', data);
	},handleCatch);


function handleCatch(err){
	console.log(err);
}



/**
 * Interpolation
 * @type {{name: string}}
 */
var customer = { name: "Foo" };
var card = { amount: 7, product: "Bar", unitprice: 42 };

let message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`;

document.getElementById('text').innerText = message;

 
utils.getAlert();


//=====================//
// React component
//=====================//
// import React from 'react';
// import ReactDOM from 'react-dom';
// import Radium from 'radium';

// // Radium styles
// var styles = {
// 	base: {
// 		color: 'salmon',
// 		fontWeight : 100,
// 		fontSize: 21,
// 		background: 'purple',
// 		':hover': {
// 			background: 'green'
// 		}
// 	}
// };

// class Hello extends Radium(React.Component) {
// 	render() {
// 		return <h1 style={styles.base}>Hello</h1>
// 	}
// };

// ReactDOM.render(<Hello/>, document.getElementById('hello'));


