import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import view from './view';
import database from './database';

const rootReducer = combineReducers({
    routing: routerReducer,
    form: formReducer,
    view,
    database
});
export default rootReducer;