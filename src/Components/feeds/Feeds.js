import React from "react";
import "./feeds.css";

// Fake api
import HomeFeedData from "../../FackeApis/HomeFeedData";
// comp
import Feed from "./Feed";
export default function Feeds() {
  return (
    <div className="feeds">
      {HomeFeedData.map((fed) => (
        <Feed fed={fed} key={fed.key} />
      ))}
    </div>
  );
}
