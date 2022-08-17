//config nodejs with express

const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');

const app = express();
const port = 3000;

//public static image
app.use(express.static(path.join(__dirname, 'public')));

//HTTP Logger
app.use(morgan('combined'));

//template engine

app.engine(
	'hbs',
	handlebars.engine({
		extname: '.hbs',
	})
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
//route

app.get('/', (req, res) => {
	res.render('home');
});
app.get('/news', (req, res) => {
	res.render('news');
});
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
