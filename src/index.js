import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import muiThemeable from 'material-ui/styles/muiThemeable';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import  lightBaseTheme  from 'material-ui/styles/baseThemes/lightBaseTheme';
import  darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import { MuiThemeProvider } from 'material-ui/styles';
import { createMuiTheme } from 'material-ui-next/styles';
import './index.css';

ReactDOM.render(
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <Provider store={ store }>
            <Router>
                <App />
            </Router>
        </Provider>
    </MuiThemeProvider>, 
document.getElementById('root'));


