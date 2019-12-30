var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Diet = require('./api/models/DietsAPIModel'), //created model loading here
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/dietdb');


app.use(bodyParser.urlencoded({limit: '50mb', extended: true }));
app.use(bodyParser.json({limit: '50mb'}));
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    console.log("directory name:" + __dirname);
    res.send("Diets API");
});

var routes = require('./api/routes/DietsAPIRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('Diets RESTful API server started on port: ' + port);
