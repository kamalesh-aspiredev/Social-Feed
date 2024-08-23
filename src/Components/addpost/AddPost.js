import React, { useState } from "react";
import "./addpost.css";

// Fake api
import CurrentUserData from "../../FackeApis/CurrentUserData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faSmile,
  faTags,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

export default function AddPost({ onPostAdd }) {
  const [postText, setPostText] = useState("");

  const handlePostTextChange = (e) => {
    setPostText(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (postText.trim()) {
      const newPost = {
        id: Date.now(), // Unique ID based on timestamp
        name: CurrentUserData[0].name,
        feedProfile: CurrentUserData[0].ProfieImage,
        desc: postText,
        feedImage: "", // Or handle file upload for images
      };

      // Add to local storage
      const existingPosts = JSON.parse(localStorage.getItem("posts")) || [];
      existingPosts.unshift(newPost);
      localStorage.setItem("posts", JSON.stringify(existingPosts));

      onPostAdd(newPost);

      setPostText("");
    }
  };

  return (
    <form className="postForm" onSubmit={handleFormSubmit}>
      <div className="user form-top">
        <img src={CurrentUserData[0].ProfieImage} alt=" " />
        <input
          type="text"
          placeholder="What's On Your Mind?"
          value={postText}
          onChange={handlePostTextChange}
        />
        <button className="btn btn-primary" type="submit">
          Post
        </button>
      </div>
      <div className="post-categories">
        <label htmlFor="file">
          <input type="file" id="file" />
          <span>
            <FontAwesomeIcon icon={faImage} />
            Photos
          </span>
        </label>
        <label htmlFor="file">
          <input type="file" id="file" />
          <span>
            <FontAwesomeIcon icon={faVideo} />
            Videos
          </span>
        </label>
        <span>
          <FontAwesomeIcon icon={faTags} />
          Tags
        </span>
        <span>
          <FontAwesomeIcon icon={faSmile} />
          Feelings
        </span>
      </div>
    </form>
  );
}
