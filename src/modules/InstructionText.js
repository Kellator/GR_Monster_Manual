let instructions = {
    homeView: { 
        lineOne: "To start using, simply enter the name of a creature you are looking for.",
        lineTwo: "Not sure of the name?  Simply enter one of the following categories:" ,
        categoryList: [
            "Animal", "Elemental", "Fae", "Giant", "Goblinoid", "Human", "Humanoid", "Magical Creature", "Undead"
        ]
    },
    createView: {
        lineOne: "",
        requiredFields: [
            "Name", "Cateogry", "Level", "Body Points"
        ]
    },
    newCardView: "",
    resultsListView: "",
    cardView: ""
}
export default instructions;