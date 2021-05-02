export function getChineseTrans() {
    return () => {
        
    }
}

export function setChineseTrans(data) {
    return (dispatch, getState) => {
        dispatch({
            type: 'SET_CHINESE_TRANS',
            data: data
        })
    }
}
