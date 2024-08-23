import React from "react";
import "./message.css";

// fake api:
import MessageData from "../../FackeApis/MessageData";

// font icon:
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Message() {
  return (
    <div className="Message">
      <div className="message-top">
        <h4>Message</h4>
        <FontAwesomeIcon icon={faEdit} />
      </div>
      <div className="message-search">
        <FontAwesomeIcon icon={faSearch} />
        <input type="search" placeholder="Search Message" />
      </div>
      <div className="border-div"></div>
      {MessageData.map((msg) => (
        <Link to="/chatbox/id">
          <div className="message" key={msg.id}>
            <div className="user">
              <img src={msg.img} alt="" />
              <div className="green-active"></div>
            </div>
            <div className="message-body">
              <h5>{msg.name}</h5>
              <p>{msg.mText}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
