import axios from 'axios';
import * as ViewActions from './ViewActions.js';
import {fetchProtectedData} from './protected-data';
import {normalizeResponseErrors} from './utils';

import { API_URL } from '../../config';
// let url = 'http://localhost:5252/';
// let url = "https://hidden-hamlet-10698.herokuapp.com/";


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

export const searchDatabase = (query) => (dispatch, getState) => {
    console.log(query);
    const authToken = getState().auth.authToken;
    console.log(authToken);
    dispatch(fetching());
    return fetch(`${API_URL}monster`, {
        method: 'GET',
        params: {
            term: query.basic_search_input
        },
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
    .then(response => {
        console.log(response);
        if(response.status === 200) {
            dispatch(fetchSuccess(response.data));
            dispatch(ViewActions.showResultsListView());
            console.log("Search was successful");
        }
    })
    .catch(error => {
        console.log(error);
        dispatch(fetchFail(error));
        dispatch(ViewActions.showErrorView(error));
    });
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
export const createNewCard = (data) => (dispatch, getState) => {
    console.log(data);
    const authToken = getState().auth.authToken;
    console.log(authToken);
    dispatch(loading());
    return fetch(`${API_URL}monster`, {
        method: 'POST',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        
        },
        body: JSON.stringify(data)
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(res => {
        console.log(res);
        let newMonster = res;
        dispatch(loadSuccess(newMonster));
        dispatch(ViewActions.showNewCardView());
    })
    .catch(error => {
        console.log(error);
        dispatch(loadFail(error));
        dispatch(ViewActions.showErrorView(error));
    })
};

// export const EDIT_SUCCESS = 'EDIT_SUCCESS';
// export const editSuccess = (edit) => ({
//     type: EDIT_SUCCESS,
//     edit
// });
// export const EDIT_FAIL = 'EDIT_FAIL';
// export const editFail = (error) => ({
//     type: EDIT_FAIL,
//     error
// });
// // action to dispatch to edit existing creature card
// export const editCard = (card_id) => {
//     console.log(card_id);
//     return dispatch => {
//         axios.put(url + "edit", card_id)
//         .then(response => {
//             console.log(response);
            
//             // dispatch(editSuccess(edit))
//         })
//         .catch(error => {
//             console.log(error);
//             dispatch(editFail(error));
//         });
//     }
// };
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const deleteSuccess = () => ({
    type: DELETE_SUCCESS
});
export const DELETE_FAIL = 'DELETE_FAIL';
export const deleteFail = (error) => ({
    type: DELETE_FAIL,
    error
});
export const deleteCard = (card_id) => (dispatch, getState) => {
    console.log(card_id);
    const authToken = getState().auth.authToken;
    console.log(authToken);
    return dispatch => {
        axios.delete(API_URL + "delete", {
            data: {
                card_id: card_id
            }
        })       
        .then(response => {
            dispatch(deleteSuccess());
            dispatch(ViewActions.showHomeView());
            console.log("creature Card Deleted")
            console.log(response);
        }) 
        .catch(error => {
            console.log(error);
            dispatch(deleteFail(error));
            dispatch(ViewActions.showErrorView(error));
        });
    }
}