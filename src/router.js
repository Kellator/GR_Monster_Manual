'use strict';
var config = require('./config');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Monster = require('./mongoose/MonsterModel');
var bcrypt = require('bcryptjs');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// passport authentication strategy
passport.use(new LocalStrategy(
    function(username, password, done) {
        User.findByUsername(username, function(err, user) {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, {
                    message: 'Incorrect username.'
                });
            }
            user.validatePassword(password, function(err, isValid) {
                if(err || !isValid) { return done(null, false, {
                    message: 'Incorrect Password.'
                });
            }
                return done(null, user);
            });
        });
    }
));
//authenticated session persistance
passport.serializeUser(function(user, callback) {
    console.log("serialize");
    callback(null, user.id);
});
passport.deserializeUser(function(id, callback) {
    console.log("deserialize");
    User.findById(id, function(err, user) {
        if (err) {
            return callback(err);
        }
        callback(null, user);
    });
});
// passport.use(strategy);
router.use(passport.initialize());
router.use(passport.session());
// searches db specific to criteria entered in search
router.get('/monster', function(request, response) {
    // initial search criteria (e.g. search by name of creature OR categorization of creature) 
    // available on primary search function
    var req = request.query.term;
    // secondary search criteria initiated in advanced search function
    // var secondarySearchCrit = request.query.secondarySearchCrit;
    if (typeof req === 'string' ) {
        var primarySearchCrit = req.toUpperCase();
        // uses specified search criteria to search in name of creature or category of creature and returns all matches
        Monster.find( { $or: [ {'name': {$regex: primarySearchCrit} }, { 'category': primarySearchCrit } ] } ).exec(function(err, monsters) {
            if (err) {
                return response.status(500).json({
                    message: 'Criminey! Internal Server Error!' 
                });
            }
            response.json(monsters);
        });
    }
    else {
        Monster.find().exec(function(err, monsters) {
            if (err) {
                return response.status(500).json({
                    message: 'Crumbs! Internal Server Error!'
                });
            }
            response.json(monsters);
        });
    }
});

// creates new document for monster collection
router.post('/monster', function(request, response) {
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
            basicWeaponSkills : request.body.weapon_type, 
            plusStrength : request.body.plus_strength_level,
            advancedWeaponSkills : {
                hasAdvancedWeaponSkills: request.body.has_advanced_weapon_skills,
                slays : {
                    hasSlays : request.body.has_slays,
                    numberOfSlays: request.body.number_of_slays
                },
                assassinates: {
                    hasAssassinates : request.body.has_assassinates,
                    numberOfAssassinates: request.body.number_of_assassinates
                }
            },
        },
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
            },
            magicSpecialInstructions : request.body.magic_special,
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
                returnPerDay: request.body.return_physical
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
        treasure : request.body.standard_treasure.split(" "),
        special : request.body.special_instructions
    };
    Monster.create(monster, function(err, monster) {
        if (err || !monster) {
            return response.status(500).json({
                message: 'Argh! Internal Server Error.'
            });
        }
        response.status(201).json(monster);
    });
});
// edits specific creature card document
// router.put('/edit',function(request, response) {
//     let card_id = request.params.card_id;
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
router.delete('/delete', function(request, response) {
    let card_id = request.body.card_id;
    console.log(request.body.card_id);
    Monster.findByIdAndRemove(card_id, function(err, monster) {
        if (err) {
            console.log(err);
            console.error('Darn! Could not delete monster card.');
            return response.status(500).json({
                message: 'Nuts.  Internal Server Error.'
            });
        }
        console.log('Monster Card Deleted');
        return response.status(204).end();
    });
});
// edits specific aspect of monster card based on active fields?
// creates new user credentials
router.get('/register', function (request, response) {
    console.log(request.body);
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
    bcrypt.hash(password, salt, function(error, hash) {
        if(error) {
            console.log(error);
            return response.status(500).json({
                message: "Internal Server Error"
            });
        }
        let user = new user({
            username: username,
            email: email,
            password: hash
        });
        user.save(function(error) {
            if(error) {
                console.log(error);
                return reset.status(500).json({
                    message: "Internal Server Error"
                });
            }
            console.log(user.updatedAt);
            return response.status(201).json({
                status: 'Registration Successful!',
                username: user.username,
                email: user.email,
                password: password
            });
        });
    });
});
// checks user credentials
router.post('/login', passport.authenticate('local'),
    function(request, response) {
        console.log(response.request);
        let username = response.request.user.username;
        let email = response.request.user.email;
        let id = response.request.user._id;
        return response.status(200).json({
            status: 'Login Successful',
            username: username,
            email: email,
            id: id
        });
    }
)
module.exports = router;