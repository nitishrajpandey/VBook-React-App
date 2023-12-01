// import React from 'react'
import { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { PostContainerContext } from "../Store/Post-container-store";
function Post({ postItem }) {
  const { deletePost } = useContext(PostContainerContext);

  return (
    <>
      <div className="border border-black max-w-[500px] p-3 mb-5 rounded-lg relative ">
        <span
          className=" absolute right-[-20px] z-10 top-[-5px]  px-3 py-1  bg-[#661d1d] rounded-2xl text-white font-semibold active:scale-95 duration-300 ease-in-out"
          onClick={() => deletePost(postItem.id)}
        >
          <MdDeleteForever />
        </span>
        <h1 className="text-center font-semibold  py-2 text-xl ">
          {postItem.title}
        </h1>
        <p className=" leading-6">{postItem.body}</p>
        <div className="flex flex-wrap gap-2 my-3">
          {postItem.tags.map((tag, index) => (
            <span
              className=" py-1 px-3 rounded-2xl bg-[#62A799] text-white   "
              key={index}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="rounded-lg py-2 px-3 bg-green-100">
          <span>
            This post has been reacted by {postItem.reaction} peoples.
          </span>
        </div>
      </div>
    </>
  );
}

export default Post;
