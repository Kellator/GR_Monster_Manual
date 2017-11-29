import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import view from './view';
import database from './database';
import login from './login';

const rootReducer = combineReducers({
    routing: routerReducer,
    form: formReducer,
    view,
    database,
    login
});
export default rootReducer;