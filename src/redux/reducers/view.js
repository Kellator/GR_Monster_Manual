const initialState= {
    loginView: true,
    registerView: false,
    homeView: false,
    searchView: false,
    createView: false,
    resultsListView: false,
    cardView: false
}
export default function view(state = initialState, action) {
    switch(action.type) {
        case 'SHOW_LOGIN' :
            return {
                ...state,
                loginView: true,
                registerView: false,
                homeView: false,
                searchView: false,
                createView: false,
                newCardView: false,
                resultsListView: false,
                cardView: false,
            };
        case 'SHOW_REGISTER' :
            return {
                ...state,
                loginView: false,
                registerView: true,
                homeView: false,
                searchView: false,
                createView: false,
                newCardView: false,
                resultsListView: false,
                cardView: false,
            };
        case 'HOMEVIEW' :
            return {
                ...state,
                loginView: false,
                registerView: false,
                homeView: true,
                searchView: false,
                createView: false,
                newCardView: false,
                resultsListView: false,
                cardView: false
            };
        case 'SEARCHVIEW' :
            return {
                ...state,
                loginView: false,
                registerView: false,
                loginView: false,
                registerView: false,
                homeView: false,
                searchView: true,
                createView: false,
                newCardView: false,
                resultsListView: false,
                cardView: false
            };
        case 'CREATEVIEW' :
            return {
                ...state,
                loginView: false,
                registerView: false,
                homeView: false,
                searchView: false,
                createView: true,
                newCardView: false,
                resultsListView: false,
                cardView: false
            };
        case 'NEWCARDVIEW' :
            return {
                ...state,
                loginView: false,
                registerView: false,
                homeView: false,
                searchView: false,
                createView: false,
                newCardView: true,
                resultsListView: false,
                cardView: false
            };
        case 'RESULTS_LIST_VIEW' :
            return {
                ...state,
                loginView: false,
                registerView: false,
                homeView: false,
                searchView: false,
                createView: false,
                newCardView: false,
                resultsListView: true,
                cardView: false
            };
        case 'CARDVIEW' :
            return {
                ...state,
                loginView: false,
                registerView: false,
                homeView: false,
                searchView: false,
                createView: false,
                newCardView: false,
                resultsListView: false,
                cardView: true  
            };
        default :
            return state;
    }
}