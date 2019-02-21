var http = require('http');
var app = require('./config/express');

http.createServer(app).listen(3000, function() {
	setInterval(function () {
		console.log('Servidor iniciado');
	},30000);  
});
