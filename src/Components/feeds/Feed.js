import React, { useState } from "react";
import "./feeds.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faHeart,
  faListDots,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
//component
import Comments from "../comments/Comments";
// ----------
export default function Feed({ fed }) {
  let [openComment, setOpenComment] = useState(false);
  const [likes, setLikes] = useState(fed.likes);
  const [isLiked, setIsLiked] = useState(false);
  const commentHandler = () => {
    setOpenComment(!openComment);
  };
  // for like
  const likeHandler = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };
  return (
    <div className="feed" key={fed.id}>
      <div className="top-content">
        <Link to="/profile/id">
          <div className="user">
            <img src={fed.feedProfile} alt="" />
            <div>
              {" "}
              <h5>{fed.name}</h5>
              <small>1 minutes</small>
            </div>
          </div>
        </Link>
        <span>
          <FontAwesomeIcon icon={faListDots} />
        </span>
      </div>
      <div className="mid-content">
        <p>{fed.desc}</p>
        <img src={fed.feedImage} alt="" />
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
            <FontAwesomeIcon icon={faShare} />9 shares
          </span>
        </div>
      </div>
      {openComment && <Comments />}
    </div>
  );
}
