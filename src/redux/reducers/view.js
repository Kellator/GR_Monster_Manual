const initialState= {
    landingView: true,
    loginView: false,
    registerView: false,
    homeView: false,
    searchView: false,
    createView: false,
    resultsListView: false,
    cardView: false,
    errorView: false 
}
export default function view(state = initialState, action) {
    switch(action.type) {
        case 'SHOW_LOGIN' :
            return {
                ...state,
                landingView: false,
                loginView: true,
                registerView: false,
                homeView: false,
                searchView: false,
                createView: false,
                newCardView: false,
                resultsListView: false,
                cardView: false,
                errorView: false 
            };
        case 'SHOW_REGISTER' :
            return {
                ...state,
                landingView: false,
                loginView: false,
                registerView: true,
                homeView: false,
                searchView: false,
                createView: false,
                newCardView: false,
                resultsListView: false,
                cardView: false,
                errorView: false 
            };
        case 'HOMEVIEW' :
            return {
                ...state,
                landingView: false,
                loginView: false,
                registerView: false,
                homeView: true,
                searchView: false,
                createView: false,
                newCardView: false,
                resultsListView: false,
                cardView: false,
                errorView: false 
            };
        case 'SEARCHVIEW' :
            return {
                ...state,
                landingView: false,
                loginView: false,
                registerView: false,
                loginView: false,
                registerView: false,
                homeView: false,
                searchView: true,
                createView: false,
                newCardView: false,
                resultsListView: false,
                cardView: false,
                errorView: false 
            };
        case 'CREATEVIEW' :
            return {
                ...state,
                landingView: false,
                loginView: false,
                registerView: false,
                homeView: false,
                searchView: false,
                createView: true,
                newCardView: false,
                resultsListView: false,
                cardView: false,
                errorView: false 
            };
        case 'NEWCARDVIEW' :
            return {
                ...state,
                landingView: false,
                loginView: false,
                registerView: false,
                homeView: false,
                searchView: false,
                createView: false,
                newCardView: true,
                resultsListView: false,
                cardView: false,
                errorView: false 
            };
        case 'RESULTS_LIST_VIEW' :
            return {
                ...state,
                landingView: false,
                loginView: false,
                registerView: false,
                homeView: false,
                searchView: false,
                createView: false,
                newCardView: false,
                resultsListView: true,
                cardView: false,
                errorView: false 
            };
        case 'CARDVIEW' :
            return {
                ...state,
                landingView: false,
                loginView: false,
                registerView: false,
                homeView: false,
                searchView: false,
                createView: false,
                newCardView: false,
                resultsListView: false,
                cardView: true,
                errorView: false  
            };
        case 'ERROR' :
            return {
                ...state,
                landingView: false,
                loginView: false,
                registerView: false,
                homeView: false,
                searchView: false,
                createView: false,
                newCardView: false,
                resultsListView: false,
                cardView: false,
                errorView: true
            }
        default :
            return state;
    }
}