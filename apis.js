
var mammal = require('./mammal')

exports.list = function(req,res) {
    Mammal
        .find()
        .sort('name')
        .exec(function(err, mammals){
            res.send(200, mammals);
        } )
}