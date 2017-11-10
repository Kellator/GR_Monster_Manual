const initialState = {
    cardLoading: false,
    cardLoaded: false
}
export default function database(state = initialState, action) {
    switch(action.type) {
        case 'FETCHING' :
            return {
                ...state,
                cardLoading: true,
                cardLoaded: false
            }
        case 'FETCH_SUCCESS' : 
            return {
                ...state,
                cardLoading: false,
                cardLoaded: true,
                resultsList : action.data
            };
        case 'FETCH_FAIL' :
            return {
                ...state,
                cardLoading: false,
                cardLoaded: false,
                error: action.error
            };
        case 'CARDVIEW' :
            return {
                ...state,
                cardView: action.monster
            }
        default :
            return state;
    }
}