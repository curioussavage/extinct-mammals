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


app.get('/', api.list);

app.post('/', function(req, res) {
   console.log(req.body);

   var mammal = {
   	name: req.body.name,
   	type: req.body.type,
   	yearExtinct: req.body.yearExtinct

   }
   var newMammal = new Mammal(mammal)
   newMammal.save(function(err) {
   	if (err) return console.error(err);
   })
    res.json(mammal);
});



app.listen(3000, function() {
	console.log('server running at port 3000...')
});

