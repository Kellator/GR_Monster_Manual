import React from 'react';
import { connect } from 'react-redux';
import {reset} from 'redux-form';
import {Route, withRouter} from 'react-router-dom';
import green_monster from './green_monster.jpg';
import './App.css';
import ViewContainer from './modules/ViewContainer';
import Landing from './modules/Landing';
import Login from './modules/Login';
import Register from './modules/Register';
import Dashboard from './modules/Dashboard';
import {refreshAuthToken} from './redux/actions/AuthActions';

//material ui design components and imports
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
  componentWillReceiveProps(nextProps) {
    if(nextProps.loggedIn && !this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.startPeriodicRefresh();
    } else if(!nextProps.loggedIn && this.props.loggedIn) {
      // Stop refreshing when we log out
      this.stopPeriodicRefresh();
    }
  }
  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }
  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60*60*1000 // one hour
    );
  }
  stopPeriodicRefresh() {
    if(!this.refreshInterval) {
      return;
    }
  }
  render() {
    console.log(this.props)
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div className="App">
          <AppBar 
            title="IoC | Index of Creatures" 
            iconElementLeft={<img src={green_monster} className="App-logo" alt="logo" />}
            iconElementRight={
              <IconMenu
                iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                >
                <MenuItem primaryText="Search" onClick={ this.props.showHomeView } />
                <MenuItem primaryText="Create New" onClick={ this.props.showCreateView } />
                <MenuItem primaryText="Help" />
                <MenuItem primaryText="Sign out" onClick={ this.props.logout }/>
              </IconMenu>
            }
          />
          <Route exact path="/" component={Landing} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </div>
      </MuiThemeProvider>
    );
  }
}
const mapStateToProps = (state, props) => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
  // view: state.view,
  // form: state.form,
  // authenticated: state.login.isAuthenticated,

});
export default withRouter(connect(mapStateToProps)(App));
// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     showLoginView : () => {
//       console.log("login clicked");
//       dispatch(actions.ViewActions.showLogin());
//     },
//     login : (values) => {
//       console.log("logging in");
//       console.log(values)
//       dispatch(actions.LoginActions.checkLogin(values));
//     },
//     logout : () => {
//       console.log("logging out");
//       dispatch(actions.LoginActions.logoutUser());
//     },
//     showRegisterView : () => {
//       console.log("registration clicked");
//       dispatch(actions.ViewActions.showRegisterView());
//     },
//     register : (values) => {
//       console.log("new login");
//       console.log(values)
//       dispatch(actions.LoginActions.register(values));
//     },
//     showCreateView : () => {
//       console.log("button clicked");
//       dispatch(actions.ViewActions.showCreateView());
//     },
//     showSearchView : () => {
//       console.log("other button clicked");
//       dispatch(actions.ViewActions.showSearchView());
//     },
//     showNewCardView : () => {
//       console.log("to show new card created");
//       dispatch(actions.ViewActions.showNewCardView());
//     },
//     showHomeView : () => {
//       console.log("Show the home view");
//       dispatch(actions.ViewActions.showHomeView());
//     },
//     // currently handled by submit function inside component
//     // searchDatabase : (value, token) => {
//     //   console.log("search function initiated");
//     //   console.log(value);
//     //   console.log(token);
//     //   dispatch(actions.DatabaseActions.searchDatabase(value, token));
//     // },
//     createNewCard : (values) => {
//       console.log("add new card function initiated");
//       console.log(values);
//       dispatch(actions.DatabaseActions.createNewCard(values));
//       dispatch(reset('wizard'));
//     },
//     showResultsList :() => {
//       console.log("back button clicked");
//       dispatch(actions.ViewActions.showResultsListView());
//     },
//     showCardView : (monster) => {
//       console.log("show the creature card");
//       dispatch(actions.ViewActions.showCardView(monster));
//     },
//     editCard : (card_id) => {
//       console.log("edit the existing card");
//       dispatch(actions.DatabaseActions.editCard(card_id));
//     },
//     deleteCard : (card_id) => {
//       console.log("Card Deleted");
//       dispatch(actions.DatabaseActions.deleteCard(card_id));
//     },
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(App);
