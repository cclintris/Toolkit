import counterReducer from './counter';
import isloggedIn from './user';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    loggedin: isloggedIn,
})

export default allReducers;
