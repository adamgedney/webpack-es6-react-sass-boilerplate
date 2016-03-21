
//<head>

// _reactModal.scss

// Dev
// <script src="/wp-content/themes/toku/js/vendor/react-0.14.3/build/react.js"></script>
//<script src="/wp-content/themes/toku/js/vendor/react-0.14.3/build/react-dom.js"></script>
// PROD
//<script src="/wp-content/themes/toku/js/vendor/react-0.14.3/build/react.min.js"></script>
//<script src="/wp-content/themes/toku/js/vendor/react-0.14.3/build/react-dom.min.js"></script>
//<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
//</head>

//<body>
//<a target="_blank" href="#" title="AT&T U-verse" class="react-modal--trigger"
//data-json='{"name":"AT&T U-Verse","sub":"Channel 1484","phone":"1-800-288-2020","web":""}'
//></a>
//<div id=react-modal"></div>
//<script type="text/babel" src="/wp-content/themes/toku/js/react-modal.js"></script>
// </body>

/**
 * React Modal component
 */
var Modal = React.createClass({
	getInitialState: function(){
		return {
			name:'',
			sub:'',
			phone:'',
			web:''
		};
	},
	componentDidMount: function() {
		var i,elem,
			anchors = document.querySelectorAll(".react-modal--trigger");

		// Attach click handler to each trigger
		for(i =0; i < anchors.length; i++){
			elem = anchors[i];

			// Anchor click handlers
			elem.onclick = this.handleTrigger;
		}
		//
		//// Close the modal
		var $close = document.querySelectorAll(".react-modal--close")[0];
		//var $outer = document.querySelectorAll(".react-modal__outer")[0];
		$close.onclick = this.handleClose;
		//$outer.onclick = this.handleClose;
	},
	handleTrigger : function(e){
		e.preventDefault();
		var json = this.parseJSONAttrib({
			dataJSON : e.currentTarget.getAttribute("data-json")
		});

		this.setState(json);

		this.toggleVisibility();
	},
	handleClose : function(e){
		e.preventDefault();
		this.toggleVisibility();
	},
	render: function(){
		var self = this;
		return (
			<div className="react-modal__outer">
				<div className="react-modal__inner">
					<header>
						<h1>{this.state.name}</h1>
					<div className='react-modal--close'>X</div>
					</header>
					<ul>
						<li><h2>{this.state.sub}</h2></li>
						<li>{this.state.phone}</li>
						{(function(){
							if(self.state.web){
								return <li><a target="_blank" href={self.state.web} alt="Visit the Website">Visit Website</a></li>;
							}
						})()}
					</ul>
				</div>
			</div>
		);
	},
	parseJSONAttrib : function(args){
		return JSON.parse(args.dataJSON);
	},
	toggleVisibility: function(){
		var $modal = document.getElementById('react-modal');
		if ($modal.classList.contains('react-modal--show')) {
			$modal.classList.remove('react-modal--show');

			$modal.classList.add('react-modal--hide');
		}else{
			$modal.classList.remove('react-modal--hide');
			$modal.classList.add('react-modal--show');
		}
	}
});

ReactDOM.render(<Modal/>, document.getElementById('react-modal'));
