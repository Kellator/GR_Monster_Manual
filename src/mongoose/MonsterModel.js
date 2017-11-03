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
        type: Array
    },
    // scholarlySkills: {
    //     type: Array
    // },
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
    // spellDefenses: {
    //     type: Array
    // },
    // racialDefenses: {
    //     type: Array
    // },
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