import axios from 'axios';
import {DatabaseActions, ViewActions} from './index';
import {SubmissionError} from 'redux-form';
import {saveAuthToken, clearAuthToken} from '../local-storage';
import jwtDecode from 'jwt-decode';
import {normalizeResponseErrors} from './utils';

let url = 'http://localhost:5252/';
// let url = "https://hidden-hamlet-10698.herokuapp.com/"
console.log(url);


// from https://auth0.com/blog/secure-your-react-and-redux-app-with-jwt-authentication/
// export const LOGIN_REQUEST = 'LOGIN_REQUEST';
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
// export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// function requestLogin() {
//     return {
//         type: LOGIN_REQUEST,
//         isFetching: true,
//         isAuthenticated: false
//     }
// };

// function receiveLogin(user) {
//     return {
//         type: LOGIN_SUCCESS,
//         isFetching: false,
//         isAuthenticated: true,
//         user
//     }
// };

// function loginError(message) {
//     console.log(message);
//     return {
//         type: LOGIN_FAILURE,
//         isFetching: false,
//         isAuthenticated: false,
//         message
//     }
// };



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
        let username = values.username;
        let password = values.password;
        axios({
            method: 'post',
            url: url + 'auth/login', 
            data: {
                username,
                password
            }
        })
        .then(response => normalizeResponseErrors(response))
        .then(response => response.json())
        .then(({authToken}) => storeAuthInfo(authToken, dispatch))
        // .then(response => {
        //     console.log(response);
        //     let authToken = response.data.authToken;
        //     const decodedToken = jwtDecode(authToken);
        //     console.log(decodedToken);
        //     if(response.status === 200) {
        //         dispatch(authSuccess());
        //         dispatch(setAuthToken(decodedToken));
        //         dispatch(ViewActions.showHomeView());
        //         localStorage.setItem('authToken', decodedToken);
        //     }
        // })
        .catch(error => {
            console.log(error);
            dispatch(authError(error));
            dispatch(ViewActions.showErrorView(error));
        });
    }
}
// change to use axios - check url
// export const refreshAuthToken = () => (dispatch, getState) => {
//     dispatch(authRequest());
//     const authToken = getState().auth.authToken;
//     return fetch(`${API_BASE_URL}/auth/refresh`, {
//         method: 'POST',
//         headers: {
//             // Provide our existing token as credentials to get a new one
//             Authorization: `Bearer ${authToken}`
//         }
//     })
//         .then(res => normalizeResponseErrors(res))
//         .then(res => res.json())
//         .then(({authToken}) => storeAuthInfo(authToken, dispatch))
//         .catch(err => {
//             // We couldn't get a refresh token because our current credentials
//             // are invalid or expired, or something else went wrong, so clear
//             // them and sign us out
//             dispatch(authError(err));
//             dispatch(clearAuth());
//             clearAuthToken(authToken);
//         });
// };
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

export const logoutUser = () => {
    return dispatch => {
        dispatch(requestLogout());
        localStorage.removeItem('authToken');
        dispatch(receiveLogout());
        dispatch(ViewActions.showLogin());
    }
}

export const NEW_USER_REQUEST = 'NEW_USER_REQUEST';
export const NEW_USER_SUCCESS = 'NEW_USER_SUCCESS';
export const NEW_USER_FAILURE = 'NEW_USER_FAILURE';

function requestNewUser() {
    return {
        type: NEW_USER_REQUEST,
        isFetching: true,
        isAuthenticated: false,
    }
};

function receiveNewUser(user) {
    return {
        type: NEW_USER_SUCCESS,
        isFetching: false,
        isAuthenticated: true,

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
        dispatch(requestNewUser())
        axios({
            method: 'post',
            url: url + 'user/', 
            data: values
        })
        .then(response => {
            console.log(response);
            if(response.status === 201) {
                dispatch(receiveNewUser());
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