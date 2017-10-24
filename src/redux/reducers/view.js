import * as action from '../actions';

const initialState= {
    homeView: true,
    searchView: false,
    createView: false
}
export default function view(state = initialState, action) {
    switch(action.type) {
        case 'HOMEVIEW' :
            return {
                ...state,
                homeView: true,
                searchView: false,
                createView: false
            };
        case 'SEARCHVIEW' :
            return {
                ...state,
                homeView: false,
                searchView: true,
                createView: false
            };
        case 'CREATEVIEW' :
            return {
                ...state,
                homeView: false,
                searchView: false,
                createView: true
            };
        default :
            return state;
    }
}