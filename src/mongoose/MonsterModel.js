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
        type: Number
    },
    description: {
        type: String
    },
    weaponSkills: {
        hasWeaponSkills: {type: Boolean},
        weaponSkills: {
            type: Array
        },
        slay: {
            hasSlays: {type: Boolean},
            numberOfSlays: {type: Number}
        },
        assissinate: {
            hasAssassinate: {type: Boolean},
            numberOfAssassinates: {type: Number}
        }
    },
    scholarlySkills: {
        hasScholarlySkills: {type: Boolean},
        alchemy: {
            hasAlchemy: {type: Boolean},
            levelsOfAlchemy: {type: Number}
        },
        celestial: {
            hasCelestialMagic: {type: Boolean},
            battleMagic: {
                levelOne: {type: Number},
                levelTwo: {type: Number},
                levelThree: {type: Number},
                levelFour: {type: Number},
                levelFive: {type: Number},
                levelSix: {type: Number},
                levelSeven: {type: Number},
                levelEight: {type: Number},
                levelNine: {type: Number}
            },
            formalMagic: {
                numOfLevels: {type: Number}
            }
        },
        earth: {
            hasEarthMagic: {type: Boolean},
            battleMagic: {
                levelOne: {type: Number},
                levelTwo: {type: Number},
                levelThree: {type: Number},
                levelFour: {type: Number},
                levelFive: {type: Number},
                levelSix: {type: Number},
                levelSeven: {type: Number},
                levelEight: {type: Number},
                levelNine: {type: Number}
            },
            formalMagic: {
                numOfLevels: {type: Number}
            }
        },
        elemental: {
            hasElementalMagic: {type: Boolean},
            battleMagic: {
                levelOne: {type: Number},
                levelTwo: {type: Number},
                levelThree: {type: Number},
                levelFour: {type: Number},
                levelFive: {type: Number},
                levelSix: {type: Number},
                levelSeven: {type: Number},
                levelEight: {type: Number},
                levelNine: {type: Number}
            },
            formalMagic: {
                numOfLevels: {type: Number}
            }
        },
        harmonic: {
            hasHarmoniclMagic: {type: Boolean},
            battleMagic: {
                levelOne: {type: Number},
                levelTwo: {type: Number},
                levelThree: {type: Number},
                levelFour: {type: Number},
                levelFive: {type: Number},
                levelSix: {type: Number},
                levelSeven: {type: Number},
                levelEight: {type: Number},
                levelNine: {type: Number}
            },
            formalMagic: {
                numOfLevels: {type: Number}
            }
        }
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