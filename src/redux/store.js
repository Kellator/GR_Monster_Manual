import { compose, createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const history = createHistory();
// const devLogger = logger();

// const middleware = [
//     logger(),
//     thunk,
//     history
// ];
const middleware = routerMiddleware(
    history,
    createLogger,
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