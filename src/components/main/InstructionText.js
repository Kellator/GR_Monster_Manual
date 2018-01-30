let instructions = {
    homeView: { 
        text: [
            // "To start using, enter the name or category of a creature you are looking for.",
            // "Not sure of the name?  You can view the entire database list by clicking SUBMIT.", 
            // "To view a specific category of creature enter one of the following search terms:"
        ],
        categoryList: [
            "Animal", "Elemental", "Fae", "Giant", "Goblinoid", "Human", "Humanoid", "Magical Creature", "Undead"
        ]
    },
    createView:{
        // basic instructions
        text: {        
            "1": [
                "For each new creature, the first four fields are required (Name, Category, Level, Body Points).",  
                "Database users will be able to search for your creature using either the category or name so be sure to name your creature appropriately.",
                "Creature creators are encouraged to include as much detail about skills, defenses, and descriptions as possible.",
                "This helps NPCs (non-player-characters) know how to play the creature."
            ],
            // weapon skills demo instructions text
            "2": [
                "For your new creature, be sure to select basic weapon skills.  This helps NPCs choose the kind of weapon to take.",
                "If a creature has no weapons; for example, a mage or wizard, select 'No Weapons' then click the NEXT button.",
                "If a creature doesn't use weapons but instead has natural body weaponry, select Claws or Bite.  Claws allow for two short weapons while a bite is typically a single long weapon.",
                "Long claws are typically used by larger and higher level Animals, Elementals, Undead, or Magical Beasts.",
                "Plus Strength is a quality that allows a creature to naturally hit harder or for more damage.  The amount of damage added to the weapon call is in (parentheses).",
                "Click the checkbox to open the Advanced Weapon Skills section.  Not all creatures have these skills.  They are typically reserved for Mid to High level creatures.",
                "Slays deal 100 points of damage if the hit lands and are used by accomplished fighters and powerful creatures.", 
                "Assassinates are a rogue ability that allows a rogue class or stealthy creature to deal a dangerous sneak attack from behind. It deals 100 points of damage.",
                "When done, click NEXT to continue."
            ],
            // non-weapon skills demo instructions text
            "3": [
                "Click on the checkbox next to the skill you want to add.",
                "Alchemy is a skill that allows an individual to apply poisons to weapons and/or throw gas globes to cause damage or effects.  The number of levels corresponds to the level of substance an alchemist may use.",
                "The main three schools of magic are Celestial, Earth, and Harmonic.  Arcane and Elemental are typically reserved for Elementals, Fae, and Magical Creatures.",
                "Once you select a school of magic, you may select the column of magic.  A column indicates how many spells per level a caster has.",
                "Once you have selected a primary school of magic, you may select a different school as a secondary school of magic.",
                "In addition, once a creature has a magic, they may also have access to formal magic.  Formal magic is not necessary nor appropriate for all magic using creatures.  Click the checkbox next to formal magic to select and then enter levels of formal.",
                "In the Special Instructions, you may enter any non-weapon specific information you would like displayed in this section.  For example: 'All spells may be cast as packet delivered magic attacks.' or 'May Spell Strike all Earth spells, fifth level and below.'",
                "When finished entering any applicable non-weapon skills, click NEXT to conitnue."
            ],
            // physical defenses demo instructions text
            "4": [
                "Physical Defenses allow a creature to defend against physical attacks.  To select a type of defense, click on the checkbox and enter the number of times per day the skill can be used.  This section may be skipped by clicking NEXT",
                "Parry is a weaponskill defense that allows a creature to parry or block a physical attack, even if the attack lands on the body.  The creature must have a weapon or claw to parry.",
                "Dodge allows a creature to avoid the attack.  The representation is that a creature moves out of the way of the attack.  No weapon or claw is necessary to dodge.",
                "Bane allows a creature to avoid the damage caused by a physical attack by reflecting the skill or damage back at the attacker.",
                "Phase is similar to dodge except that instead of representing a creature physically avoiding the hit, it is as if the creature goes incorporeal to avoid the hit.",
                "Resist allows a creature to ignore the hit dealt.  The representation of this skill is that the creature is strong enough that the effect does not occur.  No weaponry is necessary to use this skill.",
                "Return allows a creature to ignore the damage but also return the skill spent on the attack back to the attacker.  This is especially useful when dealing with younger or less experienced players as they will not lose all of their skills in a battle.  Players must medidate for a minute to regain their returned skills.",
                "When finished entering any applicable Physical Defenses, click NEXT to continue."
            ],
            // spell defenses demo instruction text
            "5": [
                "Spell Defenses allow a creature to defend against magical attacks including packet delivered or spellstrike spells.  To select a type of defense, click on the checkbox and enter the number of times per day the skill can be used.  This section may be skipped by clicking NEXT.",
                "Most Spell Defenses work just like their Physical Defense counterparts.",
                "Bane allows a creature to avoid the damage or effect of a spell reflecting it back at the caster who must then take the effect or call a magical defense of their own.",
                "Cloak allows a creature to ignore the damage or effect of a spell.",
                "Reflect works the same as Bane, allowing a creature to reflect the spell effect back at the caster.",
                "Phase allows the creature to avoid the effect of the spell.  This is represented as the creature phasing out or seeming to go incorporeal for a moment to avoid the spell.",
                "Return allows a creature to igenore the effect of the spell but return that skill back to the caster.  The caster must meditate for one minute to regain the use of the skill.",
                "When finished entering any applicable Spell Defenses, click NEXT to continue."
            ],
            // racial defenses demo instructions text
            "6": [
                "Racial Defenses represent skills specific to particular races found in the game.  For example, elves are adept at resisting charm effects.",
                "Resist Charm allows a creature the ability to resist Charm, Enslavement, Fear, and Sleep effects.",
                "Resist Sleep allows a creature to resist the sleep effect only.",
                "Resist Poison allows a creature the ability to resist the effects of alchemical and magically delivered poisons.",
                "Racial Dodge works just like the Physical Defense Dodge and allows a creature the ability to avoid an attack, a spell, or even the damage inflicted by a trap.",
                "When finished entering any applicable Racial Defenses, click NEXT to continue."
            ],
            // treasure etc demo instructions text
            "7": [
                "General Treasure suggestions:  for LOW level creature - copper or silver, for MID level creatures - silver, gold, or production items, for HIGH level creatures - gold, platinum, components, and magic items.",
                "Remember that treasure value is relative to your player base and should never be set in stone.",
                "The Special Instructions line is available for any additional comments of instructions that should be added for this creature.  For example, maybe you want to instruct that a high level dragon should be played by multiple NPCs or that a specific NPC Bandit has a flamboyant personality.",
                "When Treasure and any applicable additional Instructions have been added, click SUBMIT to add your creature to the database."
            ]
        }
    },
    newCardView: {
        text: ["From this screen, you can enter another Creature Card or search for a Creature that already exists in the database."]
    },
    resultsListView: {
        text: [
            "Select a creature from the list to see the full Creature Card.",
            "Don't see the creature you're looking for in the list?  Check your spelling.  If you still don't see it, add one!"
        ]
    },
    cardView: {
        text: [
            "The Creature Card displays the stats for the selected Creature.",
            "Navigate the site by using the menu in the upper right hand corner.",
            "Clicking the DELETE button at the bottom of the card will prompt you to make sure that you are certain you wish to delete the card.  This action is irreversible."
        ]      
    }
}
export default instructions;