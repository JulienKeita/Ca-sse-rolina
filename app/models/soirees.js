// MODEL SOIREES
var mongoose = require('mongoose');

var soireesSchema = new mongoose.Schema({
    description: String,
    date: String,
    commentaires: String,
    invite1: String,
    image: String,
    invite1: String,
    invite2: String,
    invite3: String,
    invite4: String
});

var Soirees = {

    model: mongoose.model('Soirees', soireesSchema),

    create: function (req, res) {
        Soirees.model.create({
            description: req.body.description,
            note: req.body.note,
            commentaires: req.body.commentaires,
            date: req.body.date,
            invite1: req.body.invite1,
            invite2: req.body.invite2,
            invite3: req.body.invite3,
            invite4: req.body.invite4,
            image: req.body.image
        }, function () {
            res.sendStatus(200);
        })
    },

    findAll: function (req, res) {
        Soirees.model.find(function (err, data) {
            res.send(data);
        });
    },

    update: function (req, res) {
        Soirees.model.findByIdAndUpdate(req.params.id, {
            description: req.body.description,
            note: req.body.note,
            commentaires: req.body.commentaires,
            date: req.body.date,
            invite1: req.body.invite1,
            invite2: req.body.invite2,
            invite3: req.body.invite3,
            invite4: req.body.invite4,
            image: req.body.image
        }, function () {
            res.sendStatus(200);
        })
    },

    delete: function (req, res) {
        Soirees.model.findByIdAndRemove(req.params.id, function () {
            res.sendStatus(200);
        })
    }
}



module.exports = Soirees;