import {
    SHOW_LOGIN,
    SHOW_REGISTER,
    HOME_VIEW,
    SEARCH_VIEW,
    CREATE_VIEW,
    NEW_CARD_VIEW,
    RESULTS_LIST_VIEW,
    CARD_VIEW,
    ERROR,
    ABOUT_VIEW,
    TOGGLE_MENU
} from '../actions/ViewActions';

const initialState= {
    type: null,
    menu: false
}
export default function reducer(state = initialState, action) {
    if (action.type === SHOW_LOGIN) {
        return Object.assign({}, state, {
            type: 'login'
        });
    } else if (action.type === SHOW_REGISTER) {
        return Object.assign({}, state, {
            type: 'register'
        });
    } else if (action.type === HOME_VIEW) {
        return Object.assign({}, state, {
            type: 'home'
        });
    } else if (action.type === SEARCH_VIEW) {
        return Object.assign({}, state, {
            type: 'search'
        });
    } else if (action.type === CREATE_VIEW) {
        return Object.assign({}, state, {
            type: 'create'
        });
    } else if (action.type === NEW_CARD_VIEW) {
        return Object.assign({}, state, {
            type: 'new card'
        });
    } else if (action.type === RESULTS_LIST_VIEW) {
        return Object.assign({}, state, {
            type: 'results list'
        });
    } else if (action.type === CARD_VIEW) {
        return Object.assign({}, state, {
            type: 'card',
            currentCard: action.result
        });
    } else if (action.type === ERROR) {
        return Object.assign({}, state, {
            type: 'error'
        });
    } else if (action.type === TOGGLE_MENU) {
        return Object.assign({}, state, {
            menu: !state.menu
        });
    } else if (action.type === ABOUT_VIEW) {
        return Object.assign({}, state, {
            type: 'about'
        });
    }
     return state;
}
