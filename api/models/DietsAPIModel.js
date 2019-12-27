
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DietsSchema = new Schema({
    name: String,
    created_date: Date,
    ingredients: [String],
    cooking_instructions: [String],
    image_data: String // base 64 encoded string
});

module.exports = mongoose.model('Diets', DietsSchema);