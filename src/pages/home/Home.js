import React from "react";
import Stories from "../../Components/stories/Stories";
import AddPost from "../../Components/addpost/AddPost";

import Feeds from "../../Components/feeds/Feeds";

export default function Home() {
  return (
    <>
      <Stories />
      <AddPost />
      <Feeds />
    </>
  );
}
