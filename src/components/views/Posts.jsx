import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../store/actions";

export default function Posts() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts)

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
      <div style={{overflow: 'scroll', height: '550px'}}>
        {posts.map(post => {
          return <h3>{post.title}</h3>
        })}
      </div>
  )
}
