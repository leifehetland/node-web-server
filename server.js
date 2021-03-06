const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;

let app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use((req, res, next) => {
	let now = new Date().toString();
	let log = `${now}: ${req.method} ${req.url}`;
	console.log(log);
	fs.appendFile('server.log', log + '\n', (err) => {
		if (err) {
			console.log('Unable to append to server.log');
		}
	});
	next();
});

// app.use((req, res, next) => {
// 	res.render('maintenance.hbs');
// });

app.use(express.static(__dirname + '/public'));

// Handle Bar Helpers
hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear();
});

hbs.registerHelper('toUpperCase', (text) => {
	return text.toUpperCase();
});

// Routes
app.get('/', (req, res) => {
	// res.send('<h1 style="color: blue; font-family: Roboto;">Hello Express.</h1>');
	res.render('home.hbs', {
		pageTitle: 'Home Page',
		welcomeMessage: 'Welcome to the Home Page!'
	});
});

app.get('/about', (req, res) => {
	res.render('about.hbs', {
		pageTitle: 'About Page',
	});
});

app.get('/projects', (req, res) => {
	res.render('projects.hbs', {
		pageTitle: 'Project Page',
		welcomeMessage: 'Projects will go here!'
	});
});

app.get('/bad', (req, res) => {
	res.send({
		errorMessage
		: 'Unable to make request.'
	});
});

// Listen sets the port
app.listen(port, () => {
	console.log(`Server is up on port ${port}.`);
});
