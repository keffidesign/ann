var app = require('express')();

app.set('view engine', 'jade');

app.get('/', function(req, res) {
	res.render('index');
});

app.listen('3000', function() {
	console.log('Server was started.');
});