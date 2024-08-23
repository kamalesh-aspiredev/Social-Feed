import React from "react";
import "./friendreq.css";

// Fack Api
import FriendReqData from "../../FackeApis/FriendReqData";
import { Link } from "react-router-dom";
export default function FriendReq() {
  return (
    <div className="Friend-Requests">
      <h4>Friend Requests</h4>
      {FriendReqData.map((frnd) => (
        <div className="request">
          <Link to="/profile/id">
            <div className="info" key={frnd.id}>
              <div className="user">
                <img src={frnd.img} alt="" className="" />
                <h5>{frnd.name}</h5>
              </div>
              <div className="info-name">
                <p>{frnd.info}</p>
              </div>
            </div>
          </Link>
          <div className="action">
            <button className="btn btn-primary">Accept</button>
            <button className="btn btn-red">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
