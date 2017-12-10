// check for presence of JWT to see if user is autheticated
export default function auth(state = {
    isFetching: false,
    // isAuthenticated: localStorage.getItem('sessionID') ? true : false
    user: {
        authToken: ""
    }
    }, action) {
        switch (action.type) {
            case 'LOGIN_REQUEST':
                return {
                    ...state,
                    isFetching: true,
                    isAuthenticated: false,
                    user: action.credentials
                }
            case 'LOGIN_SUCCESS':
                return {
                    ...state, 
                    isFetching: false,
                    isAuthenticated: true,
                    user: action.user,
                    errorMessage: ''
                }
            case 'LOGIN_FAILURE':
                return {
                    ...state,
                    isFetching: false,
                    isAuthenticated: false,
                    errorMessage: action.message
                }
            case 'LOGOUT_SUCCESS':
                return {
                    ...state,
                    isFetching: true,
                    isAuthenticated: false,
                    user: {
                        authToken: ""
                    },
                    message: "Logged Out."
                }
            case 'NEW_USER_REQUEST':
                return {
                    ...state,
                    isFetching: true,
                    isAuthenticated: false,
                    user: action.credentials
                }
            case 'NEW_USER_SUCCESS':
                return {
                    ...state, 
                    isFetching: false,
                    isAuthenticated: true,
                    errorMessage: ''
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
