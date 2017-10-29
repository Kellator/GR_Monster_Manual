import React from 'react';
import { connect } from 'react-redux';
import green_monster from './green_monster.jpg';
import './App.css';
import ViewContainer from './modules/ViewContainer';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

import * as actions from './redux/actions/index';

class App extends React.Component {
  render() {
    console.log(this.props);
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">D & K's Big Bad Database of Scary Doom</h1>
            <img src={green_monster} className="App-logo" alt="logo" />
          </header>
          <ViewContainer props={this.props}/>
        </div>
      </MuiThemeProvider>
    );
  }
}
const mapStateToProps = (state, props) => ({
  view: state.view
});
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    showCreateView : () => {
      console.log("button clicked");
      dispatch(actions.ViewActions.showCreateView());
    },
    showSearchView : () => {
      console.log("other button clicked");
      dispatch(actions.ViewActions.showSearchView());
    },
    searchDatabase : (value) => {
      console.log("search function initiated");
      dispatch(actions.DatabaseActions.searchDatabase(value));
    },
    createNewCard : (values) => {
      console.log("add new card function initiated");
      console.log(values);
      dispatch(actions.DatabaseActions.createNewCard(values));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
