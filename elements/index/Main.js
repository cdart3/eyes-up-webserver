var React = require('react'),
//  Actions = require('/path/to/actions');
	MainTemplate = require('./Main.rt.js');

var IndexMain = React.createClass({

	displayName: 'Index.Main',

	propTypes: {

	},

	contextTypes: {

	},

	componentWillMount: function() {
		console.log('component is mounting');
	},

	componentDidMount: function() {
		console.log('component did mount');
	},

	componentWillUnmount: function() {
		console.log('component unmounted');
	},

	render: MainTemplate

});

module.exports = IndexMain;