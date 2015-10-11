(function() {

	// set page dependencies
	var React = require('react'),
		Router = require('react-router'),
		Route = Router.Route,
		NotFoundRoute = Router.NotFoundRoute,
		Redirect = Router.Redirect;

	// set main view
	var IndexMain = require('./elements/index/Main.js');

	// routes
	const routes = (
		React.createElement(Route, {path: '/', handler: IndexMain})	
	);

	var mountNode = document.getElementById('react-client-rendered-container') || document.createElement('div');
	Router.run(routes, function(Handler) {
  		React.render(React.createElement(Handler, {}), mountNode);
	});

}());