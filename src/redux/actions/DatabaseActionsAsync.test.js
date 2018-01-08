// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// import * as actions from './DatabaseActions';
// import moxios from 'moxios';
// import { sampleCard, sampleToken } from '../mock/DatabaseActionsRequest';
// import { createAuthToken } from '../../auth/router';

// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);
// const user = {
//     user: "user",
//     password: "password",
//     authToken: sampleToken
// }

// describe('retrieve action', () => {
//     beforeEach(function () {
//         moxios.install();
//     });
//     afterEach(function () {
//         moxios.uninstall();
//     });
//     it('creates CARD_FETCH_SUCCESS after successfully fetching single item', () =>  {
//         moxios.wait(() => {
//             const request = moxios.requests.mostRecent();
//             request.respondWith({
//                 status: 200,
//                 response: sampleCard,
//             });
//         });
//         const expectedActions = [
//             { type: actions.FETCHING },
//             { type: actions.CARD_FETCH_SUCCESS, results: sampleCard }
//         ];
//         const store = mockStore({ results: {} })

//         return store.dispatch(actions.retrieve()).then(() => {
//             expect(store.getActions()).toEqual(expectedActions);
//         });
//     });
// });

// describe('search database action', () => {
//     beforeEach(function () {
//         moxios.install();
//     });
//     afterEach(function () {
//         moxios.uninstall();
//     });
//     it('creates FETCH_SUCCESS after successfully fetching results list', () => {
//         moxios.wait(() => {
//             const request = moxios.requests.mostRecent();
//             request.respondWith({
//                 status: 200,
//                 response: [sampleCard],
//             });
//         });
//         const expectedActions = [
//             { type: actions.FETCHING },
//             { type: actions.FETCH_SUCCESS, results: [sampleCard] }
//         ];
//         const store = mockStore({ results: {} })

//         return store.dispatch(actions.searchDatabase()).then(() => {
//             expect(store.getActions()).toEqual(expectedActions);
//         });
//     });
// });