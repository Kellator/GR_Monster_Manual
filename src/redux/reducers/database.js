import {
    FETCHING,
    FETCH_SUCCESS,
    FETCH_FAIL,
    CARD_FETCH_SUCCESS,
    CARD_FETCH_FAIL,
    CREATING,
    CREATE_SUCCESS,
    CREATE_FAIL,
    SET_CARD,
    SET_PAGE
} from '../actions/DatabaseActions';

const initialState = {
    loading: null,
    loaded: null
}
export default function reducer(state = initialState, action) {
    if (action.type === FETCHING) {
        return Object.assign({}, state, {
            loading: true
        });
    } else if (action.type === FETCH_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
            loaded: true,
            data: action.data,
            error: null
        });
    } else if (action.type === FETCH_FAIL) {
        return Object.assign({}, state, {
            loading: false,
            loaded: false,
            error: action.error
        });
    } else if (action.type === CARD_FETCH_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
            loaded: true,
            currentCard: action.data,
            error: null
        });
    } else if (action.type === CARD_FETCH_FAIL) {
        return Object.assign({}, state, {
            loading: false,
            loaded: false,
            error: action.error
        });
    } else if (action.type === CREATING) {
        return Object.assign({}, state, {
            loading: true
        });
    } else if (action.type === CREATE_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
            loaded: true,
            newData: action.data,
            error: null
        });
    } else if (action.type === CREATE_FAIL) {
        return Object.assign({}, state, {
            loading: false,
            loaded: false,
            error: action.error
        });
    } else if (action.type === SET_CARD) {
        return Object.assign({}, state, {
            currentCard: state.data.data.find(monster => monster._id == action.id)
        });
    } else if (action.type === SET_PAGE) {
        return Object.assign({}, state, {
            page: action.page
        });
    }
    
    return state;
}
