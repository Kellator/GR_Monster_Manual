// check for presence of JWT to see if user is autheticated
export default function auth(state = {
    isFetching: false,
    isAuthenticated: localStorage.getItem('authToken') ? true : false
    }, action) {
        switch (action.type) {
            case 'SET_AUTH_TOKEN':
                return {
                    ...state,
                    authToken: action.authToken
                }
            case 'AUTH_REQUEST':
                return {
                    ...state,
                    isFetching: true,
                    isAuthenticated: false
                }
            case 'AUTH_SUCCESS':
                return {
                    ...state, 
                    isFetching: false,
                    isAuthenticated: true,
                    currentUser: action.currentUser,
                    error: null
                }
            case 'AUTH_ERROR':
                return {
                    ...state,
                    isFetching: false,
                    isAuthenticated: false,
                    error: action.error
                }
            case 'CLEAR_AUTH':
                return {
                    ...state,
                    authToken: null,
                    currentUser: null
                }
            case 'NEW_USER_REQUEST':
                return {
                    ...state,
                    isFetching: true,
                    isAuthenticated: false,
                }
            case 'NEW_USER_SUCCESS':
                return {
                    ...state, 
                    isFetching: false,
                    isAuthenticated: true,
                    errorMessage: null
                }
            case 'NEW_USER_FAILURE':
                return {
                    ...state,
                    isFetching: false,
                    isAuthenticated: false,
                    errorMessage: action.error
                }
            default:
                return state;
        }
    }
