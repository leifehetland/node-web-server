const express = require('express');

let app = express();

app.get('/', (req, res) => {
	// res.send('<h1 style="color: blue; font-family: Roboto;">Hello Express.</h1>');
	res.send({
		name: 'Leif',
		likes: ['Film', 'Games', 'Books']
	})
});

app.get('/about', (req, res) => {
	res.send('About Page!');
});

app.get('/bad', (req, res) => {
	res.send({
		errorMessage: 'Unable to make request.'
	});
});

app.listen(3000);
