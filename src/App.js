import React from 'react';
import green_monster from './green_monster.jpg';
import './App.css';
import Homeview from './modules/homeview';
import WizardForm from './modules/WizardForm.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
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

export default App;
