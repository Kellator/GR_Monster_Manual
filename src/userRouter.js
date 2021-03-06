'use strict';
var config = require('./config');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var bcrypt = require('bcryptjs');
var passport = require('passport');
var cors = require('cors');
var jwt = require('jsonwebtoken');
var User = require('./mongoose/UserModel');

router.use(bodyParser.json());
router.use(cors());

//authenticated session persistance
passport.serializeUser((user, callback) => {
    callback(null, user._id);
});
passport.deserializeUser((id, callback) => {
    User.findById(id, function(err, user) {
        if (err) {
            return callback(err);
        }
        callback(null, user);
    });
});

router.use(passport.initialize());

// creates new user credentials
router.post('/', (request, response) => {
    if(!request.body) {
        return response.status(400).json({
            message: "No Request Body"
        });
    }
    if(!('username' in request.body)) {
        return response.status(422).json({
            message: "Missing Field: username"
        });
    }
    if(!('email' in request.body)) {
        return response.status(422).json({
            message: "Missing Field: email"
        });
    }
    let username = request.body.username;
    if(typeof username !== 'string') {
        return response.status(422).json({
            message: "Incorrect Field Type: username"
        });
    }
    username = username.trim();
    if(username === '') {
        return response.status(422).json({
            message: "Incorrect Field Length: username"
        });
    }
    let email = request.body.email;
    if(typeof email !== 'string') {
        return response.status(422).json({
            message: "Incorrect Field Type: email"
        });
    }
    email = email.trim();
    if(email === '') {
        return response.status(422).json({
            message: "Incorrect Field Length: email"
        });
    }
    let password = request.body.password;
    if(typeof password !== 'string') {
        return response.status(422).json({
            message: "Incorrect Field Type: password"
        });
    }
    password = password.trim();
    if(password === '') {
        return response.status(422).json({
            message: "Incorrect Field Length: password"
        });        
    }
    bcrypt.genSalt(10, function(error, salt) {
        if (error) { 
            console.log(error)
            return response.status(500).json({
                message: "Internal Server Error"
            });
        }
        bcrypt.hash(password, salt, function(error, hash) {
            if(error) {
                console.log(error)
                return response.status(500).json({
                    message: "Internal Server Error"
                });
            }
            let user = new User({
                username: username,
                email: email,
                password: hash
            });
            user.save(function(error) {
                if(error) {
                    console.log(error)
                    return response.status(500).json({
                        message: "Internal Server Error"
                    });
                }
                return response.status(201).json({
                    status: 'Registration Successful!',
                    username: user.username,
                    email: user.email,
                    password: user.password
                });
            });
        });
    });
});

module.exports = router;