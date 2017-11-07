var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

var MonsterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [ true, 'Name required for searchable entry.' ]
    },
    category: {
        type: String,
        required: [ true, 'Category or type of creature is required for searchable entry.' ]
    },
    level: {
        type: String,
        required: [ true, 'Monster level is required ']
    },
    body: {
        type: String,
        required: [ true, 'Body points are required for monster creation.' ]
    },
    armor: {
        type: String
    },
    description: {
        type: String
    },
    weaponSkills : {
        basicWeaponSkills : {
            hasBasicWeaponSkills: { type: Boolean },
            weaponType: { type: String }
        }, 
        advancedWeaponSkills : {
            hasAdvancedWeaponSkills: { type: Boolean },
            slays : {
                hasSlays : { type: Boolean },
                numberOfSlays: { type: String }
            },
            assassinates: {
                hasAssassinates : { type: Boolean },
                numberOfAssassinates: { type: String }
            }
        }
    },
    scholarlySkills: {
        hasScholarlySkills: {type: Boolean},
        alchemy: {
            hasAlchemy: {type: Boolean},
            levelsOfAlchemy: { type: String }
        },
        magic: {
            hasMagic: {type: Boolean},
            hasFormal: { type: Boolean },
            primarySchool: { type: String},
            primaryColumn: {
                levelOne: { type: String },
                levelTwo: { type: String },
                levelThree: { type: String },
                levelFour: { type: String },
                levelFive: { type: String },
                levelSix: { type: String },
                levelSeven: { type: String },
                levelEight: { type: String },
                levelNine: { type: String }
            },
            primaryFormalMagic: {
                numOfLevels: { type: String }
            },
            secondarySchool: { type: String },
            secondaryColumn: {
                levelOne: { type: String },
                levelTwo: { type: String },
                levelThree: { type: String },
                levelFour: { type: String },
                levelFive: { type: String },
                levelSix: { type: String },
                levelSeven: { type: String },
                levelEight: { type: String },
                levelNine: { type: String }
            },
            secondaryFormalMagic: {
                numOfLevels: { type: String }
            },
            magicSpecialInstructions : { type: String }
        },
    },
    physicalDefenses: {
        parry: {
            hasPhysicalParry: {type: Boolean},
            parryPerDay: {type: Number}
        },
        dodge: {
            hasPhysicalDodge: {type: Boolean},
            dodgePerDay: {type: Number}
        },
        bane: {
            hasPhysicalBane: {type: Boolean},
            banePerDay: {type: Number}
        },
        phase: {
            hasPhysicalPhase: {type: Boolean},
            phasePerDay: {type: Number}
        },
        resist: {
            hasPhysicalResist: {type: Boolean},
            resistPerDay: {type: Number}
        }
    },
    spellDefenses: {
        bane: {
            hasMagicalBane: {type: Boolean},
            banePerDay: {type: Number}
        },
        cloak: {
            hasMagicalCloak: {type: Boolean},
            cloakPerDay: {type: Number}
        },
        reflect: {
            hasMagicalReflect: {type: Boolean},
            reflectPerDay: {type: Number}
        },
        phase: {
            hasMagicalPhase: {type: Boolean},
            phasePerDay: {type: Number}
        },
        resist: {
            hasMagicalResist: {type: Boolean},
            resistPerDay: {type: Number}
        }
    },
    racialDefenses: {
        charm: {
            hasRacialCharm: {type: Boolean},
            charmPerDay: {type: Number}
        },
        sleep: {
            hasRacialSleep: {type: Boolean},
            sleepPerDay: {type: Number}
        },
        poison: {
            hasRacialPoison: {type: Boolean},
            poisonPerDay: {type: Number}
        },
        dodge: {
            hasPhysicalDodge: {type: Boolean},
            dodgePerDay: {type: Number}
        }
    },
    treasure: {
        type: Array
    },
    special: {
        type: String
    }

});

MonsterSchema.plugin(timestamps);
var Monster = mongoose.model('Monster', MonsterSchema);
module.exports = Monster;