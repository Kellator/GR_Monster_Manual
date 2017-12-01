export const SHOW_LOGIN = 'SHOW_LOGIN';
export const showLogin = () => ({
    type: SHOW_LOGIN
});

export const SHOW_REGISTER = 'SHOW_REGISTER';
export const showRegisterView = () => ({
    type: SHOW_REGISTER
});

export const HOMEVIEW = 'HOMEVIEW';
export const showHomeView = () => ({
    type: HOMEVIEW
});

export const SEARCHVIEW = 'SEARCHVIEW';
export const showSearchView = () => ({
    type: SEARCHVIEW
});

export const CREATEVIEW = 'CREATEVIEW';
export const showCreateView = () => ({
    type: CREATEVIEW
});

export const NEWCARDVIEW = 'NEWCARDVIEW';
export const showNewCardView = () => ({
    type: NEWCARDVIEW
});

export const RESULTS_LIST_VIEW = 'RESULTS_LIST_VIEW';
export const showResultsListView = () => ({
    type: RESULTS_LIST_VIEW
});
export const CARDVIEW = 'CARDVIEW';
export const showCardView = (monster) => ({
    type: CARDVIEW,
    monster
});
