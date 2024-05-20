import React from "react";
import { commentsData } from "../constant/mockComments";
import { IconContext } from "react-icons";
import { RiAccountBoxFill } from "react-icons/ri";

const mockCommentsData = commentsData;

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex flex-row shadow-lg bg-gray-50 p-2 align-middle">
      <IconContext.Provider value={{ className: "global-comment-section" }}>
        <RiAccountBoxFill />
      </IconContext.Provider>
      <div className=" m-2 px-1 ">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = (comments) => {
  return comments.data.map((comment, index) => {
    return (
      <div key={index}>
        <Comment data={comment} />
        <div className="pl-8 border-2 border-l-black ml-5 ">
          <CommentList data={comment.replies} />
        </div>
      </div>
    );
  });
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments</h1>
      <div>
        <CommentList data={mockCommentsData} />
      </div>
    </div>
  );
};

export default CommentsContainer;
