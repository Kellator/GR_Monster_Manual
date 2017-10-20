import { compose, createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware, push } from 'react-router-redux';
import logger from 'redux-logger';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const history = createHistory();
const devLogger = logger();

// const middleware = [
//     logger(),
//     thunk,
//     history
// ];
const middleware = routerMiddleware(
    history,
    devLogger,
    thunk
);

const enhancers = compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

/**
 * CREATE STORE
 */
export const initialState = {

};
const store = createStore(
    rootReducer,
    enhancers
);



export { store };