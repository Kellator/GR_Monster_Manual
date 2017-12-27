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
        let form = this.props.form;
        let page = this.props.page;
        let index;
        if(this.props.user && view === null) {
            currentView = <HomeView create={ this.props.showCreateNew }/>
            instructionDiv = <Instruction view={'home'}/>
        } else {
            switch(view) {
                case "home":
                    currentView = <HomeView create={ this.props.showCreateNew }/>
                    instructionDiv = <Instruction view={view}/>
                    break;
                case "create":
                    currentView = <WizardForm submit={ this.props.createNewCard } getPage={ this.props.getPage }/>
                    instructionDiv = <Instruction view={view} form={form} page={page}/>
                    break;
                case "new card":
                    currentView = <CardCreated />
                    instructionDiv = <Instruction view={view}/>
                    break;
                case "card":
                    currentView = <CreatureCard />
                    instructionDiv = <Instruction view={view}/>
                    break;
                case "results list":
                    currentView = <SearchResultContainer home={ this.props.showHomeView }/>
                    instructionDiv = <Instruction view={view}/>
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
                <div className="flex-aside">
                    <h3>What am I doing here?</h3>
                    { instructionDiv }
                </div>
                <div className="flex-main">{ currentView }</div>
            </div>
                        
        )
    }
}
const mapStateToProps = (state, props) => ({
    view: state.view,
    db: state.database,
    form: state.form,
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
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ViewContainer);