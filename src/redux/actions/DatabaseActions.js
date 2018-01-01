import axios from 'axios';
import * as ViewActions from './ViewActions.js';
import {fetchProtectedData} from './protected-data';
import {normalizeResponseErrors} from './utils';

import { API_URL } from '../../config';
const withQuery = require('with-query');

export const SET_PAGE = 'SET_PAGE';
export const setPage = (page) => ({
    type: SET_PAGE,
    page
});

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
export const CARD_FETCH_SUCCESS = 'CARD_FETCH_SUCCESS';
export const cardFetchSuccess = (data) => ({
    type: CARD_FETCH_SUCCESS,
    data
});
export const CARD_FETCH_FAIL = 'CARD_FETCH_FAIL';
export const cardFetchFail = (error) => ({
    type: CARD_FETCH_FAIL,
    error
});
export const SET_CARD = 'SET_CARD';
export const setCard = (id) => ({
    type: SET_CARD,
    id
});
export const retrieve = (id) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    dispatch(fetching());
    axios.get(API_URL + "monster/card", {
        params: {
            term: id
        },
        headers: {
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    })
    .then(res => {
        dispatch(cardFetchSuccess(res));
        dispatch(ViewActions.showCardView());
    })
    .catch(error => {
        dispatch(cardFetchFail(error));
        dispatch(ViewActions.showErrorView(error));
    });
}
export const searchDatabase = (query) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    const searchInput = query.basic_search_input;
    dispatch(fetching());
    axios.get(API_URL + "monster", {
        params: {
            term: searchInput
        },
        headers: {
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    })
    .then(res => {
        dispatch(fetchSuccess(res));
        dispatch(ViewActions.showResultsListView());
    })
    .catch(error => {
        dispatch(fetchFail(error));
        dispatch(ViewActions.showErrorView(error));
    });
};

export const CREATING = 'CREATING';
export const creating = () => ({
    type: CREATING
});
export const CREATE_SUCCESS = 'CREATE_SUCCESS';
export const createSuccess = (data) => ({
    type: CREATE_SUCCESS,
    data
});
export const CREATE_FAIL ='CREATE_FAIL';
export const createFail = (error) => ({
    type: CREATE_FAIL,
    error
});
// action to dispatch to create new monster card
export const createNewCard = (data) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    dispatch(creating());
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
        let newMonster = res;
        dispatch(createSuccess(newMonster));
        dispatch(ViewActions.showNewCardView());
    })
    .catch(err => {
        dispatch(createFail(err));
        dispatch(ViewActions.showErrorView(err));
    })
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
export const deleteCard = (id) => {
    return (dispatch, getState) => {
        const authToken = getState().auth.authToken;
        axios.delete(API_URL + "delete", {
            params: {
                term: id
            },
            headers: {
                Authorization: `Bearer ${authToken}`,
                'Content-Type': 'application/json'
            }
        })      
        .then(response => {
            dispatch(deleteSuccess());
            dispatch(ViewActions.showResultsListView());
        }) 
        .catch(error => {
            dispatch(deleteFail(error));
            dispatch(ViewActions.showErrorView(error));
        });
    }
};
export const NEW_LIST = 'NEW_LIST';
export const returnNewList = (id, list) => ({
    type: NEW_LIST,
    id,
    list
});
