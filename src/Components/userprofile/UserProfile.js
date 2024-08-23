import React from "react";
import "./userprofile.css";

// components :
import CurrentUserData from "../../FackeApis/CurrentUserData";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeed, faLink, faMessage } from "@fortawesome/free-solid-svg-icons";
export default function UserProfile() {
  return (
    <div className="userProfile">
      <div className="cover-photos">
        <img src={CurrentUserData.map((user) => user.CoverPhoto)} alt="" />
      </div>
      <div className="profile-info">
        <img src={CurrentUserData.map((user) => user.ProfieImage)} alt="" />
        <div className="user-name">
          <h3>{CurrentUserData.map((user) => user.name)}</h3>
          <h5>{CurrentUserData.map((user) => user.username)}</h5>
        </div>
        <div className="profile-button">
          <Link to="/chatbox/id">
            <button className="btn btn-primary">
              <FontAwesomeIcon icon={faMessage} />
            </button>
            <button className="btn btn-primary">
              <FontAwesomeIcon icon={faFeed} />
              Follow Me
            </button>
            <button className="btn ">
              <FontAwesomeIcon icon={faLink} />
            </button>
          </Link>
        </div>
        <p className="bio">
          This is Website Which helps to creata a Nvaigate you fetch yiur ideas
        </p>
      </div>
    </div>
  );
}
