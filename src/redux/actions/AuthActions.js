import axios from 'axios';
import {DatabaseActions, ViewActions} from './index';
import {SubmissionError} from 'redux-form';
import {saveAuthToken, clearAuthToken} from '../../local-storage';
import jwtDecode from 'jwt-decode';
import {normalizeResponseErrors} from './utils';
import { API_URL } from '../../config';

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

export const CLEAR_ERROR_MESSAGE = 'CLEAR_ERROR_MESSAGE';
export const clearErrorMessage = () => ({
    type: CLEAR_ERROR_MESSAGE
});

const storeAuthInfo = (authToken, dispatch) => {
    const decodedToken = jwtDecode(authToken);
    dispatch(setAuthToken(authToken));
    dispatch(authSuccess(decodedToken.user));
    saveAuthToken(authToken);
};

export const checkLogin = (values) => {
    return dispatch => {
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
            const {code} = error;
            const message = 
                code === 401
                    ? 'Incorrect username or password'
                    : 'Unable to login, please try again';
            dispatch(authError(message));
            // dispatch(ViewActions.showErrorView(error));
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

export const NEW_USER_REQUEST = 'NEW_USER_REQUEST';
export const registerRequest = () => ({
    type: NEW_USER_REQUEST
});

export const NEW_USER_SUCCESS = 'NEW_USER_SUCCESS';
export const registerSuccess = (user) => ({
    type: NEW_USER_SUCCESS,
    user
});

export const NEW_USER_ERROR = 'NEW_USER_ERROR';
export const registerError = (error) => ({
    type: NEW_USER_ERROR,
    error
});

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
        .then(res => dispatch(checkLogin(values)))
        .catch(error => {
            dispatch(registerError(error));
        });
    }
}