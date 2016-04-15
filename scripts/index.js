/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/scripts/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(3);


/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	//import React from 'react';
	//import ReactDOM from 'react-dom';
	//import Radium from 'radium' ;
	
	const utils = __webpack_require__(4);
	
	let test1 = () => {
		console.log('test');
		return new Promise();
	};
	
	let test = "test string";
	let text = document.getElementById('text');
	text.innerHtml = "Hello";
	console.log(text);
	//tes.. szx

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var utils = __webpack_require__(5);
	
	/**
	 * SomeModel Class
	 */
	class SomeModel {
		getAll() {
			return new Promise(function (resolve, reject) {
				console.log('all');
				resolve({ id: 'ejinvpidnadion869' });
			});
		}
	
		getByID(args) {
			return new Promise(function (resolve, reject) {
				console.log(args.id, 'GET by ID');
				args.name = 'getByID';
	
				resolve(args);
			});
		}
	
		updateByID(args) {
			return new Promise(function (resolve, reject) {
				console.log(args.id, 'UPDATE');
	
				resolve(args);
			});
		}
	}
	
	let Model = new SomeModel();
	
	/**
	 * Promises
	 */
	Model.getAll().then(data => {
		return Model.getByID({ id: data.id });
	}).then(data => {
		console.log('DATA1', data);
		return Model.updateByID({ id: data.id });
	}).then(data => {
		console.log('DATA2', data);
	}, handleCatch);
	
	function handleCatch(err) {
		console.log(err);
	}
	
	/**
	 * Interpolation
	 * @type {{name: string}}
	 */
	var customer = { name: "Foo" };
	var card = { amount: 7, product: "Bar", unitprice: 42 };
	
	let message = `Hello ${ customer.name },
	want to buy ${ card.amount } ${ card.product } for
	a total of ${ card.amount * card.unitprice } bucks?`;
	
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

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = {
		getAlert: function () {
			console.log('got alert');
		},
		testUtils: function () {
			console.log('testUtils');
		}
	};

/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map