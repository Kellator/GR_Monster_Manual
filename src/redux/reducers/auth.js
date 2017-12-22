import {
    SET_AUTH_TOKEN,
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_ERROR,
    CLEAR_AUTH,
    NEW_USER_REQUEST,
    NEW_USER_SUCCESS,
    NEW_USER_ERROR
} from '../actions/AuthActions';

const initialState = {
    authToken: null,
    currentUser: null,
    loading: false,
    error: null
}

export default function reducer(state = initialState, action) {
    if (action.type === SET_AUTH_TOKEN) {
        return Object.assign({}, state, {
            authToken: action.authToken
        });
    } else if(action.type === AUTH_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            isAuthenticated: false
        });
    } else if(action.type === AUTH_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
            isAuthenticated: true,
            currentUser: action.currentUser,
            error: null
        });
    } else if(action.type === AUTH_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            isAuthenticated: false,
            error: action.error
        });
    } else if(action.type === CLEAR_AUTH) {
        return Object.assign({}, state, {
            authToken: null,
            currentUser: null
        });
    } else if(action.type === NEW_USER_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            isAuthenticated: false,
        });
    } else if(action.type === NEW_USER_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
            isAuthenticated: true,
            errorMessage: null
        });
    } else if(action.type === NEW_USER_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            isAuthenticated: false,
            errorMessage: action.error
        });
    }
    return state;
}
