import React from 'react';
import {connect} from 'react-redux';
import {reset} from 'redux-form';
// import Drawer from 'material-ui/Drawer';
// import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Login from './Login.js';
import Register from './Register.js';
import WizardForm from '../card_entry/WizardForm'
import { showHomeView, showCreateView, toggleMenu } from '../../redux/actions/ViewActions';
import { createNewCard, setPage } from '../../redux/actions/DatabaseActions';
import HomeView from './homeview.js';
import CardCreated from './cardCreated.js';
import CreatureCard from '../card_view/CreatureCard';
import SearchResultContainer from '../card_search/SearchResultContainer';
import Instruction from './Instruction';
import Error from './Error';


class ViewContainer extends React.Component {
    render() {
        console.log(this.props);
        let currentView;
        let instructionDiv;
        let view = this.props.view.type;
        let page = this.props.page;
        if(this.props.user && view === null) {
            currentView = <HomeView create={ this.props.showCreateNew }/>
            instructionDiv = <Instruction view={'home'} />
        } else {
            switch(view) {
                case "home":
                    currentView = <HomeView create={ this.props.showCreateNew }/>
                    instructionDiv = <Instruction view={view} />
                    break;
                case "create":
                    currentView = <WizardForm submit={ this.props.createNewCard } getPage={ this.props.getPage }/>
                    instructionDiv = <Instruction view={view} page={page} />
                    break;
                case "new card":
                    currentView = <CardCreated create={ this.props.showCreateNew } home={ this.props.showHomeView }/>
                    instructionDiv = <Instruction view={view} />
                    break;
                case "card":
                    currentView = <CreatureCard />
                    instructionDiv = <Instruction view={view} />
                    break;
                case "results list":
                    currentView = <SearchResultContainer home={ this.props.showHomeView }/>
                    instructionDiv = <Instruction view={view} />
                    break;
                case "error":
                    currentView = <Error />
                    break;
                default:
                currentView = <div>Hello</div>
            }
        }
        
        return (
            <div >
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
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ViewContainer);