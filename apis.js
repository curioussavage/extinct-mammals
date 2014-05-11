
var mammalmodule = require('./mammal')

exports.list = function(req,res) {
    if (req.params.type) {
        Mammal
            .find({type: req.params.type})
            .sort('name')
            .exec(function(err, mammals){
                res.send(200, mammals);
            } )

    } else {

        Mammal
            .find()
            .sort('name')
            .exec(function (err, mammals) {
                res.send(200, mammals);
            })
    }
}




exports.make = function(req, res) {
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
}