import { compose, createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import {loadAuthToken} from '../local-storage';
import {setAuthToken, refreshAuthToken} from '../redux/actions/AuthActions';
import logger from 'redux-logger';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const history = createHistory();

const middleware = [
    logger,
    thunk
]
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
const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export { store };