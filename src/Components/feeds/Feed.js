import React, { useState } from "react";
import "./feeds.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faHeart,
  faListDots,
  faShare,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import Comments from "../comments/Comments";

export default function Feed({ fed, onDelete }) {
  const [openComment, setOpenComment] = useState(false);
  const [likes, setLikes] = useState(fed.likes);
  const [isLiked, setIsLiked] = useState(false);

  const commentHandler = () => {
    setOpenComment(!openComment);
  };

  const likeHandler = () => {
    setLikes(isLiked ? likes - 1 : likes + 1);
    setIsLiked(!isLiked);
  };

  const deleteHandler = () => {
    onDelete(fed.id);
  };

  return (
    <div className="feed" key={fed.id}>
      <div className="top-content">
        <Link to="/profile/id">
          <div className="user">
            <img src={fed.feedProfile} alt="" />
            <div>
              <h5>{fed.name}</h5>
              <small>1 minute ago</small>
            </div>
          </div>
        </Link>
        <span>
          <FontAwesomeIcon icon={faListDots} />
        </span>
      </div>
      <div className="mid-content">
        <p>{fed.desc}</p>
        {fed.media && fed.media.type === "image" && (
          <img src={fed.media.src} alt="Post content" />
        )}
        {fed.media && fed.media.type === "video" && (
          <video controls>
            <source src={fed.media.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      <div className="bottom-content">
        <div className="action-item" onClick={likeHandler}>
          <span className={isLiked ? "liked" : ""}>
            <FontAwesomeIcon icon={faHeart} />
          </span>
          {likes} Likes
        </div>
        <div className="action-item" onClick={commentHandler}>
          <span>
            <FontAwesomeIcon icon={faComment} /> Comments
          </span>
        </div>
        <div className="action-item">
          <span>
            <FontAwesomeIcon icon={faShare} /> 9 shares
          </span>
        </div>
        <div className="action-item delete-item" onClick={deleteHandler}>
          <FontAwesomeIcon icon={faTrashAlt} /> Delete
        </div>
      </div>
      {openComment && <Comments postId={fed.id} />}
    </div>
  );
}
