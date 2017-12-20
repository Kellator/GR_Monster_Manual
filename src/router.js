'use strict';
var config = require('./config');
var express = require('express');
var router = express.Router();
var passport = require('passport');
var mongoose = require('mongoose');
var Monster = require('./mongoose/MonsterModel');
const jwt = require('jsonwebtoken');
const jwtAuth = passport.authenticate('jwt', {session: false});

// A protected endpoint which needs a valid JWT to access it
router.get('/protected', jwtAuth, (req, res) => {
    console.log("hello protected")
    return res.json({
      data: 'rosebud'
    });
  });

// searches db specific to criteria entered in search
router.get('/monster', jwtAuth, (req, res) => {
    // initial search criteria (e.g. search by name of creature OR categorization of creature) 
    // available on primary search function
    var term = req.query.term;
    // secondary search criteria initiated in advanced search function
    // var secondarySearchCrit = req.query.secondarySearchCrit;
    if (typeof term === 'string' ) {
        var primarySearchCrit = term.toUpperCase();
        // uses specified search criteria to search in name of creature or category of creature and returns all matches
        Monster.find( { $or: [ {'name': {$regex: primarySearchCrit} }, { 'category': primarySearchCrit } ] } ).exec(function(err, monsters) {
            if (err) {
                return res.status(500).json({
                    message: 'Criminey! Internal Server Error!' 
                });
            }
            res.json(monsters);
        });
    }
    else {
        Monster.find().exec((err, monsters) => {
            if (err) {
                return res.status(500).json({
                    message: 'Crumbs! Internal Server Error!'
                });
            }
            res.json(monsters);
        });
    }
});

// creates new document for monster collection
router.post('/monster', jwtAuth, (req, res) => {
    let monsterName = (req.body.monster_name).toUpperCase();
    let monsterCategory = (req.body.monster_category).toUpperCase();
    let monster = {
        name : monsterName,
        category : monsterCategory,
        level : (req.body.monster_level).toUpperCase(),
        body : req.body.monster_body_points,
        armor : req.body.monster_armor_points,
        description : req.body.monster_description,
        weaponSkills : {
            basicWeaponSkills : req.body.weapon_type, 
            plusStrength : req.body.plus_strength_level,
            advancedWeaponSkills : {
                hasAdvancedWeaponSkills: req.body.has_advanced_weapon_skills,
                slays : {
                    hasSlays : req.body.has_slays,
                    numberOfSlays: req.body.number_of_slays
                },
                assassinates: {
                    hasAssassinates : req.body.has_assassinates,
                    numberOfAssassinates: req.body.number_of_assassinates
                }
            },
        },
        scholarlySkills: {
            // hasScholarlySkills: req.body,
            alchemy: {
                hasAlchemy: req.body.has_alchemy,
                levelsOfAlchemy: req.body.levels_of_alchemy
            },
            magic: {
                hasMagic: req.body.has_magic,               
                primarySchool: {
                    primarySchool: req.body.primary_school_of_magic,
                    primaryColumn: req.body.primary_column,
                    formalMagic: {
                        hasFormal: req.body.has_formal_magic,
                        primaryFormalLevels: req.body.primary_formal_magic_levels
                    }, 
                },
                secondarySchool: {
                    secondarySchool: req.body.secondary_school_of_magic,
                    secondaryColumn: req.body.secondary_column,
                    secondaryFormal: {
                        hasSecondaryFormal: req.body.has_secondary_formal_magic,
                        secondaryFormalLevels: req.body.secondary_formal_magic_levels
                    }
                }, 
            },
            magicSpecialInstructions : req.body.magic_special,
        },
        physicalDefenses: {
            parry: {
                hasPhysicalParry: req.body.has_physical_parry,
                parryPerDay: req.body.physical_parry
            },
            dodge: {
                hasPhysicalDodge: req.body.has_physical_dodge,
                dodgePerDay: req.body.physical_dodge
            },
            bane: {
                hasPhysicalBane: req.body.has_physical_bane,
                banePerDay: req.body.physical_bane
            },
            phase: {
                hasPhysicalPhase: req.body.has_physical_phase,
                phasePerDay: req.body.physical_phase
            },
            resist: {
                hasPhysicalResist: req.body.has_physical_resist,
                resistPerDay: req.body.physical_resist
            },
            return: {
                hasReturnPhysical: req.body.has_return_physical,
                returnPerDay: req.body.return_physical
            }
        },
        spellDefenses : {
            bane: {
                hasBaneMagic: req.body.has_bane_magic,
                baneMagicPerDay: req.body.bane_magic
            },
            cloak: {
                hasCloakMagic: req.body.has_cloak_magic,
                cloakMagicPerDay: req.body.cloak_magic
            },
            reflect: {
                hasReflectMagic: req.body.has_reflect_magic,
                reflectMagicPerDay: req.body.reflect_magic
            },
            phase: {
                hasPhaseMagic: req.body.has_phase_magic,
                phaseMagicPerDay: req.body.phase_magic
            },
            resist: {
                hasResistMagic: req.body.has_resist_magic,
                resistMagicPerDay: req.body.resist_magic
            },
            return: {
                hasReturnMagic : req.body.has_return_magic,
                returnMagicPerDay: req.body.return_magic
            }
        },
        racialDefenses : {
            resistCharm: {
                hasResistCharm: req.body.has_resist_charm,
                resistCharmPerDay: req.body.resist_charm
            },
            resistSleep: {
                hasResistSleep: req.body.has_resist_sleep,
                resistSleepPerDay: req.body.resist_sleep
            },
            resistPoison: {
                hasResistPoison: req.body.has_resist_poison,
                resistPoisonPerDay: req.body.resist_poison
            },
            racialDodge: {
                hasRaciallDodge: req.body.has_racial_dodge,
                racialDodgePerDay: req.body.racial_dodge
            },
        },
        treasure : req.body.standard_treasure.split(" "),
        special : req.body.special_instructions
    };
    Monster.create(monster, (err, monster) => {
        if (err || !monster) {
            return res.status(500).json({
                message: 'Argh! Internal Server Error.'
            });
        }
        res.status(201).json(monster);
    });
});
// edits specific creature card document
// router.put('/edit',function(req, response) {
//     let card_id = req.params.card_id;
//     let key; //set to equal the Object key (form input name?)
//     let value; // set to equal the object key's value
//     // for query - find by card_id, then find the object key - if object key
//     console.log(card_id);
//     Monster.findOneAndUpdate(card_id,  {key: value }, function(err, monster) {
//         console.log("edit pushed")
//         if (err) {
//             console.log(err);
//             console.error('Crumbs!  Could not edit creature card.');
//             return response.status(500).json({
//                 message: 'Crumbs! Internal Server Error.'
//             });
//         }
//         console.log('Creature card edited');
//         return response.status(200).end();
//     })
// })
// deletes a monster card from the database
router.delete('/delete', jwtAuth, (req, res) => {
    let card_id = req.body.card_id;
    console.log(req.body.card_id);
    Monster.findByIdAndRemove(card_id, (err, monster) => {
        if (err) {
            console.log(err);
            console.error('Darn! Could not delete monster card.');
            return res.status(500).json({
                message: 'Nuts.  Internal Server Error.'
            });
        }
        console.log('Monster Card Deleted');
        return res.status(204).end();
    });
});

module.exports = router;