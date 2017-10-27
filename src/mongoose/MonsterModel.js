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
        type: Number,
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
    scholarlySkills: {
        type: Array
    },
    physicalDefenses: {
        type: Array
    },
    spellDefenses: {
        type: Array
    },
    racialDefenses: {
        type: Array
    },
    special: {
        type: String
    },
    treasure: {
        type: Array
    }
});

MonsterSchema.plugin(timestamps);
var Monster = mongoose.model('Monster', MonsterSchema);
module.exports = Monster;