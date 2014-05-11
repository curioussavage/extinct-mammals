var express = require('express');
var mongoose = require('mongoose');

var api = require('./apis')

bodyParser = require('body-parser')




var app  = express();
app.use(bodyParser());

// get mongoose ready..

mongoose.connect('mongodb://localhost/animals');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log('connected to animals database...')
});




// handle requests..


app.get('/mammals', api.list);
app.get('/mammals/:type', api.list);

app.post('/', api.make );



app.listen(3000, function() {
	console.log('server running at port 3000...')
});

