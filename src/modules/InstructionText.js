let instructions = {
    homeView: { 
        lineOne: "To start using, simply enter the name of a creature you are looking for.",
        lineTwo: "Not sure of the name?  Simply enter one of the following categories:" ,
        categoryList: [
            "Animal", "Elemental", "Fae", "Giant", "Goblinoid", "Human", "Humanoid", "Magical Creature", "Undead"
        ]
    },
    createView: {
        pageOne: {
            lineOne: "For each new creature, only the first four fields are required.  You will not be able to continue without a creature's :",
            requiredFields: [
                "Name", "Category", "Level", "Body Points"
            ],
            lineTwo: "Creature creators are encouraged to include as much detail about skills, defenses, and descriptions as possible.  This helps NPCs (non-player-characters) know how to play the creature."
        },
        pageTwo: {
            lineOne:  "For your new creature, be sure to select basic weapon skills.  This helps NPCs choose the kind of weapon to take.",
            lineTwo: "If a creature has no weapons; for example, a mage or wizard, select 'No Weapons' then click the NEXT button.",
            lineThree: "If a creature doesn't use weapons but instead has natural body weaponry, select Claws or Bite.  Claws allow for two short weaponse while a bite is typically a single long weapon.",
            lineFour:  "Long claws are typically used by larger and higher level Animals, Elementals, Undead, or Magical Beasts.",
            lineFive:  "Plus Strength is a quality that allows a creature to natural hit harder or for more damage.  The amount of damage added to the weapon call is in (parentheses).",
            lineSix:  "Click the checkbox to open the Advanced Weapon Skills section.  Not all creatures have these skills.  They are typically reserved for Mid to High level creatures.",
            lineSeven: "Slays deal 100 points of damage if the hit lands and are used by accomplished fighters and powerful creatures.  Assassinates are a rogue ability that allows a rogue class or stealthy creature to deal a dangerous sneak attack from behind. It deals 100 points of damage.",
            lineEight: "When done, click NEXT to continue."
        },
        pageThree: {

        },
        pageFour: {

        },
        pageFive: {

        },
        pageSix: {

        },
        pageSeven: {

        }
    },
    newCardView: "",
    resultsListView: "",
    cardView: ""
}
export default instructions;