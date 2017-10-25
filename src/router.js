'use strict';
var config = require('./config');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Monster = mongoose.model('Monster');

// searches db specific to criteria entered in search
router.get('/search', function(request, response) {
    // initial search criteria (e.g. search by name of creature OR categorization of creature) 
    // available on primary search function
    var primarySearchCrit = request.query.primarySearchCrit;
    // secondary search criteria initiated in advanced search function
    // var secondarySearchCrit = request.query.secondarySearchCrit;
    if (primarySearchCrit == '') {
        Monster.find().exec(function(err, monsters) {
            if (err) {
                console.log(err);
                return response.status(500).json({
                    message: 'Crumbs! Internal Server Error!'
                });
            }
            response.json(monsters);
        });
    }
    else {
        // uses specified search criteria to search in name of creature or category of creature and returns all matches
        Monster.find( { $or: [ {'name': primarySearchCrit }, { 'category': primarySearchCrit } ] } ).exec(function(err, monsters) {
            if (err) {
                console.log(err);
                console.log('search criteria not valid');
                return response.status(500).json({
                    message: 'Criminey! Internal Server Error!' 
                });
            }
            response.json(monsters);
        });
    }
});

// creates new document for monster collection
router.post('/create', function(request, response) {
    console.log('creating new document');
    let monster = request.body;
    Monster.create(monster, function(err, monster) {
        if (err || !monster) {
            console.error('Argh!  Cannot create new monster.');
            console.log(err);
            return response.status(500).json({
                message: 'Argh! Internal Server Error.'
            });
        }
        console.log('Created New Monster Card : ' + monster._id);
        response.status(201).json(monster);
    });
});