
var mongoose = require('mongoose')

AnimalSchema = mongoose.Schema({
    name: String,
    type: String,
    yearExtinct: Number
});

Mammal = mongoose.model('Animal', AnimalSchema);

module.exports = Mammal;

