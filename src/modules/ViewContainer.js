import React from 'react';
import {connect} from 'react-redux';
import {reset} from 'redux-form';
import Login from './Login.js';
import Register from './Register.js';
import WizardForm from './WizardForm.js';
import { showHomeView, showCreateView } from '../redux/actions/ViewActions';
import { createNewCard } from '../redux/actions/DatabaseActions';
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
        let index;
        if(this.props.user && view === null) {
            currentView = <HomeView create={ this.props.showCreateNew }/>
        } else {
            switch(view) {
                case "home":
                    currentView = <HomeView create={ this.props.showCreateNew }/>
                    break;
                case "create":
                    currentView = <WizardForm submit={ this.props.createNewCard }/>
                    break;
                case "new card":
                    currentView = <CardCreated />
                    break;
                case "card":
                    currentView = <CreatureCard />
                    break;
                case "results list":
                    currentView = <SearchResultContainer home={ this.props.showHomeView }/>
                    break;
                case "error":
                    currentView = <Error />
                    break;
                default:
                currentView = <div>Hello</div>
            }
        }

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
                    <h3>Tips</h3>
                    { instruction }
                </div>
                <div className="flex-main">{ currentView }</div>
            </div>
                        
        )
    }
}
const mapStateToProps = (state, props) => ({
    view: state.view,
    db: state.database
  });
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        showCreateNew: () => {
            dispatch(showCreateView());
        },
        createNewCard : (values) => {
            dispatch(createNewCard(values));
            dispatch(reset('wizard'));
        },
        showHomeView: () => {
            dispatch(showHomeView());
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ViewContainer);