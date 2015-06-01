let name = 'Alex';

console.log(name);

var express = require('express');
var app = express();

app.set('view engine', 'jade');

app.use(express.static('dist'));

app.get('/', function(req, res) {
	res.render('index');
});

app.listen('3000', function() {
	console.log('Server was started.');
});