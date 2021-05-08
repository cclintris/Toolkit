const defaultState = {
    isloggedIn: false
}

const isloggedIn = (state = defaultState, action) => {
    switch(action.type) {
        case 'SIGN_IN':
            return Object.assign({}, state, {
                isloggedIn: !state.isloggedIn
            })
        default:
            return state
    }
}

export default isloggedIn;
