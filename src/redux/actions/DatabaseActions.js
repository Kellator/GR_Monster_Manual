'use strict';
import axios from 'axios';
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

export const searchDatabase = (term) => {
    console.log(term);
    return dispatch => {
        dispatch(fetching());
        axios.get(url + "monster", {
            params: {
                term: term
            }
        })
        .then(response => {
            console.log(response);
            console.log(response.data);
            console.log(response.status);
            if(response.status == 200) {
                dispatch(fetchSuccess(response.data));
                console.log("Search was successful");
            }
        })
        .catch(error => {
            console.log(error);
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
            console.log(response.status);
        })
        .catch(error => {
            console.log(error);
            dispatch(loadFail(error));
        });
    }
};
// export const createNewCard = (data) => {
//     return dispatch => {
//         dispatch(loading())
//         return axios.post(url + 'create/', {
//             data
//         })
//         .then(response => {
//             console.log(response.data)
//             let newMonster = response.datal
//             dispatch(loadSuccess(newMonster));
//             console.log(response.status);
//         })
//         .catch(error => console.log({error}));
//     }
// }