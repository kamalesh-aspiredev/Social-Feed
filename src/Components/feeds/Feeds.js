import React, { useEffect, useState } from "react";
import Feed from "./Feed";
import "./feeds.css";

export default function Feeds() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    //  load LS
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  const handleDelete = (id) => {
    // Remove LS
    const updatedPosts = posts.filter((post) => post.id !== id);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    setPosts(updatedPosts);
  };

  return (
    <div className="feeds">
      {posts.map((post) => (
        <Feed key={post.id} fed={post} onDelete={handleDelete} />
      ))}
    </div>
  );
}
