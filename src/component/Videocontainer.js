import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../constant/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const apiData = await fetch(YOUTUBE_VIDEOS_API);
    const jsonData = await apiData.json();
    setVideos(jsonData.items);
  };
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => {
        return (
          <Link to={"/watch?v=" + video.id}>
            <VideoCard info={video} id={video.id} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
