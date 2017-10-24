'user strict';
require('babel-register');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var http = require('http');
var cors = require('cors');

var config = require('./config');

const app = express();
app.use(bodyParser.json());
app.user(cors());

const server = http.Server(app);

// coordinates the connection to the database and the running of the HTTP server
const runServer = function(callback) {
    mongoose.connect(config.DATABASE_URL, { useMongoClient: true }, function(err) {
        if (err && callback) {
            return callback(err);
        }
        app.listen(config.PORT, function() {
            console.log('I am listening on localhost: ', + config.PORT);
            if (callback) {
                callback();
            }
        });
    });
};
// makes file both executable script and a module
if (require.main === module) {
    runServer(function(err) {
        if (err) {
            console.error(err);
        }
    });
};

exports.app = app;
exports.runServer = runServer;
