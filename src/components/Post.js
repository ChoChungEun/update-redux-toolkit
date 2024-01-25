import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/posts";

const Post = () => {
  const dispatch = useDispatch();

  const { posts, loading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  console.log("loading", loading);
  console.log("posts", posts);
  return (
    <div>
      {posts?.map((post) => (
        <div style={{ marginBottom: 10, borderBottom: "1px solid black" }}>
          <div>id: {post.id}</div>
          <div>title: {post.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Post;
