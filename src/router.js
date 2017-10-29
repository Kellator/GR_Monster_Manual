'use strict';
var config = require('./config');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
// var Monster = mongoose.model('Monster');
var Monster = require('./mongoose/MonsterModel');

// searches db specific to criteria entered in search
router.get('/monster', function(request, response) {
    // initial search criteria (e.g. search by name of creature OR categorization of creature) 
    // available on primary search function
    console.log(request.query);
    var primarySearchCrit = request.query.primarySearchCrit;
    console.log(primarySearchCrit);
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
router.post('/monster', function(request, response) {
    console.log('creating new document');
    let monster = {
        name : request.body.monster_name,
        category : request.body.monster_category,
        level : request.body.monster_level,
        body : request.body.monster_body_points,
        armor : request.body.monster_armor_points,
        description : request.body.monster_description,
        weaponSkills : request.body.weaponSkills,
        // scholarlySkills : request.body.scholarlySkills,
        // physicalDefenses : request.body.physicalDefenses,
        // spellDefenses : request.body.spellDefenses,
        // racialDefenses : request.body.RacialDefenses,
        treasure : request.body.standard_treasure,
        special : request.body.special_instructions
    };
    console.log(monster);
    console.log(request.body)
    Monster.create(monster, function(err, monster) {
        console.log(monster);
        if (err || !monster) {
            console.error('Argh!  Cannot create new monster.');
            console.log(err);
            return response.status(500).json({
                message: 'Argh! Internal Server Error.'
            });
        }
        console.log('Created New Monster Card : ' + monster._id);
        console.log(monster);
        response.status(201).json(monster);
    });
});
// deletes a monster card from the database
router.delete('/delete/:card_id', function(request, response) {
    let card_id = request.params.card_id;
    Monster.findByIdAndRemove(card_id, function(err, monster) {
        if (err) {
            console.log(err);
            console.error('Darn! Could not delete monster card.');
        }
        console.log('Monster Card Deleted');
        return response.status(204).end();
    });
});
// edits specific aspect of monster card based on active fields?

module.exports = router;