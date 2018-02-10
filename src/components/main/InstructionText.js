let instructions = {
    homeView: {
        text: [
            "Welcome to the Codex Creatura!  ",
            "To begin, simply enter a creature name or category and click Search.  ",
            "You can also use the menu in the upper left hand side to create a new creature, learn more about us, or logout. "
        ]
    },
    createView:{
        // basic instructions
        text: {        
            one: [
                "For each new creature, the first four fields are required (Name, Category, Level, Body Points).  ",  
                "Database users will be able to search for your creature using either the category or name so be sure to name your creature appropriately.",
                "Creature creators are encouraged to include as much detail about skills, defenses, and descriptions as possible.  ",
                "This helps NPCs (non-player-characters) know how to play the creature.  "
            ],
            // weapon skills demo instructions text
            two: [
                "Basic Weapon Skills and Plus Stength are required selectors.  ",
                "Advanced Weapon Skills include melee combat skills such as Slay and Assassinate.  ",
                "To access the Advanced Weapons Skills, click the check box.  ",
                "Add the number of times each skill may be used per day.  "
            ],
            // non-weapon skills demo instructions text
            three: [
                "Click on the checkbox next to the skill you want to add.  ",
                "Alchemy is a skill that allows an individual to apply poisons to weapons and/or throw gas globes to cause damage or effects.  ",
                // "The number of levels corresponds to the level of substance an alchemist may use.  ",
                "The main three schools of magic are Celestial, Earth, and Harmonic.  Arcane and Elemental are typically reserved for Elementals, Fae, and Magical Creatures.  ",
                "A column indicates how many spells per level a caster has.  ",
                // "Higher level characters may have a secondary school of magic and second column.  ",
                // "In addition, once a creature has a magic, they may also have access to formal magic.  ",
                "Formal Magic is ritual casting magic.  ",
                "This section may be skipped by clicking NEXT."
            ],
            // physical defenses demo instructions text
            four: [
                "Physical Defenses allow a creature to defend against physical attacks. ",
                "Click any checkbox to select a skill and then add times per day for skill.  ",
                "This section may be skipped by clicking NEXT."
                // "Parry blocks a physical attack.  The creature must have a weapon or claw to parry.  ",
                // "Dodge avoids any physical or packet attack.  No weapon or claw is necessary to dodge.  ",
                // "Bane reflects the skill, spell, or damage back at the attacker.",
                // "Phase is similar to dodge.  ",
                // "Resist allows a creature to ignore the hit dealt. No weaponry is necessary to use this skill.  ",
                // "Return allows a creature to ignore the attack but also return the skill to the attacker.  "
            ],
            // spell defenses demo instruction text
            five: [
                "Spell Defenses allow a creature to defend against magical attacks including packet delivered or spellstrike spells.  To select a type of defense, click on the checkbox and enter the number of times per day the skill can be used.  ",
                "Most Spell Defenses work just like their Physical Defense counterparts.  ",
                "This section may be skipped by clicking NEXT."
                // "Bane and reflect reflect the effect or damage back at the caster.  ",
                // "Cloak allows a creature to ignore the damage or effect of a spell.  ",
                // "Phase allows the creature to avoid the effect of the spell.  ",
                // "Return allows a creature to igenore the effect of the spell but returns that skill back to the caster.  "
            ],
            // racial defenses demo instructions text
            six: [
                "Racial Defenses represent skills specific to particular races found in the game.  ",
                "Resist Charm allows a creature the ability to resist Charm, Enslavement, Fear, and Sleep effects.  ",
                "Resist Sleep allows a creature to resist the sleep effect only.",
                "Resist Poison allows a creature the ability to resist the effects of alchemical and magically delivered poisons.",
                "Racial Dodge is the same as physical dodge.",
                "This section may be skipped by clicking NEXT."
            ],
            // treasure etc demo instructions text
            seven: [
                "General Treasure suggestions:  for LOW level creature - copper or silver, for MID level creatures - silver, gold, or production items, for HIGH level creatures - gold, platinum, components, and magic items.  ",
                "Remember that treasure value is relative to your player base and should never be set in stone.  "
            ]
        }
    },
    newCardView: {
        text: ["From this screen, you can enter another Creature Card or search for a Creature that already exists in the database.  "]
    },
    resultsListView: {
        text: [
            "Select a creature from the list to see the full Creature Card.",
            "Don't see the creature you're looking for in the list?  Check your spelling.  If you still don't see it, add one!  "
        ]
    },
    cardView: {
        text: [
            "The Creature Card displays the stats for the selected Creature.  ",
            "Clicking the DELETE button at the bottom of the card will prompt you to make sure that you are certain you wish to delete the card.  This action is irreversible.  "
        ]      
    }
}
export default instructions;