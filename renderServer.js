// this is what actually starts and runs the server!!!

var express = require('express'),
	app = express(),
	path = require('path'),
	serverEnv = require('./env.js');

// Resource paths
app.use('/css', express.static(path.join(__dirname, "/app/css")));
app.use('/js', express.static(path.join(__dirname, "/app/js")));
app.use('/app', express.static(path.join(__dirname, "/app")));
app.use('/img', express.static(path.join(__dirname, "/app/img")));
// Server Side Template
// just sets up a basic template that i'll show you in a second.
app.set("views", path.join(__dirname, './pages'));
app.set("view engine", "ejs");

/**
*	Default app route handler
*	@param req (request)
*   @param res (response)
*   This will start to blow up soon which is why I passed a function inside the app.get
**/
function defaultRoute(req, res) {

	// prerender main react component here
	var Home = require('./elements/index/Main.js');

	// render page server side
	var reactHTML = "";

	res.render('index.ejs', {reactRenderServerSide: reactHTML});
}

// if i was to run this and go to localhost:3000 it would render all of the content inside of what's above
app.get('/', defaultRoute);

var server = app.listen(serverEnv.port, function () {
	console.log('Server is running at http://localhost:%s', server.address().port);
});