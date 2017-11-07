const initialState= {
    homeView: true,
    searchView: false,
    createView: false,
    resultsListView: false
}
export default function view(state = initialState, action) {
    switch(action.type) {
        case 'HOMEVIEW' :
            return {
                ...state,
                homeView: true,
                searchView: false,
                createView: false,
                newCardView: false
            };
        case 'SEARCHVIEW' :
            return {
                ...state,
                homeView: false,
                searchView: true,
                createView: false,
                newCardView: false
            };
        case 'CREATEVIEW' :
            return {
                ...state,
                homeView: false,
                searchView: false,
                createView: true,
                newCardView: false,
                resultsListView: false
            };
        case 'NEWCARDVIEW' :
            return {
                ...state,
                homeView: false,
                searchView: false,
                createView: false,
                newCardView: true,
                resultsListView: false
            };
        case 'RESULTS_LIST_VIEW' :
            return {
                ...state,
                homeView: false,
                searchView: false,
                createView: false,
                newCardView: false,
                resultsListView: true
            };
        default :
            return state;
    }
}