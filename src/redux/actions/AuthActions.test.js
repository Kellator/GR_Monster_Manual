import * as actions from './AuthActions';

describe('setAuthToken', () => {
    it('should create an action that sets the auth token', () => {
        const authToken = "sampleToken"
        const expectedAction = {
            type: actions.SET_AUTH_TOKEN,
            authToken
        }
        expect(actions.setAuthToken(authToken)).toEqual(expectedAction)
    })
});

describe('authRequest', () => {
    it('should create an action that shows the auth request is loading', () => {
        const expectedAction = {
            type: actions.AUTH_REQUEST
        }
        expect(actions.authRequest()).toEqual(expectedAction)
    })
});

describe('authSuccess', () => {
    it('should create an action that shows an auth request has been successful and passes current user data', () => {
        const currentUser = {user: "user", password: "hashed"}
        const expectedAction = {
            type: actions.AUTH_SUCCESS,
            currentUser
        }
        expect(actions.authSuccess(currentUser)).toEqual(expectedAction)
    })
});

describe('authError', () => {
    it('should create an action that shows an auth request has failed and pass error data', () => {
        const error = "error text"
        const expectedAction = {
            type: actions.AUTH_ERROR,
            error
        }
        expect(actions.authError(error)).toEqual(expectedAction)
    })
});

describe('clearAuth', () => {
    it('should create an action that resets authToken and current user to null', () => {
        const expectedAction = {
            type: actions.CLEAR_AUTH
        }
        expect(actions.clearAuth()).toEqual(expectedAction)
    })
});

describe('registerRequest', () => {
    it('should create an action that shows new user data is loading', () => {
        const expectedAction = {
            type: actions.NEW_USER_REQUEST
        }
        expect(actions.registerRequest()).toEqual(expectedAction)
    })
});

describe('registerSuccess', () => {
    it('should create an action that shows a new user has registered', () => {
        const expectedAction = {
            type: actions.NEW_USER_SUCCESS
        }
        expect(actions.registerSuccess()).toEqual(expectedAction)
    })
});

