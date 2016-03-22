// MODEL PLATS
var mongoose = require('mongoose');



var platsSchema = new mongoose.Schema({
    description: String,
    note: String,
    commentaires: String,
    date: String,
    ingredient1: String,
    image: String,
    ingredient1: String,
    ingredient2: String,
    ingredient3: String,
    ingredient4: String
});

var Plats = {

    model: mongoose.model('Plats', platsSchema),

    create: function (req, res) {
        Plats.model.create({
            description: req.body.description,
            note: req.body.note,
            commentaires: req.body.commentaires,
            date: req.body.date,
            ingredient1: req.body.ingredient1,
            ingredient2: req.body.ingredient2,
            ingredient3: req.body.ingredient3,
            ingredient4: req.body.ingredient4,
            image: req.body.image
        }, function () {
            res.sendStatus(200);
        })
    },

    findAll: function (req, res) {
        Plats.model.find(function (err, data) {
            res.send(data);
        });
    },

    update: function (req, res) {
        Plats.model.findByIdAndUpdate(req.params.id, {
            description: req.body.description,
            note: req.body.note,
            commentaires: req.body.commentaires,
            date: req.body.date,
            ingredient1: req.body.ingredient1,
            image: req.body.image
        }, function () {
            res.sendStatus(200);
        })
    },

    delete: function (req, res) {
        Plats.model.findByIdAndRemove(req.params.id, function () {
            res.sendStatus(200);
        })
    }
}



module.exports = Plats;