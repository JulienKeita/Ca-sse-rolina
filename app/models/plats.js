// MODEL PLATS
var mongoose = require('mongoose');



var platsSchema = new mongoose.Schema({
    description: String,
    note: String,
    commentaires: String,
    date: String,
    image: String,
    ingredient: String,
    ingredients: [String],
    recipe: String,
    recipeComment: String
});


var Plats = {

    model: mongoose.model('Plats', platsSchema),

    create: function (req, res) {
        Plats.model.create({
            description: req.body.description,
            note: req.body.note,
            commentaires: req.body.commentaires,
            date: req.body.date,
            ingredient: req.body.ingredient,
            ingredients: req.body.ingredients,
            image: req.body.image,
            recipe: req.body.recipe,
            recipeComment: req.body.recipeComment
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
            ingredient: req.body.ingredient,
            ingredients: req.body.ingredients,
            image: req.body.image,
            recipe: req.body.recipe,
            recipeComment: req.body.recipeComment
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