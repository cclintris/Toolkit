import { combineReducers } from 'redux'
import defaultState from './state'

function chineseTrans(state = defaultState.chineseTrans, action) {
    switch(action.type) {
        case 'SET_CHINESE_TRANS':
            state = action.data
        default:
            return state
    }
}

export default combineReducers({
    chineseTrans,
})
