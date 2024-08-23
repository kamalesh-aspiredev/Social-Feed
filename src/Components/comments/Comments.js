import React, { useState, useEffect } from "react";
import "./comments.css";

// fake Api
import CommentData from "../../FackeApis/CommentData";
import CurrentUserData from "../../FackeApis/CurrentUserData";
import { Link } from "react-router-dom";

export default function Comments() {
  // for localstorage saving
  const [comments, setComments] = useState(() => {
    const savedComments = localStorage.getItem("comments");
    return savedComments ? JSON.parse(savedComments) : CommentData;
  });

  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const handleInputChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Simulate adding the comment to CommentData.js
    if (newComment.trim()) {
      const newCommentData = {
        id: comments.length + 1,
        name: CurrentUserData[0].name, // assuming CurrentUserData has a name field
        commentProfile: CurrentUserData[0].ProfieImage,
        CommeText: newComment,
      };

      // Update the comments state
      setComments([newCommentData, ...comments]);
      setNewComment(""); // Clear the input field after submission
    }
  };

  return (
    <div className="comments">
      <div className="write-box">
        <form onSubmit={handleFormSubmit}>
          <div className="user">
            <img src={CurrentUserData[0].ProfieImage} alt="User Profile" />
            <input
              type="text"
              placeholder="Write a Comment!"
              value={newComment}
              onChange={handleInputChange}
            />
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </div>
        </form>
      </div>
      {/* comment count */}
      <div className="comment-count">
        <h4>
          {comments.length} Comment{comments.length !== 1 ? "s" : ""}
        </h4>
      </div>
      {/* new and exisit com */}
      {comments.map((comm) => (
        <Link to={`/profile/${comm.id}`} key={comm.id}>
          <div className="user">
            <img src={comm.commentProfile} alt="Commenter Profile" />
            <div>
              <h5>{comm.name}</h5>
              <p>{comm.CommeText}</p>
            </div>
            <small>1h</small>
          </div>
        </Link>
      ))}
    </div>
  );
}
