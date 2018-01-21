import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import green_monster from './green_monster.jpg';
import './App.css';
import ViewContainer from './components/main/ViewContainer';
import Landing from './components/main/Landing';
import Login from './components/main/Login';
import Register from './components/main/Register';
import Dashboard from './components/main/Dashboard';
import Main from './components/main/main';
import { refreshAuthToken, clearAuth } from './redux/actions/AuthActions';
import { showCreateView, showHomeView, showAboutView } from './redux/actions/ViewActions';
import { clearAuthToken } from './local-storage';

//material ui design components and imports
import Paper from 'material-ui/Paper';
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
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import { withStyles } from 'material-ui/styles';

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
  aboutView = () => {
    this.props.dispatch(showAboutView());
  }
  render() {
    const style = {
      backgroundColor: '#252525',
      color: 'black',
      height: 75,
    }
    return (
        <div className="App">
          <AppBar className="App-Bar"
            style={style}
            title="IoC | Index of Creatures" 
            iconElementLeft={
              <IconMenu
                iconButtonElement={<IconButton><NavigationMenu /></IconButton>}
                anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                targetOrigin={{horizontal: 'left', vertical: 'top'}}
                >
                <MenuItem primaryText="Search" onClick={ () => this.homeView() } />
                <MenuItem primaryText="Create New" onClick={ () => this.createView() } />
                <MenuItem primaryText="About Us" onClick={ () => this.aboutView() } />
                <MenuItem primaryText="Log out" onClick={ () => this.logOut() } />
              </IconMenu>
            }
          />
          <Route exact path="/" component={Main} />
          <Route exact path="/dashboard" component={Dashboard} />
          {/* <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/about" component={Landing} />    
          <Route exact path="/welcome" component={Landing} />  */}
        </div>
    );
  }
}
const mapStateToProps = (state, props) => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});
export default withRouter(connect(mapStateToProps)(App));