import React, { useState } from "react";
import "./chatbox.css";
import CurrentUserData from "../../FackeApis/CurrentUserData";

// compo
import Stories from "../../Components/stories/Stories";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function Chatbox() {
  const [message, setMessage] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setPopupVisible(true);
      setTimeout(() => setPopupVisible(false), 3000); // Hide popup after 3 seconds
    }
    setMessage("");
  };

  return (
    <>
      <Stories />
      <div className="chat-box">
        <div className="chat-box-top">
          <img src={CurrentUserData[0].ProfieImage} alt="" />
          <div className="user-name">
            <h3>{CurrentUserData[0].name}</h3>
            <h5>{CurrentUserData[0].username}</h5>
          </div>
        </div>
        <div className="chat-box-bottom">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Write Something"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">
              <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </button>
            <label className="btn btn-primary" htmlFor="CFile">
              <FontAwesomeIcon icon={faFileAlt} />
              <input type="file" id="CFile" />
            </label>
          </form>
        </div>
        {popupVisible && (
          <div className="popup">
            <p>ADMIN! Kamalesh will call you</p>
          </div>
        )}
      </div>
    </>
  );
}
