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
    var req = request.query.term;
    var primarySearchCrit = req.toUpperCase();
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
    let monsterName = (request.body.monster_name).toUpperCase();
    let monsterCategory = (request.body.monster_category).toUpperCase();
    let monster = {
        name : monsterName,
        category : monsterCategory,
        level : request.body.monster_level,
        body : request.body.monster_body_points,
        armor : request.body.monster_armor_points,
        description : request.body.monster_description,
        // weaponSkills : request.body.weaponSkills,
        // scholarlySkills : request.body.scholarlySkills,
        physicalDefenses: {
            parry: {
                hasPhysicalParry: request.body.has_physical_parry,
                parryPerDay: request.body.physical_parry
            },
            dodge: {
                hasPhysicalDodge: request.body.has_physical_dodge,
                dodgePerDay: request.body.physical_dodge
            },
            bane: {
                hasPhysicalBane: request.body.has_physical_bane,
                banePerDay: request.body.physical_bane
            },
            phase: {
                hasPhysicalPhase: request.body.has_physical_phase,
                phasePerDay: request.body.physical_phase
            },
            resist: {
                hasPhysicalResist: request.body.has_physical_resist,
                resistPerDay: request.body.physical_resist
            }
        },
        // spellDefenses : request.body.spellDefenses,
        // racialDefenses : request.body.RacialDefenses,
        treasure : request.body.standard_treasure,
        special : request.body.special_instructions
    };
    console.log(request.body);
    console.log(monster);
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