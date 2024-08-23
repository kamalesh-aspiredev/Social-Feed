import React from "react";
import "./rightbar.css";
//compo
import Message from "../messages/Message";
import FriendReq from "../friendreq/FriendReq";

export default function RightBar() {
  return (
    <div className="rightBar">
      <div className="rightbar-container">
        <Message />
        <FriendReq />
      </div>
    </div>
  );
}
