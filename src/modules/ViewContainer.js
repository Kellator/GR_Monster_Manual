import React from 'react';
import WizardForm from './WizardForm.js';
import HomeView from './homeview.js';
import CardCreated from './cardCreated.js';
import SearchResultContainer from './SearchResultContainer';

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
                showHomeView={ showHomeView }/>
        }
        return (
            <div>{ currentView }</div>            
        )
    }
}
export default ViewContainer;