import React, { useState, useEffect } from "react";
import Stories from "../../Components/stories/Stories";
import AddPost from "../../Components/addpost/AddPost";
import Feeds from "../../Components/feeds/Feeds";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);
  // post
  const handlePostAdd = (newPost) => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    const updatedPosts = [newPost, ...storedPosts];
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    setPosts(updatedPosts);
  };

  // const handlePostDelete = (postId) => {
  //   setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  // };
  return (
    <>
      <Stories />
      <AddPost onPostAdd={handlePostAdd} />
      <Feeds posts={posts} />
    </>
  );
}
