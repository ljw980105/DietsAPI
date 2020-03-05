var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Diet = require('./api/models/DietsAPIModel'), //created model loading here
    bodyParser = require('body-parser'),
    fs = require('fs');

const https = require('https');

const privateKey = fs.readFileSync('/etc/letsencrypt/live/api.jingweili.me/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/api.jingweili.me/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/api.jingweili.me/chain.pem', 'utf8');

const credentials = {
    key: privateKey,
    cert: certificate,
    ca: ca
};

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/dietdb');


app.use(bodyParser.urlencoded({limit: '50mb', extended: true }));
app.use(bodyParser.json({limit: '50mb'}));
// serve static files in the /files directory
app.use("/files", express.static(__dirname + '/files'));

app.get('/', function (req, res) {
    console.log("directory name:" + __dirname);
    res.send("Diets API");
});

var routes = require('./api/routes/DietsAPIRoutes'); //importing route
routes(app); //register the route

const httpsServer = https.createServer(credentials, app);
httpsServer.listen(port);


console.log('Diets RESTful API server started on port: ' + port);
