import axios from 'axios';
import * as ViewActions from './ViewActions.js';
let url = 'http://localhost:5252/';


export const FETCHING = 'FETCHING';
export const fetching = () => ({
    type: FETCHING
});
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const fetchSuccess = (data) => ({
    type: FETCH_SUCCESS,
    data
});
export const FETCH_FAIL = 'FETCH_FAIL';
export const fetchFail = (error) => ({
    type: FETCH_FAIL,
    error
});

export const searchDatabase = (query, token) => {
    console.log(query);
    console.log(token);
    return dispatch => {
        dispatch(fetching());
        axios.get(url + "monster", {
            params: {
                term: query.basic_search_input
            },
            headers: {
                Authorization: "Bearer " + token 
            }
        })
        .then(response => {
            if(response.status === 200) {
                dispatch(fetchSuccess(response.data));
                dispatch(ViewActions.showResultsListView());
                console.log("Search was successful");
            }
        })
        .catch(error => {
            dispatch(fetchFail(error));
        });
    }
};

export const LOADING = 'LOADING';
export const loading = () => ({
    type: LOADING
});
export const LOAD_SUCCESS = 'LOAD_SUCCESS';
export const loadSuccess = (data) => ({
    type: LOAD_SUCCESS,
    data
});
export const LOAD_FAIL ='LOAD_FAIL';
export const loadFail = (error) => ({
    type: LOAD_FAIL,
    error
});
// action to dispatch to create new monster card
export const createNewCard = (data) => {
    console.log(data);
    return dispatch => {
        dispatch(loading());
        axios.post(url + "monster", data)
        .then(response => {
            console.log(response.data);
            let newMonster = response.data;
            dispatch(loadSuccess(newMonster));
            dispatch(ViewActions.showNewCardView());
            console.log(response.status);
        })
        .catch(error => {
            console.log(error);
            dispatch(loadFail(error));
        });
    }
};

export const EDIT_SUCCESS = 'EDIT_SUCCESS';
export const editSuccess = (edit) => ({
    type: EDIT_SUCCESS,
    edit
});
export const EDIT_FAIL = 'EDIT_FAIL';
export const editFail = (error) => ({
    type: EDIT_FAIL,
    error
});
// action to dispatch to edit existing creature card
export const editCard = (card_id) => {
    console.log(card_id);
    return dispatch => {
        axios.put(url + "edit", card_id)
        .then(response => {
            console.log(response);
            
            // dispatch(editSuccess(edit))
        })
        .catch(error => {
            console.log(error);
            dispatch(editFail(error));
        });
    }
};
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const deleteSuccess = () => ({
    type: DELETE_SUCCESS
});
export const DELETE_FAIL = 'DELETE_FAIL';
export const deleteFail = (error) => ({
    type: DELETE_FAIL,
    error
});
export const deleteCard = (card_id) => {
    console.log(card_id);
    return dispatch => {
        axios.delete(url + "delete", {
            data: {
                card_id: card_id
            }
        })       
        .then(response => {
            dispatch(deleteSuccess);
            dispatch(ViewActions.showHomeView());
            console.log("creature Card Deleted")
            console.log(response);
        }) 
        .catch(error => {
            console.log(error);
            dispatch(deleteFail(error));
        });
    }
}