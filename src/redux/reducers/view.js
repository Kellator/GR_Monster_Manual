const initialState= {
    homeView: true,
    searchView: false,
    createView: false,
    resultsListView: false,
    cardView: false
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
                cardView: false
            };
        case 'SEARCHVIEW' :
            return {
                ...state,
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
                homeView: false,
                searchView: false,
                createView: false,
                newCardView: false,
                resultsListView: false,
                cardView: true   
            }
        default :
            return state;
    }
}