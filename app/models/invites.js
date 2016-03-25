// MODEL INVITES
var mongoose = require('mongoose');


var invitesSchema = new mongoose.Schema({
    description: String,
    preferences: String,
    restrictions: [String],
    commentaires: String,
    date: String,
    image: String
});

var Invites = {
    
    model: mongoose.model('Invites', invitesSchema),
    
    create: function(req, res) {
        Invites.model.create({
            description: req.body.description,
            preferences: req.body.preferences,
            restrictions: req.body.restrictions,
            commentaires: req.body.commentaires,
            image: req.body.image,
            date:req.body.date
            
        }, function(){
            res.sendStatus(200);
        })
    },

    findAll: function(req, res) {
        Invites.model.find(function (err, data) {
            res.send(data);
        });
    },

    update: function(req, res){
        Invites.model.findByIdAndUpdate(req.params.id, {
            description: req.body.description,
            preferences: req.body.preferences,
            restrictions: req.body.restrictions,
            commentaires: req.body.commentaires,
            image: req.body.image,
            date:req.body.date
        }, function(){
            res.sendStatus(200);
        })
    },

    delete: function(req, res){
        Invites.model.findByIdAndRemove(req.params.id, function(){
            res.sendStatus(200);
        })
    } 
}

module.exports = Invites;
