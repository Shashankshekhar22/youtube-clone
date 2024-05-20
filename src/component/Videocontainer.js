import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../constant/constant";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setVideoDetails } from "../utils/videoSlice";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const apiData = await fetch(YOUTUBE_VIDEOS_API);
    const jsonData = await apiData.json();
    setVideos(jsonData.items);
    dispatch(setVideoDetails(jsonData.items));
  };
  return (
    <div id="video-container" className="flex flex-wrap">
      {videos[0] && <AdVideoCard info={videos[0]} />}
      {videos.map((video) => {
        return (
          <Link to={"/watch?v=" + video.id} key={video.id}>
            <VideoCard info={video} id={video.id} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
