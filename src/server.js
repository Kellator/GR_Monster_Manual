'user strict';
require('babel-register');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var http = require('http');
var cors = require('cors');
var passport = require('passport');
var config = require('./config');
var router = require('./router.js');
var userRouter = require('./userRouter.js');
// var authRouter = require('./auth/router.js');
var Monster = require('./mongoose/MonsterModel');
const app = express();
var morgan = require('morgan')

const { router: authRouter, localStrategy, jwtStrategy } = require('./auth');

app.use(bodyParser.json());
app.use(cors());
app.use('/', router);
app.use('/user', userRouter);
app.use('/auth', authRouter);
// enables pre-flight accross the board
app.options('*', cors()); 

passport.use(localStrategy);
passport.use(jwtStrategy);
const server = http.Server(app);

// coordinates the connection to the database and the running of the HTTP server
const runServer = function(callback) {
    console.log(config.DATABASE_URL);
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

app.get('/', function(request, response) {
    console.log('app.get fired for /');
    return response.sendStatus(200);
});
