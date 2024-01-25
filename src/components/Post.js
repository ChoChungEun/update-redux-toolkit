import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, addPosts, getPosts } from "../redux/posts";

const Post = () => {
  const dispatch = useDispatch();

  const { posts, loading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

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
      <button onClick={handleClickAddPost}>GET POSTS</button>
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
