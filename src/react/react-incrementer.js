
/**
 * React Incrementer component
 */
Incrementer = React.createClass({
	getInitialState(){
		return {
			total:0
		};
	},
	componentDidMount(){},

	/**
	 * Click handler for decrement
	 */
	handleDecrement(){
		let $input = $(args.e.target).closest('.incrementer-wrapper').find('input'),
			current = parseInt($input.val(),10),
			args = {
				$input,
				current
			};

		self.decrement(args)
			.then(self.setTotal)
			.then(res=>{
				args.current = res.current;
				resolve(args);
			});
	},

	/**
	 * Click handler for Increment
	 * @returns {boolean}
	 */
	handleIncrement(){
		let $input = $(args.e.target).closest('.incrementer-wrapper').find('input'),
			current = parseInt($input.val(),10),
			args = {
				$input,
				current
			};

		// Cap the incrementer according to a max prop
		if(args.$input.val() >= this.props.max){
			return false;
		}

		self.increment(args)
			.then(self.setTotal)
			.then(res=>{
				args.current = res.current;
				resolve(args);
			});
	},

	/**
	 * Increment seasons counter
	 * @param args
	 */
	increment : args => new Promise((resolve,reject)=>{
		args.current = args.current + 1;
		resolve(args);
	}),

	/**
	 * decrement seasons counter
	 * @param args
	 */
	decrement : args => new Promise((resolve,reject)=>{
		// Threshold controls allowance of negative numbers, 0, or positive as the low threshold
		if(args.current === this.props.min){
			args.current = (this.props.min + 1)
		}

		args.current = args.current - 1;
		resolve(args);
	}),

	/**
	 * Sets the total property on the component
	 * @param args
	 */
	setTotal : args => new Promise((resolve,reject)=>{
		this.setState({total: parseInt(args.current,10)});
		resolve(args);
	}),

	render(){
		let decClasses = `${this.props.selector}--decrement incrementer--decrement`,
			incClasses = `${this.props.selector}--increment incrementer--increment`,
			wrapperClasses = `incrementer ${this.props.selector}`;

		return (
			<div className={wrapperClasses}>
				<div class="incrementer-wrapper">
					<div onClick={this.handleDecrement} className={decClasses}></div>
					<div class="incrementer--total">
						<input type="number" alt="Total" name="total" value={this.state.total}/>
					</div>
					<div onClick={this.handleIncrement} className={incClasses}></div>
				</div>
			</div>
		);
	}
});

//ReactDOM.render(<Incrementer/>, document.getElementById('reactIncrementer'));
