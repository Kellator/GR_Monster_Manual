import axios from 'axios';
import {DatabaseActions, ViewActions} from './index';
import {SubmissionError} from 'redux-form';
import {saveAuthToken, clearAuthToken} from '../../local-storage';
import jwtDecode from 'jwt-decode';
import {normalizeResponseErrors} from './utils';
import { API_URL } from '../../config';
// let url = 'http://localhost:5252/';
// // let url = "https://hidden-hamlet-10698.herokuapp.com/"
// console.log(url);

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = authToken => ({
    type: SET_AUTH_TOKEN,
    authToken
});

export const CLEAR_AUTH = 'CLEAR_AUTH';
export const clearAuth = () => ({
    type: CLEAR_AUTH
});

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const authRequest = () => ({
    type: AUTH_REQUEST
});

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = currentUser => ({
    type: AUTH_SUCCESS,
    currentUser
});

export const AUTH_ERROR = 'AUTH_ERROR';
export const authError = error => ({
    type: AUTH_ERROR,
    error
});

const storeAuthInfo = (authToken, dispatch) => {
    const decodedToken = jwtDecode(authToken);
    dispatch(setAuthToken(authToken));
    dispatch(authSuccess(decodedToken.user));
    saveAuthToken(authToken);
};

export const checkLogin = (values) => {
    return dispatch => {
        console.log("checking the user");
        dispatch(authRequest());
        fetch(`${API_URL}auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: values.username,
                password: values.password
            })
        })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({authToken}) => storeAuthInfo(authToken, dispatch))
        .then(dispatch(ViewActions.showHomeView()))
        .catch(error => {
            console.log(error);
            dispatch(authError(error));
            dispatch(ViewActions.showErrorView(error));
        });
    }
}

export const refreshAuthToken = () => (dispatch, getState) => {
    dispatch(authRequest());
    const authToken = getState().auth.authToken;
    return fetch(`${API_URL}auth/refresh`, {
        method: 'POST',
        headers: {
            // Provide our existing token as credentials to get a new one
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({authToken}) => storeAuthInfo(authToken, dispatch))
        .catch(err => {
            // We couldn't get a refresh token because our current credentials
            // are invalid or expired, or something else went wrong, so clear
            // them and sign us out
            dispatch(authError(err));
            dispatch(clearAuth());
            clearAuthToken(authToken);
        });
};
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const requestLogout = () => {
    type: LOGOUT_REQUEST
};
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const logoutSuccess = () => {
    type: LOGOUT_SUCCESS
};
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';
export const logoutFailure = () => {
    type: LOGOUT_FAILURE
};

export const logoutUser = () => {
    return dispatch => {
        dispatch(requestLogout());
        localStorage.removeItem('authToken');
        dispatch(logoutSuccess());
        dispatch(ViewActions.showLogin());
    }
}

export const NEW_USER_REQUEST = 'NEW_USER_REQUEST';
export const NEW_USER_SUCCESS = 'NEW_USER_SUCCESS';
export const NEW_USER_ERROR = 'NEW_USER_ERROR';

function registerRequest() {
    return {
        type: NEW_USER_REQUEST,
        isFetching: true,
        isAuthenticated: false,
    }
};

function registerSuccess(user) {
    return {
        type: NEW_USER_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
        user
    }
};

function registerError(message) {
    return {
        type: NEW_USER_ERROR,
        isFetching: false,
        isAuthenticated: false,
        message
    }
};
export const register = (values) => {
    return dispatch => {
        dispatch(registerRequest())
        fetch(`${API_URL}user/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(res => registerSuccess(res))
        .then(res => dispatch(ViewActions.showLogin()))
        .catch(error => {
            console.log(error);
            dispatch(registerError(error));
        });
    }
}