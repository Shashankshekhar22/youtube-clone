import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const { likeCount, viewCount } = statistics;

  return (
    <div className="p-2 m-2 w-80 mt-5 shadow-lg rounded-2xl ">
      <img src={thumbnails.medium.url} alt={title} className="rounded-lg" />
      <ul className="z-50">
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{viewCount} Views</li>
        <li>{likeCount} Likes</li>
      </ul>
    </div>
  );
};

export default VideoCard;
