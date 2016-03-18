// MODEL PLATS
var mongoose = require('mongoose');


var soireesSchema = new mongoose.Schema({
    description: String,
    plat: String,
    date: String
});

var soirees = {
    
    model: mongoose.model('soirees', soireesSchema),
    
    create: function(req, res) {
		Soirees.model.create({
			description: req.body.description,
            plat: req.body.note,
            date: req.body.commentaires
		}, function(){
			res.sendStatus(200);
		})
	},

	findAll: function(req, res) {
		Soirees.model.find(function (err, data) {
			res.send(data);
		});
	},

	update: function(req, res){
		Soirees.model.findByIdAndUpdate(req.params.id, {
            description: req.body.description,
            plat: req.body.plat,
            date: req.body.date
		}, function(){
			res.sendStatus(200);
		})
	},

	delete: function(req, res){
		Soirees.model.findByIdAndRemove(req.params.id, function(){
			res.sendStatus(200);
		})
	} 
}

module.exports = Soiree;
