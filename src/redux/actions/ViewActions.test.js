import * as actions from './ViewActions';

describe('showLogin', () => {
    it('should create an action to change to view to login', () => {
        const expectedAction = {
            type: actions.SHOW_LOGIN
        }
        expect(actions.showLogin()).toEqual(expectedAction)
    })
});

describe('showRegisterView', () => {
    it('should create an action to change view to register', () => {
        const expectedAction = {
            type: actions.SHOW_REGISTER
        }
        expect(actions.showRegisterView()).toEqual(expectedAction)
    })
});

describe('showHomeView', () => {
    it('should create an action to change view to home', () => {
        const expectedAction = {
            type: actions.HOME_VIEW
        }
        expect(actions.showHomeView()).toEqual(expectedAction)
    })
});