import axios from "axios"

export const increment = () => {
    return {
        type: 'INCREMENT'
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

export const fetchPosts = () => {
    return async (dispatch, getState) => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log('fetchPost', res.data)
        dispatch({
            type: 'FETCH_POSTS',
            payload: res.data
        })
    }
}
