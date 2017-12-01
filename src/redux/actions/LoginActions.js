import axios from 'axios';
import {DatabaseActions, ViewActions} from './index';
let url = 'http://localhost:5252/';

// from https://auth0.com/blog/secure-your-react-and-redux-app-with-jwt-authentication/
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

function requestLogin(credentials) {
    return {
        type: LOGIN_REQUEST,
        isFetching: true,
        isAuthenticated: false,
        credentials
    }
};

function receiveLogin(user) {
    return {
        type: LOGIN_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
        id_token: user.id_token
    }
};

function loginError(message) {
    return {
        type: LOGIN_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        message
    }
};
export const checkLogin = (username, password) => {
    return dispatch => {
        console.log("checking the user");
        // dispatch(requestLogin(username, password))
        axios({
            method: 'post',
            url: url + 'user/login', 
            data: {
                username: username,
                password: password
            }
        })
        .then(response => {
            console.log(response);
            let user;
            if(response.status === 200) {
                dispatch(receiveLogin(user));
                dispatch(ViewActions.showHomeView());
            }
        })
        .catch(error => {
            console.log(error);
            dispatch(loginError(error));
        });
    }
}

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

function requestLogout() {
    return {
        type: LOGOUT_REQUEST,
        isFetching: true,
        isAuthenticated: true
    }
}

function receiveLogout() {
    return {
        type: LOGOUT_SUCCESS,
        isFetching: false,
        isAuthenticated: false
    }
}

function logoutUser() {
    return dispatch => {
        dispatch(requestLogout())
        localStorage.removeItem('id_token')
        localStorage.removeItem('access_token')
        dispatch(receiveLogout())
    }
}

export const NEW_USER_REQUEST = 'NEW_USER_REQUEST';
export const NEW_USER_SUCCESS = 'NEW_USER_SUCCESS';
export const NEW_USER_FAILURE = 'NEW_USER_FAILURE';

function requestNewUser(credentials) {
    return {
        type: NEW_USER_REQUEST,
        isFetching: true,
        isAuthenticated: false,
        credentials
    }
};

function receiveNewUser(user) {
    return {
        type: NEW_USER_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
        id_token: user.id_token
    }
};

function newUserError(message) {
    return {
        type: NEW_USER_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        message
    }
};
export const createLogin = (values) => {
    return dispatch => {
        let credentials = {
            username: values.username,
            email: values.email,
            password: values.password
        }
        dispatch(requestNewUser(credentials))
        axios({
            method: 'post',
            url: url + 'user/', 
            data: credentials
        })
        .then(response => {
            console.log(response);
            let user;
            if(response.status === 200) {
                dispatch(receiveNewUser(user));
                // needs to show a created new user page or message  - add messages to demo?
                dispatch(ViewActions.showHomeView());
            }
        })
        .catch(error => {
            console.log(error);
            dispatch(newUserError(error));
        });
    }
}