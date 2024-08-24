import React, { useState } from "react";
import "./addpost.css";
import CurrentUserData from "../../FackeApis/CurrentUserData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faSmile,
  faTags,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";

//TAG to WEBNOX:-----------------------------------------------
import Tag from "./Tag";
import Feelings from "./Feelings";

export default function AddPost({ onPostAdd }) {
  const [postText, setPostText] = useState("");
  const [postMedia, setPostMedia] = useState({ type: "", src: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePostTextChange = (e) => {
    setPostText(e.target.value);
  };

  // 2 in 1 select (Image or video)

  const handleMediaChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPostMedia({
          type: file.type.startsWith("video") ? "video" : "image",
          src: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (postText.trim() && !isSubmitting) {
      setIsSubmitting(true);

      const newPost = {
        id: Date.now(),
        name: CurrentUserData[0].name,
        feedProfile: CurrentUserData[0].ProfieImage,
        desc: postText,
        media: postMedia.src ? postMedia : { type: "", src: "" },
        likes: 1,
      };

      onPostAdd(newPost);
      setPostText("");
      setPostMedia({ type: "", src: "" });
      setIsSubmitting(false);
      window.location.reload();
    }
  };

  //tag to WEBNOX:----------------------------------TAG POP UPP
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const tagHandler = () => {
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };
  // --------------------Feelings------------- POP Up
  const [showPopup, setShowPopup] = useState(false);

  const handleIconClick = () => {
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };
  // ----------------------
  return (
    <form className="postForm" onSubmit={handleFormSubmit}>
      <div className="user form-top">
        <img src={CurrentUserData[0].ProfieImage} alt="Your Profile" />
        <input
          type="text"
          placeholder="What's on your mind?"
          value={postText}
          onChange={handlePostTextChange}
          disabled={isSubmitting}
        />

        <button
          className="btn btn-primary"
          type="submit"
          disabled={isSubmitting}
        >
          Post
        </button>
      </div>
      <div className="post-categories">
        <label htmlFor="file">
          <input type="file" id="file" onChange={handleMediaChange} />
          <span>
            <FontAwesomeIcon icon={faImage} />
            Photos
          </span>
        </label>
        <label htmlFor="file">
          <input type="file" id="file" onChange={handleMediaChange} />
          <span>
            <FontAwesomeIcon icon={faVideo} />
            Videos
          </span>
        </label>
        <span>
          <FontAwesomeIcon icon={faTags} onClick={tagHandler} />
          Tags
        </span>
        {/* to tag to WEBNOX */}
        {isPopupVisible && (
          <Tag message="Request to WEBNOX TECHNOLOGIES" onClose={closePopup} />
        )}
        {/* ---------------------------- */}
        <span onClick={handleIconClick} className="cursor-pointer">
          <FontAwesomeIcon icon={faSmile} />
          Feelings
        </span>
        {/* Feeling uhhh.............. */}
        {showPopup && (
          <Feelings
            message="Happy! to Contribute with WEBNOX"
            onClose={handleClose}
            duration={2000}
          />
        )}
      </div>
    </form>
  );
}
