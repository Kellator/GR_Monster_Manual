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

describe('showSearchView', () => {
    it('should create an action to change view to search', () => {
        const expectedAction = {
            type: actions.SEARCH_VIEW
        }
        expect(actions.showSearchView()).toEqual(expectedAction)
    })
});

describe('showCreateView', () => {
    it('should create an action to change view to create', () => {
        const expectedAction = {
            type: actions.CREATE_VIEW
        }
        expect(actions.showCreateView()).toEqual(expectedAction)
    })
});

describe('showNewCardView', () => {
    it('should create an action to change view to new card', () => {
        const expectedAction = {
            type: actions.NEW_CARD_VIEW
        }
        expect(actions.showNewCardView()).toEqual(expectedAction)
    })
});

describe('showResultsListView', () => {
    it('should create an action to change view to results list', () => {
        const expectedAction = {
            type: actions.RESULTS_LIST_VIEW
        }
        expect(actions.showResultsListView()).toEqual(expectedAction)
    })
});

describe('showCardView', () => {
    it('should create an action to change view to card view', () => {
        const expectedAction = {
            type: actions.CARD_VIEW
        }
        expect(actions.showCardView()).toEqual(expectedAction)
    })
});

describe('showErrorView', () => {
    it('should create an action to change view to error and pass error text', () => {
        const error = 'error text'
        const expectedAction = {
            type: actions.ERROR,
            error
        }
        expect(actions.showErrorView(error)).toEqual(expectedAction)
    })
});

describe('showAboutView', () => {
    it('should create an action to change view to about', () => {
        const expectedAction = {
            type: actions.ABOUT_VIEW
        }
        expect(actions.showAboutView()).toEqual(expectedAction)
    })
});

describe('toggleMenu', () => {
    it('should create an action to change the menu view', () => {
        const expectedAction = {
            type: actions.TOGGLE_MENU
        }
        expect(actions.toggleMenu()).toEqual(expectedAction)
    })
});