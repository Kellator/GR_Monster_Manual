import { LoginActions } from '../actions/index';
// check for presence of JWT to see if user is autheticated
export default function auth(state = {
    isFetching: false,
    isAuthenticated: localStorage.getItem('id_token') ? true : false
    }, action) {
        switch (action.type) {
            case LOGIN_REQUEST:
                return {
                    ...state,
                    isFetching: true,
                    isAuthenticated: false,
                    user: action.credentials
                }
            case LOGIN_SUCCESS:
                return {
                    ...state, 
                    isFetching: false,
                    isAuthenticated: true,
                    errorMessage: ''
                }
            case LOGIN_FAILURE:
                return {
                    ...state,
                    isFetching: false,
                    isAuthenticated: false,
                    errorMessage: action.message
                }
            case LOGOUT_SUCCESS:
                return {
                    ...state,
                    isFetching: true,
                    isAuthenticated: false
                }
            default:
            return state
        }
    }
