import React from 'react';
import {connect} from 'react-redux';
import {reset} from 'redux-form';
// import Drawer from 'material-ui/Drawer';
// import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui-next/Grid';
import Hidden from 'material-ui-next/Hidden';
import RaisedButton from 'material-ui/RaisedButton';
import Button from 'material-ui-next/Button';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Login from './Login.js';
import WizardForm from '../card_entry/WizardForm';
import { showHomeView, showCreateView, toggleMenu } from '../../redux/actions/ViewActions';
import { createNewCard, setPage, searchDatabase } from '../../redux/actions/DatabaseActions';
import HomeView from './homeview.js';
import CardCreated from './cardCreated.js';
import CreatureCard from '../card_view/CreatureCard';
import SearchResultContainer from '../card_search/SearchResultContainer';
import Instruction from './Instruction';
import Error from './Error';
import Landing from './Landing';

class ViewContainer extends React.Component {
    render() {
        const style = {
            // marginTop: '2rem',
            textAlign: 'center',
        }
        let currentView;
        let instructionDiv;
        let view = this.props.view.type;
        let page = this.props.page;
        if(this.props.user && view === null) {
            currentView = <HomeView create={ this.props.showCreateNew } />
            instructionDiv = <Instruction view={ 'home' } categorySearch={ this.props.categorySearch }/>
        } else {
            switch(view) {
                case "home":
                    currentView = <HomeView create={ this.props.showCreateNew } />
                    instructionDiv = <Instruction view={ view } categorySearch={ this.props.categorySearch }/>
                    break;
                case "create":
                    currentView = <WizardForm submit={ this.props.createNewCard } getPage={ this.props.getPage }/>
                    instructionDiv = <Instruction view={ view } page={ page } />
                    break;
                case "new card":
                    currentView = <CardCreated create={ this.props.showCreateNew } home={ this.props.showHomeView }/>
                    instructionDiv = <Instruction view={ view } />
                    break;
                case "card":
                    currentView = 
                        <CreatureCard />
                    
                    instructionDiv = <Instruction view={ view } />
                    break;
                case "results list":
                    currentView = <SearchResultContainer home={ this.props.showHomeView }/>
                    // instructionDiv = <Instruction view={ view } />
                    break;
                case "about":
                    currentView = <Landing view={ view }/>
                case "error":
                    currentView = <Error view={ view }/>
                    break;
                default:
                currentView = <div>Hello</div>
            }
        }
        
        return (
            <div id="view-container" style={{width: "100%"}}>
                {currentView}
            </div>             
        )
    }
}
const mapStateToProps = (state, props) => ({
    view: state.view,
    db: state.database,
    page: state.database.page
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
        },
        getPage: (page) => {
            dispatch(setPage(page));
        },
        handleToggle: () => {
            console.log("toggle clicked");
            dispatch(toggleMenu());
        },
        categorySearch: (category) => {
            console.log(category);
            console.log('category search clicked');
            dispatch(searchDatabase(category));
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ViewContainer);