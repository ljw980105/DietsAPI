'use strict';
module.exports = function(app) {
    var dietsController = require('../controllers/DietsAPIController');

    // todoList Routes
    app.route('/upload-diets')
        .post(dietsController.upload_diets);

    app.route('/get-diets')
        .get(dietsController.get_diets);

    app.route('/test')
        .get(dietsController.test);

    app.route('/delete-all')
        .get(dietsController.delete_all);
};