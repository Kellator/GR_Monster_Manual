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
export const loginUser = (username, password) => {
    return dispatch => {
        dispatch(requestLogin(credentials))
        axios({
            method: 'post',
            url: url + 'login',
            data: {
                username: username,
                password: password  
            }
        })
        .then(response =>
            response.json().then(user => ({ user, response }))
        ).then(({ user, response}) => {
            if(!response.ok) {
                dispatch(loginError(user.message))
            } else {
                localStorage.setItem('id_token', user.id_token) // does this web token only come back if using the fetch API?
                localStorage.setItem('id_token', user.access_token)
                dispatch(receiveLogin(user))
            }
        })
        .catch(error => {
            dispatch(loginError(user.message))
            console.log(error);
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
        dispatch(requestLougout())
        localStorage.removeItem('id_token')
        localStorage.removeItem('access_token')
        dispatch(receiveLogout())
    }
}