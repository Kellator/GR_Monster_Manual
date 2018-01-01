export const SHOW_LOGIN = 'SHOW_LOGIN';
export const showLogin = () => ({
    type: SHOW_LOGIN
});

export const SHOW_REGISTER = 'SHOW_REGISTER';
export const showRegisterView = () => ({
    type: SHOW_REGISTER
});

export const HOME_VIEW = 'HOME_VIEW';
export const showHomeView = () => ({
    type: HOME_VIEW
});

export const SEARCH_VIEW = 'SEARCH_VIEW';
export const showSearchView = () => ({
    type: SEARCH_VIEW
});

export const CREATE_VIEW = 'CREATE_VIEW';
export const showCreateView = () => ({
    type: CREATE_VIEW
});

export const NEW_CARD_VIEW = 'NEW_CARD_VIEW';
export const showNewCardView = () => ({
    type: NEW_CARD_VIEW
});

export const RESULTS_LIST_VIEW = 'RESULTS_LIST_VIEW';
export const showResultsListView = () => ({
    type: RESULTS_LIST_VIEW
});
export const CARD_VIEW = 'CARD_VIEW';
export const showCardView = () => ({
    type: CARD_VIEW
});
export const ERROR = 'ERROR';
export const showErrorView = (error) => ({
    type: ERROR,
    error
});
export const TOGGLE_MENU = 'TOGGLE_MENU';
export const toggleMenu = () => ({
    type: TOGGLE_MENU
});