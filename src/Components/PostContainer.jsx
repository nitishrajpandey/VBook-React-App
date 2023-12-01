// import React from 'react'

import { useContext } from "react";
import Post from "./Post";
import { PostContainerContext } from "../Store/Post-container-store";
function PostContainer() {
  const { postContainer } = useContext(PostContainerContext);
  return (
    <>
      {postContainer.map((postItem) => (
        <Post key={postItem.id} postItem={postItem} />
      ))}
    </>
  );
}

export default PostContainer;
