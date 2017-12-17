import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import view from './view';
import database from './database';
import auth from './auth';

const rootReducer = combineReducers({
    routing: routerReducer,
    form: formReducer,
    view,
    database,
    auth
});
export default rootReducer;