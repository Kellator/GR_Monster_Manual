import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import muiThemeable from 'material-ui/styles/muiThemeable';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import iocTheme from 'material-ui/styles/baseThemes/iocTheme';


import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import registerServiceWorker from './registerServiceWorker';

injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider muiTheme={getMuiTheme(iocTheme)}>
        <Provider store={ store }>
            <Router>
                <App />
            </Router>
        </Provider>
    </MuiThemeProvider>, 
document.getElementById('root'));
registerServiceWorker();
