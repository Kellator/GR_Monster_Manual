// check for presence of JWT to see if user is autheticated
export default function auth(state = {
    isFetching: false,
    isAuthenticated: localStorage.getItem('authToken') ? true : false
    }, action) {
        switch (action.type) {
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
                    user: action.currentUser,
                    error: null
                }
            case 'AUTH_ERROR':
                return {
                    ...state,
                    isFetching: false,
                    isAuthenticated: false,
                    error: action.message
                }
            case 'CLEAR_AUTH':
                return {
                    ...state,
                    isFetching: false,
                    isAuthenticated: false,
                    user: null,
                    message: "Logged Out."
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
                    errorMessage: action.message
                }
            default:
                return state;
        }
    }
