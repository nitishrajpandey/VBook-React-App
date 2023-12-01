// import React from 'react'

import { useContext, useRef } from "react";
import { PostContainerContext } from "../Store/Post-container-store";

function CreatePost() {
  const { addPost } = useContext(PostContainerContext);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const PostContentElement = useRef();
  const noOfReactionElement = useRef();
  const hashTagsElement = useRef();

  const handelSubmitButton = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postContent = PostContentElement.current.value;
    const noOfReaction = noOfReactionElement.current.value;
    const hashTags = hashTagsElement.current.value.split(" ");
    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    PostContentElement.current.value = "";
    noOfReactionElement.current.value = "";
    hashTagsElement.current.value = "";
    addPost(userId, postTitle, postContent, noOfReaction, hashTags);
  };

  return (
    <>
      <form className=" max-w-lg mx-auto" onSubmit={handelSubmitButton}>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="userid" className="w-full">
            Enter your user Id here
          </label>
          <input
            type="text"
            id="userid"
            required
            placeholder="Your UserId here.."
            className="border border-[#b8b6b6] shadow w-full px-3 py-1 rounded-md outline-none"
            ref={userIdElement}
          />
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="postTitle" className="w-full">
            Post Title
          </label>
          <input
            type="text"
            id="postTitle"
            required
            placeholder="How are your feeling today.."
            className="border border-[#b8b6b6] shadow w-full px-3 py-1 rounded-md outline-none"
            ref={postTitleElement}
          />
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="postContent" className="w-full">
            Post Content
          </label>
          <textarea
            id="postContent"
            rows="3"
            required
            placeholder="Tell us more about it.."
            className="border border-[#b8b6b6] shadow w-full p-3 rounded-md outline-none resize-none"
            ref={PostContentElement}
          ></textarea>
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="numberOfReaction" className="w-full">
            Number Of Reaction
          </label>
          <input
            type="number"
            id="numberOfReaction"
            required
            placeholder="How many people reacted to this post"
            className="w-full border border-[#b8b6b6] shadow hideNumberInputScroll px-3 py-1 rounded-md outline-none"
            ref={noOfReactionElement}
          />
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="hashTags" className="w-full">
            Enter your Hashtags here
          </label>
          <input
            type="text"
            id="hashTags"
            required
            placeholder="Please enter tags using space"
            className="border border-[#b8b6b6] shadow w-full px-3 py-1 rounded-md outline-none"
            ref={hashTagsElement}
          />
        </div>
        <div>
          <button className="px-5 py-2 bg-[#62A799] rounded-xl text-white font-semibold">
            Post
          </button>
        </div>
      </form>
    </>
  );
}

export default CreatePost;
