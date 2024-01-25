import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePost, deletePost, addPosts, getPosts } from "../redux/posts";

const Post = () => {
  const dispatch = useDispatch();

  const { posts, loading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  const handleClickUpdatePost = () => {
    const postId = 1;
    const newUpdatePost = {
      id: 1,
      title: "update",
      body: "update",
      userId: 99,
    };
    dispatch(updatePost({ postId, updatePost: newUpdatePost }));
  };

  const handleClickAddPost = () => {
    const newPost = [
      {
        userId: 4,
        title: "new post",
        body: "",
      },
    ];
    dispatch(addPosts(newPost));
  };

  const handleClickDeletePost = () => {
    const postId = 1;
    dispatch(deletePost(postId));
  };

  return (
    <div>
      <button onClick={handleClickUpdatePost}>UPDATE POSTS</button>
      <button onClick={handleClickAddPost}>ADD POSTS</button>
      <button onClick={handleClickDeletePost}>DELETE POSTS</button>
      {posts?.map((post) => (
        <div
          key={post.id}
          style={{ marginBottom: 10, borderBottom: "1px solid black" }}
        >
          <div>id: {post.id}</div>
          <div>userId: {post.userId}</div>
          <div>title: {post.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Post;
