import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { BiDislike } from "react-icons/bi";
import { BiLike } from "react-icons/bi";
import { PiShareFat } from "react-icons/pi";
import { CiSaveDown1 } from "react-icons/ci";
import { TfiDownload } from "react-icons/tfi";
import { IconContext } from "react-icons";
import CommentsContainer from "./CommentsContainer";

const Watchpage = () => {
  const dispatch = useDispatch();
  const videoDetails = useSelector((store) => store.videoDetails.videoList);
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  useEffect(() => {
    closeSidePanel();
  }, []);
  const closeSidePanel = () => dispatch(closeMenu());

  const currentVideoDetails = videoDetails.find(
    (videoDetail) => videoDetail.id === videoId
  );
  if (!currentVideoDetails) {
    return null;
  }
  const { snippet, statistics } = currentVideoDetails;
  const { title, channelTitle, description } = snippet;
  const { commentCount, likeCount, viewCount } = statistics;
  const numberformat = new Intl.NumberFormat();

  return (
    <div className="px-5">
      <div id="Video-container">
        <iframe
          width="1200"
          height="600"
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div id="video-details">
        <h1 className="font-bold my-4 text-xl"> {title}</h1>
        <div className="flex  flex-row align-middle ">
          <h3 className="font-bold text-lg mx-3">{channelTitle}</h3>
          <button className="mx-3 px-3 bg-black text-white  rounded-full p-2 text-sm">
            Subscribe
          </button>
          <div className="ml-auto mr-0 justify-around">
            <button className="bg-gray-300 rounded-full mx-4 px-3">
              <IconContext.Provider
                value={{ className: "btn-icon-watch-list" }}
              >
                <BiLike />
                {numberformat.format(Math.round(likeCount / 100))}K
                <BiDislike />
              </IconContext.Provider>
            </button>
            <button className="bg-gray-300 rounded-full mx-4 px-3">
              <IconContext.Provider
                value={{ className: "btn-icon-watch-list" }}
              >
                <PiShareFat />
                Share
              </IconContext.Provider>
            </button>
            <button className="bg-gray-300 rounded-full mx-4 px-3">
              <IconContext.Provider
                value={{ className: "btn-icon-watch-list" }}
              >
                <TfiDownload /> Download
              </IconContext.Provider>
            </button>
            <button className="bg-gray-300 rounded-full mx-4 px-3">
              <IconContext.Provider
                value={{ className: "btn-icon-watch-list" }}
              >
                <CiSaveDown1 />
                Save
              </IconContext.Provider>
            </button>
          </div>
        </div>
      </div>
      <div
        id="description-section"
        className="my-5 bg-gray-300 rounded-xl px-5 h-40 overflow-hidden whitespace-nowrap"
      >
        <h2 className="font-bold py-4">
          {numberformat.format(viewCount)} views
        </h2>
        <h3 className="mt-8 w-3/4  text-ellipsis  ">{description}</h3>
      </div>
      <div className="m-2 p-2">
        <h1 className="text-2xl font-bold">
          {numberformat.format(commentCount)} Comments
        </h1>
        <CommentsContainer />
      </div>
    </div>
  );
};

export default Watchpage;
