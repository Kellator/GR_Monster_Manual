import React from 'react';
import WizardForm from './WizardForm.js';
import HomeView from './homeview.js';
import CardCreated from './cardCreated.js';
import SearchResult from './SearchResult.js';
import CreatureCard from './CreatureCard.js';
import SearchResultContainer from './SearchResultContainer';
import '../Flex.css';

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
        let monster;
        // determines which component is displayed as main app components
        if (homeView === true) {
            currentView = <HomeView createSubmit={ createSubmit } searchSubmit={ searchSubmit } searchDatabaseSubmit={ searchDatabase }/>
        }
        if (createView === true) {
            currentView = <WizardForm createCardSubmit={ createCardSubmit }/>
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
                <h3>Instructions</h3>
            </div>
        
        return (
            <div className="flex-container">
                <div className="flex-aside">{ instruction }</div>
                <div className="flex-main">{ currentView }</div>
            </div>
                        
        )
    }
}
export default ViewContainer;