import React from "react";
import { IconContext } from "react-icons";
import { RiAccountBoxFill } from "react-icons/ri";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <IconContext.Provider value={{ className: "global-comment-section" }}>
        <RiAccountBoxFill />
      </IconContext.Provider>
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
