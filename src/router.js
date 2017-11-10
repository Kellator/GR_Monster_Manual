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
        level : (request.body.monster_level).toUpperCase(),
        body : request.body.monster_body_points,
        armor : request.body.monster_armor_points,
        description : request.body.monster_description,
        weaponSkills : {
            basicWeaponSkills : {
                // hasBasicWeaponSkills: request.body.has_basic_weapon_skills,
                weaponType: request.body.weapon_type
            }, 
            advancedWeaponSkills : {
                hasAdvancedWeaponSkills: request.body.has_advanced_weapon_skills,
                slays : {
                    hasSlays : request.body.has_slays,
                    numberOfSlays: request.body.nummber_of_slays
                },
                assassinates: {
                    hasAssassinates : request.body.has_assassinates,
                    numberOfAssassinates: request.body.number_of_assassinates
                }
            },
        },
//need to update scholarly skills component before activating this section 
        scholarlySkills: {
            // hasScholarlySkills: request.body,
            alchemy: {
                hasAlchemy: request.body.has_alchemy,
                levelsOfAlchemy: request.body.levels_of_alchemy
            },
            magic: {
                hasMagic: request.body.has_magic,               
                primarySchool: {
                    primarySchool: request.body.primary_school_of_magic,
                    primaryColumn: request.body.primary_column,
                    formalMagic: {
                        hasFormal: request.body.has_formal_magic,
                        primaryFormalLevels: request.body.primary_formal_magic_levels
                    }, 
                },
                secondarySchool: {
                    secondarySchool: request.body.secondary_school_of_magic,
                    secondaryColumn: request.body.secondary_column,
                    secondaryFormal: {
                        hasSecondaryFormal: request.body.has_secondary_formal_magic,
                        secondaryFormalLevels: request.body.secondary_formal_magic_levels
                    }
                }, 
                magicSpecialInstructions : request.body.magic_special
            },
        },
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
            },
            return: {
                hasReturnPhysical: request.body.has_return_physical,
                returnPhysicalPerDay: request.body.return_physical
            }
        },
        spellDefenses : {
            bane: {
                hasBaneMagic: request.body.has_bane_magic,
                baneMagicPerDay: request.body.bane_magic
            },
            cloak: {
                hasCloakMagic: request.body.has_cloak_magic,
                cloakMagicPerDay: request.body.cloak_magic
            },
            reflect: {
                hasReflectMagic: request.body.has_reflect_magic,
                reflectMagicPerDay: request.body.reflect_magic
            },
            phase: {
                hasPhaseMagic: request.body.has_phase_magic,
                phaseMagicPerDay: request.body.phase_magic
            },
            resist: {
                hasResistMagic: request.body.has_resist_magic,
                resistMagicPerDay: request.body.resist_magic
            },
            return: {
                hasReturnMagic : request.body.has_return_magic,
                returnMagicPerDay: request.body.return_magic
            }
        },
        racialDefenses : {
            resistCharm: {
                hasResistCharm: request.body.has_resist_charm,
                resistCharmPerDay: request.body.resist_charm
            },
            resistSleep: {
                hasResistSleep: request.body.has_resist_sleep,
                resistSleepPerDay: request.body.resist_sleep
            },
            resistPoison: {
                hasResistPoison: request.body.has_resist_poison,
                resistPoisonPerDay: request.body.resist_poison
            },
            racialDodge: {
                hasRaciallDodge: request.body.has_racial_dodge,
                racialDodgePerDay: request.body.racial_dodge
            },
        },
        treasure : request.body.standard_treasure,
        special : request.body.special_instructions
    };
    console.log(request.body);
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