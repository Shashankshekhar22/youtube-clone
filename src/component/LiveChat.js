import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const interval = setInterval(() => {
      getLiveChatData();
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20) + " 🚀",
        })
      );
    }, 2000);
    return () => interval;
  }, []);

  const getLiveChatData = () => {};

  return (
    <div>
      <div className="ml-2 p-2 h-[37rem] border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((chatMessage, index) => (
            <ChatMessage
              name={chatMessage.name}
              message={chatMessage.message}
              key={index}
            />
          ))}
        </div>

        {/* <ChatMessage name="Shashank" message="This is a chat window" /> */}
      </div>
      <div className="p-2 ml-2  ">
        <form
          className="p-2 ml-2"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addMessage({
                name: "Shashank",
                message: liveMessage,
              })
            );
            setLiveMessage("");
          }}
        >
          <input
            type="text"
            className="w-[34rem] h-10 text-gray-900 ring-1 ring-inset ring-gray-700 
          border-0 py-1.5 pl-7 pr-20 rounded-full focus:ring-2 focus:ring-inset
          placeholder:text-gray-400 align-middle placeholder:text-xl focus:ring-blue-200"
            value={liveMessage}
            onChange={(e) => setLiveMessage(e.target.value)}
          ></input>
          <button
            className="h-10 align-middle rounded-md border-0  mx-1 py-0 pl-2 pr-3 font-bold
         focus:ring-2 focus:ring-inset  focus:ring-black sm:text-sm bg-green-200"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default LiveChat;
