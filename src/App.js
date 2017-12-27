import React from 'react';
import { connect } from 'react-redux';
import {Route, withRouter} from 'react-router-dom';
import green_monster from './green_monster.jpg';
import './App.css';
import ViewContainer from './modules/ViewContainer';
import Landing from './modules/Landing';
import Login from './modules/Login';
import Register from './modules/Register';
import Dashboard from './modules/Dashboard';
import {refreshAuthToken, clearAuth} from './redux/actions/AuthActions';
import {showCreateView, showHomeView} from './redux/actions/ViewActions';
import {clearAuthToken} from './local-storage';

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
  logOut = () => {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  };
  createView = () => {
    this.props.dispatch(showCreateView());
  };
  homeView = () => {
    this.props.dispatch(showHomeView());
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
                <MenuItem primaryText="Search" onClick={ () => this.homeView() } />
                <MenuItem primaryText="Create New" onClick={ () => this.createView() } />
                <MenuItem primaryText="Help" />
                <MenuItem primaryText="Log out" onClick={ () => this.logOut() }/>
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
});
export default withRouter(connect(mapStateToProps)(App));