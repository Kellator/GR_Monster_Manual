import React from 'react';
import { bindActionCreators } from 'redux';
import { dispatch } from 'react-redux';
import { connect } from 'react-redux';
import green_monster from './green_monster.jpg';
import './App.css';
import Homeview from './modules/homeview';
import WizardForm from './modules/WizardForm.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">D & K's Big Bad Database of Scary Doom</h1>
            <img src={green_monster} className="App-logo" alt="logo" />
          </header>
          <Homeview />
          <WizardForm />
        </div>
      </MuiThemeProvider>
    );
  }
}
// const mapStateToProps = (state, props) => ({
//   current_view: home
// })
// const mapDispatchToProps = (dispatch, ownProps) => {
//   showEntryForm : () => {
//     dispatch(showEntryForm())
//   }
// }
export default App;
