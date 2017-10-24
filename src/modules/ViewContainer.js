import React from 'react';
import WizardForm from './WizardForm.js';
import HomeView from './homeview.js';

class ViewContainer extends React.Component {
    render() {
        console.log(this.props);
        let currentView;
        let homeView = this.props.props.view.homeView;
        let searchView = this.props.props.view.searchView;
        let createView = this.props.props.view.createView;
        let searchSubmit = this.props.props.showSearchView;
        let createSubmit = this.props.props.showCreateView;
        if (homeView == true) {
            currentView = <HomeView createSubmit={ createSubmit } searchSubmit={ searchSubmit }/>
        }
        if (createView == true) {
            currentView = <WizardForm />
        }
        return (
            <div>{ currentView }</div>            
        )
    }
}
export default ViewContainer;