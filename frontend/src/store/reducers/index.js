import counterReducer from './counter';
import isloggedIn from './user';
import postReducer from './posts';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    loggedin: isloggedIn,
    posts: postReducer,
})

export default allReducers;
