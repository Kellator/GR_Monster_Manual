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
    SET_PAGE,
    NEW_LIST
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
        console.log(action.data);
        return Object.assign({}, state, {
            loading: false,
            loaded: true,
            data: action.data.data,
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
            currentCard: state.data.find(monster => monster._id == action.id)
        });
    } else if (action.type === SET_PAGE) {
        return Object.assign({}, state, {
            page: action.page
        });
    } else if (action.type === NEW_LIST) {
        // defines the list to search
        let list = action.list;
        // determines index of object to remove from list
        const index = state.data.findIndex(list => list._id === action.id);
        if(index === -1) {
            throw new Error('Could not find entry');
        }
        console.log(index);
        const before = state.data.slice(0, index);
        const after = state.data.slice(index + 1);
        console.log(before);
        console.log(after);
        const newList = before.concat(after);
        console.log(newList);
        return Object.assign({}, state, {
            data: newList
        })
    }
    
    return state;
}
