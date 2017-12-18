import React from 'react';
import {connect} from 'react-redux';
import Login from './Login.js';
import Register from './Register.js';
import WizardForm from './WizardForm.js';
import HomeView from './homeview.js';
import CardCreated from './cardCreated.js';
import SearchResult from './SearchResult.js';
import CreatureCard from './CreatureCard.js';
import SearchResultContainer from './SearchResultContainer';
import Error from './Error';
import '../Flex.css';
import instructions from './InstructionText.js';

class ViewContainer extends React.Component {
    render() {
        console.log(this.props);
        let currentView;
        let instructionDiv;
        let view = this.props.view.type;
        console.log(view);
        switch(view) {
            case "home":
                currentView = <HomeView />
                break;
            case "create":
                currentView = <WizardForm />
                break;
            default:
            currentView = <div>Hello</div>
        }
        // // onClick to show login view
        // let showLoginView = this.props.props.showLoginView;
        // // onClick to submit user login
        // let loginSubmit = this.props.props.login;
        // // onClick to submit user logout
        // let logoutSubmit = this.props.props.logout;
        // // onClick to change view to registration page
        // let showRegisterSubmit = this.props.props.showRegisterView;
        // // onSubmit to register new users
        // let register = this.props.props.register
        // // button onClick to show search page
        // let searchSubmit = this.props.props.showSearchView;
        // // button onClick to show create new card form wizard
        // let createSubmit = this.props.props.showCreateView;
        // // onClick to return to homeview
        // let showHomeView = this.props.props.showHomeView;
        // // Wizard form onSubmit to create new card document in database
        // let createCardSubmit = this.props.props.createNewCard;
        // // onClick to perform database search
        // let searchDatabase = this.props.props.searchDatabase;
        // // onClick to show creature card
        // let showCardView = this.props.props.showCardView;
        // // onClick to edit existing card
        // let editCard = this.props.props.editCard;
        // // onClick to delete current card
        // let deleteCard = this.props.props.deleteCard;
        // // onClick to return to results list
        // let showResultsList = this.props.props.showResultsList;
        // let form = this.props.props.form;
        // let authenticated = this.props.props.authenticated;
        // let token = this.props.props.token;
        // let monster;
        // let instructionDiv;
        // let wizardFields;

        // if(errorView) {
        //     currentView = <Error loginSubmit={ loginSubmit } showRegisterSubmit={ showRegisterSubmit }/>
        // }
        // if(loginView) {
        //     currentView = <Login loginSubmit={ loginSubmit } showRegisterSubmit={ showRegisterSubmit }/>
        // }
        // if(registerView) {
        //     currentView = <Register registerSubmit={ register } showLogin={ showLoginView }/>
        // }
        // if (homeView === true) {
        //     currentView = <HomeView createSubmit={ createSubmit } searchSubmit={ searchSubmit } searchDatabaseSubmit={ searchDatabase } token={ token }/>
        //     instructionDiv = 
        //     <div>
        //         <p>{instructions.homeView.lineOne}</p>
        //         <p>{instructions.homeView.lineTwo}</p>
        //         <ul >
        //             {
        //                 instructions.homeView.categoryList.map(function(category, i) {
        //                     return <li key={i}>{category}</li>
        //                 })
        //             }
        //         </ul>
        //     </div>
        // }
        // if (createView === true) {
        //     currentView = <WizardForm createCardSubmit={ createCardSubmit } />
        // }
        // if (createView === true && Object.keys(form).includes('wizard')) {
        //     console.log("we've made it to this line")
        //     console.log(form);
        //     wizardFields = form.wizard.registeredFields;
        //     console.log(wizardFields);
        //     console.log(form);
        //     if(Object.keys(wizardFields).includes('monster_name')) {
        //         instructionDiv = 
        //         <div>
        //             <p>{instructions.createView.pageOne.lineOne}</p>
        //             <ul >
        //                 {
        //                     instructions.createView.pageOne.requiredFields.map(function(field, i) {
        //                         return <li key={i}>{field}</li>
        //                     })
        //                 }
        //             </ul>
        //             <p>{instructions.createView.pageOne.lineTwo}</p>
        //         </div>;
        //     }
        //     else if(Object.keys(wizardFields).includes('weapon_type')) {
        //         let texts = instructions.createView.pageTwo;
        //         let componentToRender = Object.keys(texts).map(function(text, index) {
        //             return <p key={index}>{texts[text]}</p>
        //         })
        //         instructionDiv = <div>{ componentToRender }</div>;
        //     }
        //     else if(Object.keys(wizardFields).includes('has_alchemy')) {
        //         let texts = instructions.createView.pageThree;
        //         let componentToRender = Object.keys(texts).map(function(text, index) {
        //             return <p key={index}>{texts[text]}</p>
        //         })
        //         instructionDiv = <div>{ componentToRender }</div>;
        //     }
        //     else if(Object.keys(wizardFields).includes('has_physical_bane')) {
        //         let texts = instructions.createView.pageFour;
        //         let componentToRender = Object.keys(texts).map(function(text, index) {
        //             return <p key={index}>{texts[text]}</p>
        //         })
        //         instructionDiv = <div>{ componentToRender }</div>;
        //     }
        //     else if(Object.keys(wizardFields).includes('has_bane_magic')) {
        //         let texts = instructions.createView.pageFive;
        //         let componentToRender = Object.keys(texts).map(function(text, index) {
        //             return <p key={index}>{texts[text]}</p>
        //         })
        //         instructionDiv = <div>{ componentToRender }</div>;
        //     }
        //     else if(Object.keys(wizardFields).includes('has_resist_charm')) {
        //         let texts = instructions.createView.pageSix;
        //         let componentToRender = Object.keys(texts).map(function(text, index) {
        //             return <p key={index}>{texts[text]}</p>
        //         })
        //         instructionDiv = <div>{ componentToRender }</div>;
        //     }
        //     else if(Object.keys(wizardFields).includes('standard_treasure')) {
        //         let texts = instructions.createView.pageSeven;
        //         let componentToRender = Object.keys(texts).map(function(text, index) {
        //             return <p key={index}>{texts[text]}</p>
        //         })
        //         instructionDiv = <div>{ componentToRender }</div>;
        //     }
        // }
        // if (newCardView === true) {
        //     currentView = <CardCreated createSubmit={ createSubmit } showHomeView={ showHomeView } />
        //     let texts = instructions.newCardView
        //     let componentToRender = <p>{texts}</p>
        //     instructionDiv = <div>{componentToRender}</div>
        // }
        // if (resultsListView === true) {
        //     currentView = <SearchResultContainer  createSubmit={ createSubmit } searchDatabaseSubmit={ searchDatabase } 
        //         showHomeView={ showHomeView } showCardView={ showCardView }/>
        //     let texts = instructions.resultsListView;
        //     let componentToRender = Object.keys(texts).map(function(text, index) {
        //         return <p key={index}>{texts[text]}</p>
        //     })
        //     instructionDiv = <div>{ componentToRender }</div>;
        // }
        // if (cardView === true) {
        //     currentView = <CreatureCard showHomeView={ showHomeView } editCard={ editCard } deleteCard={ deleteCard } showResultsList={ showResultsList }/>
        //     let texts = instructions.cardView;
        //     let componentToRender = Object.keys(texts).map(function(text, index) {
        //         return <p key={index}>{texts[text]}</p>
        //     })
        //     instructionDiv = <div>{ componentToRender }</div>;
        // }

        
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
const mapStateToProps = (state, props) => ({
    view: state.view
  });
export default connect(mapStateToProps)(ViewContainer);