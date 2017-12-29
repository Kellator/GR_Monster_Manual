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
        basicWeaponSkills : { type: String }, 
        plusStrength :  { type: String },
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
            primarySchool: {
                primarySchool: { type: String },
                primaryColumn: { type: String },
                formalMagic: {
                    hasFormal: {type: Boolean},
                    primaryFormalLevels: { type: String }
                }, 
            },
            secondarySchool: {
                secondarySchool: { type: String },
                secondaryColumn: { type: String },
                secondaryFormal: {
                    hasSecondaryFormal: {type: Boolean},
                    secondaryFormalLevels: { type: String }
                }
            }, 
        },
        magicSpecialInstructions : { type: String },
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
        },
        return: {
            hasReturnPhysical : {type: Boolean},
            returnPerDay: {type:Number}
        }
    },
    spellDefenses: {
        bane: {
            hasBaneMagic: {type: Boolean},
            baneMagicPerDay: {type: Number}
        },
        cloak: {
            hasCloakMagic: {type: Boolean},
            cloakMagicPerDay: {type: Number}
        },
        reflect: {
            hasReflectMagic: {type: Boolean},
            reflectMagicPerDay: {type: Number}
        },
        phase: {
            hasPhaseMagic: {type: Boolean},
            phaseMagicPerDay: {type: Number}
        },
        resist: {
            hasResistMagic: {type: Boolean},
            resistMagicPerDay: {type: Number}
        },
        return: {
            hasReturnMagic : {type: Boolean},
            returnMagicPerDay: {type:Number}
        }
    },
    racialDefenses: {
        resistCharm: {
            hasResistCharm: {type: Boolean},
            resistCharmPerDay: {type: Number}
        },
        resistSleep: {
            hasResistSleep: {type: Boolean},
            resistSleepPerDay: {type: Number}
        },
        resistPoison: {
            hasResistPoison: {type: Boolean},
            resistPoisonPerDay: {type: Number}
        },
        racialDodge: {
            hasRaciallDodge: {type: Boolean},
            racialDodgePerDay: {type: Number}
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