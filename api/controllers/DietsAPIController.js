'use strict';

var mongoose = require('mongoose'),
    Diet = mongoose.model('Diets');

exports.upload_diets = function(req, res) {
    console.log("uploading diets");
    var new_diet = new Diet(req.body);

    new_diet.save(function (err, diet) {
        if (err)
            res.send(err);
        res.send(JSON.stringify({"message": "success"}));
    });
};

exports.test = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({"test": "this is a test"}));
};

exports.get_diets = function(req, res) {
    console.log("downloading diets");
    Diet.find({}, function(err, diet) {
        if (err)
            res.send(err);
        res.json(diet);
    });
};

exports.delete_all = function(req, res) {
    console.log("deleting all diets");
    Diet.remove({}, function(err, diet) {
        if (err)
            res.send(err);
        res.json({ message: 'Successfully deleted all diets' });
    });
};