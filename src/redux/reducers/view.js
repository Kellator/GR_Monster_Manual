const initialState= {
    homeView: true,
    searchView: false,
    createView: false,
    resultsListView: false,
    cardView: false,
    wizardPage: 0
}
export default function view(state = initialState, action) {
    switch(action.type) {
        case 'HOMEVIEW' :
            return {
                ...state,
                homeView: true,
                searchView: false,
                createView: false,
                newCardView: false,
                resultsListView: false,
                cardView: false,
                wizardPage: 0
            };
        case 'SEARCHVIEW' :
            return {
                ...state,
                homeView: false,
                searchView: true,
                createView: false,
                newCardView: false,
                resultsListView: false,
                cardView: false,
                wizardPage: 0
            };
        case 'CREATEVIEW' :
            return {
                ...state,
                homeView: false,
                searchView: false,
                createView: true,
                newCardView: false,
                resultsListView: false,
                cardView: false,
                wizardPage: 0
            };
        case 'NEWCARDVIEW' :
            return {
                ...state,
                homeView: false,
                searchView: false,
                createView: false,
                newCardView: true,
                resultsListView: false,
                cardView: false,
                wizardPage: 0
            };
        case 'RESULTS_LIST_VIEW' :
            return {
                ...state,
                homeView: false,
                searchView: false,
                createView: false,
                newCardView: false,
                resultsListView: true,
                cardView: false,
                wizardPage: 0
            };
        case 'CARDVIEW' :
            return {
                ...state,
                homeView: false,
                searchView: false,
                createView: false,
                newCardView: false,
                resultsListView: false,
                cardView: true,
                wizardPage: 0   
            };
        case 'PAGEFORWARD' :
            return {
                ...state,
                homeView: false,
                searchView: false,
                createView: false,
                newCardView: false,
                resultsListView: false,
                cardView: true,
                wizardPage: action.page
            };
        case 'PAGEBACK' :
            return {
                ...state,
                homeView: false,
                searchView: false,
                createView: false,
                newCardView: false,
                resultsListView: false,
                cardView: true,
                wizardPage: action.page
            };
        default :
            return state;
    }
}