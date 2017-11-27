import React from 'react';
import WizardForm from './WizardForm.js';
import HomeView from './homeview.js';
import CardCreated from './cardCreated.js';
import SearchResult from './SearchResult.js';
import CreatureCard from './CreatureCard.js';
import SearchResultContainer from './SearchResultContainer';
import '../Flex.css';
import instructions from './InstructionText.js';
console.log(instructions);

class ViewContainer extends React.Component {
    render() {
        console.log(this.props);
        let currentView;
        // views
        let homeView = this.props.props.view.homeView;
        // let searchView = this.props.props.view.searchView;
        let createView = this.props.props.view.createView;
        let newCardView = this.props.props.view.newCardView;
        let resultsListView = this.props.props.view.resultsListView;
        let cardView = this.props.props.view.cardView;
        // button onClick to show search page
        let searchSubmit = this.props.props.showSearchView;
        // button onClick to show create new card form wizard
        let createSubmit = this.props.props.showCreateView;
        // onClick to return to homeview
        let showHomeView = this.props.props.showHomeView;
        // Wizard form onSubmit to create new card document in database
        let createCardSubmit = this.props.props.createNewCard;
        // onClick to perform database search
        let searchDatabase = this.props.props.searchDatabase;
        // onClick to show creature card
        let showCardView = this.props.props.showCardView;
        // onClick to edit existing card
        let editCard = this.props.props.editCard;
        // onClick to delete current card
        let deleteCard = this.props.props.deleteCard;
        // 
        let form = this.props.props.form;
        let monster;
        let instructionDiv;
        let wizardFields;
        // determines which component is displayed as main app components
        if (homeView === true) {
            currentView = <HomeView createSubmit={ createSubmit } searchSubmit={ searchSubmit } searchDatabaseSubmit={ searchDatabase }/>
            instructionDiv = 
            <div>
                <p>{instructions.homeView.lineOne}</p>
                <p>{instructions.homeView.lineTwo}</p>
                <ul >
                    {
                        instructions.homeView.categoryList.map(function(category, i) {
                            return <li key={i}>{category}</li>
                        })
                    }
                </ul>
            </div>
        }
        if (createView === true) {
            currentView = <WizardForm createCardSubmit={ createCardSubmit } />
        }
        if (createView === true && Object.keys(form).includes('wizard')) {
            console.log("we've made it to this line")
            wizardFields = form.wizard.registeredFields;
            console.log(wizardFields);
            console.log(form);
            if(Object.keys(wizardFields).includes('monster_name')) {
                instructionDiv = 
                <div>
                    <p>{instructions.createView.pageOne.lineOne}</p>
                    <ul >
                        {
                            instructions.createView.pageOne.requiredFields.map(function(field, i) {
                                return <li key={i}>{field}</li>
                            })
                        }
                    </ul>
                    <p>{instructions.createView.pageOne.lineTwo}</p>
                </div>;
            }
            else if(Object.keys(wizardFields).includes('weapon_type')) {
                let texts = instructions.createView.pageTwo;
                let componentToRender = Object.keys(texts).map(function(text, index) {
                    console.log(texts[text]);
                    console.log(text);
                    return <p key={index}>{texts[text]}</p>
                })
                instructionDiv = <div>{ componentToRender }</div>;
            }
            else if(Object.keys(wizardFields).includes('has_alchemy')) {
                let texts = instructions.createView.pageThree;
                let componentToRender = Object.keys(texts).map(function(text, index) {
                    console.log(texts[text]);
                    console.log(text);
                    return <p key={index}>{texts[text]}</p>
                })
                instructionDiv = <div>{ componentToRender }</div>;
            }
        }
        if (newCardView === true) {
            currentView = <CardCreated createSubmit={ createSubmit } showHomeView={ showHomeView } />
        }
        if (resultsListView === true) {
            currentView = <SearchResultContainer  createSubmit={ createSubmit } searchDatabaseSubmit={ searchDatabase } 
                showHomeView={ showHomeView } showCardView={ showCardView }/>
        }
        if (cardView === true) {
            currentView = <CreatureCard showHomeView={ showHomeView } editCard={ editCard } deleteCard={ deleteCard }/>
        }
        // determines the tool text in instruction div
        // user state to determine instructions based on current view = switch
        let instruction = 
            <div>
                {instructionDiv}
            </div>
        
        return (
            <div className="flex-container">
                <div className="flex-aside">
                <h3>Demo Tips</h3>
                { instruction }
                </div>
                <div className="flex-main">{ currentView }</div>
            </div>
                        
        )
    }
}
export default ViewContainer;