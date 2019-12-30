'use strict';

var mongoose = require('mongoose'),
    Diet = mongoose.model('Diets'),
    fs = require('fs');

exports.upload_diets = function(req, res) {
    console.log("uploading diets");
    var new_diet = new Diet(req.body);

    let file = new Buffer(req.body.image_data, 'base64');
    fs.writeFile("./files/" + req.body.name + ".png", file, function (error) {
        if (error) res.send(error);
    });

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