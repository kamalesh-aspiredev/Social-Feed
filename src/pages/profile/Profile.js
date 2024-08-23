import React from "react";
import "./profile.css";
import AddPost from "../../Components/addpost/AddPost";
import UserProfile from "../../Components/userprofile/UserProfile";
import Feeds from "../../Components/feeds/Feeds";
export default function Profile() {
  return (
    <>
      <UserProfile />
      <AddPost />
      <Feeds />
    </>
  );
}
