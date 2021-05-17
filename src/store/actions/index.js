import axios from "axios";

export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const fetchPosts = () => async (dispatch, getState) => {
  dispatch({ type: "FETCH_POSTS_REQUEST" });

  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    dispatch({
      type: "FETCH_POSTS_SUCCESS",
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: "FETCH_POSTS_FAILURE",
      error,
    });
  }
};
