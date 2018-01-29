import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import muiThemeable from 'material-ui/styles/muiThemeable';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { MuiThemeProvider } from 'material-ui/styles';
import { createMuiTheme } from 'material-ui-next/styles';
import './index.css';

const theme = createMuiTheme({
    palette: {
        accent1Color: "#e0e0e0",
        primary2Color: "#424242",
        primary1Color: "#b71c1c",
        accent2Color: "#9e9e9e",
        accent3Color: "#e0e0e0",
        primary3Color: "#ef5350",
        textColor: 'rgb(255, 255, 255, 1)',
        secondaryTextColor: 'rgb(255, 255, 255, 0.7)',
        alternateTextColor: '#303030',
        canvasColor: '#303030',
        borderColor: 'rgb(255 ,255, 255, 0.3)',
        disabledColor: 'rgb(255 ,255, 255, 0.3)',
        pickerHeaderColor: 'rgb(255 ,255, 255, 0.12)',
        clockCircleColor: 'rgb(255 ,255, 255, 0.12)',
        shadowColor: 'rgb(0, 0, 0, 1)'
    }
})
ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <Provider store={ store }>
            <Router>
                <App />
            </Router>
        </Provider>
    </MuiThemeProvider>, 
document.getElementById('root'));


