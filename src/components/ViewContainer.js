import React from 'react';
import {connect} from 'react-redux';
import {reset} from 'redux-form';
// import Drawer from 'material-ui/Drawer';
// import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Login from './Login.js';
import Register from './Register.js';
import WizardForm from './WizardForm.js';
import { showHomeView, showCreateView, toggleMenu } from '../redux/actions/ViewActions';
import { createNewCard } from '../redux/actions/DatabaseActions';
import HomeView from './homeview.js';
import CardCreated from './cardCreated.js';
import SearchResult from './SearchResult.js';
import CreatureCard from './card_view/CreatureCard';
import SearchResultContainer from './SearchResultContainer';
import Instruction from './Instruction';
import Error from './Error';
import '../Flex.css';
import { setPage } from '../redux/actions/DatabaseActions';


class ViewContainer extends React.Component {
    render() {
        console.log(this.props);
        let currentView;
        let instructionDiv;
        let view = this.props.view.type;
        let page = this.props.page;
        let menu = this.props.menu;
        if(this.props.user && view === null) {
            currentView = <HomeView create={ this.props.showCreateNew }/>
            instructionDiv = <Instruction view={'home'} menu={menu}/>
        } else {
            switch(view) {
                case "home":
                    currentView = <HomeView create={ this.props.showCreateNew }/>
                    instructionDiv = <Instruction view={view} menu={menu}/>
                    break;
                case "create":
                    currentView = <WizardForm submit={ this.props.createNewCard } getPage={ this.props.getPage }/>
                    instructionDiv = <Instruction view={view} page={page} menu={menu}/>
                    break;
                case "new card":
                    currentView = <CardCreated create={ this.props.showCreateNew } home={ this.props.showHomeView }/>
                    instructionDiv = <Instruction view={view} menu={menu}/>
                    break;
                case "card":
                    currentView = <CreatureCard />
                    instructionDiv = <Instruction view={view} menu={menu}/>
                    break;
                case "results list":
                    currentView = <SearchResultContainer home={ this.props.showHomeView }/>
                    instructionDiv = <Instruction view={view} menu={menu}/>
                    break;
                case "error":
                    currentView = <Error />
                    break;
                default:
                currentView = <div>Hello</div>
            }
        }
        
        return (
            <div className="flex-container">
                <Paper >{instructionDiv}</Paper>
                <Paper >{currentView}</Paper>
                {/* <div className="flex-main">{ currentView }</div> */}
            </div>
                        
        )
    }
}
const mapStateToProps = (state, props) => ({
    view: state.view,
    db: state.database,
    page: state.database.page,
    menu: state.view.menu
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
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ViewContainer);