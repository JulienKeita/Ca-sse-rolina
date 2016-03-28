// MODEL SOIREES
var mongoose = require('mongoose');

var soireesSchema = new mongoose.Schema({
    description: String,
    date: String,
    commentaires: String,
    invite1: String,
    image: String,
    invites:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Invites'
    }]
});

var Soirees = {

    model: mongoose.model('Soirees', soireesSchema),

    create: function (req, res) {
        Soirees.model.create({
            description: req.body.description,
            note: req.body.note,
            commentaires: req.body.commentaires,
            date: req.body.date,
            image: req.body.image
        }, function () {
            res.sendStatus(200);
        })
    },

    findAll: function (req, res) {
        Soirees.model.find()
        .populate('invites')
        .exec(function (err, data) {
            res.send(data);
        });
    },

    update: function (req, res) {
        Soirees.model.findByIdAndUpdate(req.params.id, {
            description: req.body.description,
            note: req.body.note,
            commentaires: req.body.commentaires,
            date: req.body.date,
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