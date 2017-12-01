import React from 'react';
import { connect } from 'react-redux';
import {reset} from 'redux-form';
import green_monster from './green_monster.jpg';
import './App.css';
import ViewContainer from './modules/ViewContainer';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import muiThemeable from 'material-ui/styles/muiThemeable';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import * as actions from './redux/actions/index';

class App extends React.Component {
  render() {
    console.log(this.props);
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div className="App">
          <AppBar 
            title="D&K's Big Book of Scary Doom" 
            iconElementLeft={<img src={green_monster} className="App-logo" alt="logo" />}
            iconElementRight={
              <IconMenu
                iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                >
                <MenuItem primaryText="Home" onClick={ this.props.showHomeView } />
                <MenuItem primaryText="Create New" onClick={ this.props.showCreateView } />
                <MenuItem primaryText="Help" />
                <MenuItem primaryText="Sign out" />
              </IconMenu>
            }
          />
          <ViewContainer className="flex-container"props={this.props}/>
        </div>
      </MuiThemeProvider>
    );
  }
}
const mapStateToProps = (state, props) => ({
  view: state.view,
  form: state.form
});
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    showLoginView : () => {
      console.log("login clicked");
    },
    login : (values) => {
      console.log("logging in");
      console.log(values)
      dispatch(actions.LoginActions.checkLogin(values));
    },
    logout : () => {
      console.log("logging out");
      dispatch(actions.LoginActions.requestLogout());
    },
    showCreateView : () => {
      console.log("button clicked");
      dispatch(actions.ViewActions.showCreateView());
    },
    showSearchView : () => {
      console.log("other button clicked");
      dispatch(actions.ViewActions.showSearchView());
    },
    showNewCardView : () => {
      console.log("to show new card created");
      dispatch(actions.ViewActions.showNewCardView());
    },
    showHomeView : () => {
      console.log("Show the home view");
      dispatch(actions.ViewActions.showHomeView());
    },
    searchDatabase : (value) => {
      console.log("search function initiated");
      console.log(value);
      dispatch(actions.DatabaseActions.searchDatabase(value));

    },
    createNewCard : (values) => {
      console.log("add new card function initiated");
      console.log(values);
      dispatch(actions.DatabaseActions.createNewCard(values));
      dispatch(reset('wizard'));
    },
    showCardView : (monster) => {
      console.log("show the creature card");
      dispatch(actions.ViewActions.showCardView(monster));
    },
    editCard : (card_id) => {
      console.log("edit the existing card");
      dispatch(actions.DatabaseActions.editCard(card_id));
    },
    deleteCard : (card_id) => {
      console.log("Card Deleted");
      dispatch(actions.DatabaseActions.deleteCard(card_id));
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
