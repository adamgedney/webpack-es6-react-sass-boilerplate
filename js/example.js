'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var utils = require('./utils.js');

/**
 * SomeModel Class
 */

var SomeModel = (function () {
	function SomeModel() {
		_classCallCheck(this, SomeModel);
	}

	_createClass(SomeModel, [{
		key: 'getAll',
		value: function getAll() {
			return new Promise(function (resolve, reject) {
				console.log('all');
				resolve({ id: 'ejinvpidnadion869' });
			});
		}
	}, {
		key: 'getByID',
		value: function getByID(args) {
			return new Promise(function (resolve, reject) {
				console.log(args.id, 'GET by ID');
				args.name = 'getByID';

				resolve(args);
			});
		}
	}, {
		key: 'updateByID',
		value: function updateByID(args) {
			return new Promise(function (resolve, reject) {
				console.log(args.id, 'UPDATE');

				resolve(args);
			});
		}
	}]);

	return SomeModel;
})();

var Model = new SomeModel();

/**
 * Promises
 */
Model.getAll().then(function (data) {
	return Model.getByID({ id: data.id });
}).then(function (data) {
	console.log('DATA1', data);
	return Model.updateByID({ id: data.id });
}).then(function (data) {
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

var message = 'Hello ' + customer.name + ',\nwant to buy ' + card.amount + ' ' + card.product + ' for\na total of ' + card.amount * card.unitprice + ' bucks?';

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
//# sourceMappingURL=example.js.map
