/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { DEFAULT_VALUE } from "../ConstantData";

// create the context api
export const PostContainerContext = createContext({
  postContainer: [],
  addPost: () => {},
  deletePost: () => {},
});

// make a pure reducer function

const postContainerReducer = (currPostContainer, action) => {
  let newPostContainer = currPostContainer;

  if (action.type === "DELETE_POST") {
    newPostContainer = currPostContainer.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_NEW_POST") {
    newPostContainer = [action.payload, ...currPostContainer];
  }

  return newPostContainer;
};

// a container that cover app all component
const Postcontainerprovider = ({ children }) => {
  const [postContainer, dispatchPostContainer] = useReducer(
    postContainerReducer,
    DEFAULT_VALUE
  );

  // all method define

  const addPost = (userId, postTitle, postContent, noOfReaction, hashTags) => {
    dispatchPostContainer({
      type: "ADD_NEW_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postContent,
        reaction: noOfReaction,
        userId: userId,
        tags: hashTags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostContainer({
      type: "DELETE_POST",
      payload: {
        postId: postId,
      },
    });
  };

  return (
    <PostContainerContext.Provider
      value={{
        postContainer: postContainer,
        addPost: addPost,
        deletePost: deletePost,
      }}
    >
      {children}
    </PostContainerContext.Provider>
  );
};
export default Postcontainerprovider;
