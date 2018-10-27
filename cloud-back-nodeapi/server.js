var express = require('express');
var session = require('cookie-session'); // Charge le middleware de sessions
var bodyParser = require('body-parser'); // Charge le middleware de gestion des paramètres
var mongoose = require('mongoose');
var path = require('path');
var http = require('http');
var cors = require('cors');

// Connect to mongoDB server 
    //load config
var db = require('./config/database');

// Init express
var app = express();

    //connect to mongoDB database
mongoose.connect(db.url, { useNewUrlParser: true });

    // load the routes
 require('./app/routes')(app);


mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', () => {
    console.log('Connected to database. ');
});
mongoose.set('debug', true); // debug in console



// Enable bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Enable CORS 
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });



//Get environment port or use 3000
var port = process.env.PORT || '3000';
app.set('port', port);
 
//Create HTTP server.
var server = http.createServer(app);
 
//Listen on port
server.listen(port, () => console.log(`API running on localhost:${port}`));
