import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const { likeCount, viewCount } = statistics;
  const numberformat = new Intl.NumberFormat();

  return (
    <div id="video-card" className="p-2 m-2 w-80 mt-5 shadow-lg rounded-2xl ">
      <img src={thumbnails.medium.url} alt={title} className="rounded-lg" />
      <ul className="z-50">
        <li className="font-bold py-2 ">{title}</li>
        <li>{channelTitle}</li>
        <li>{numberformat.format(viewCount)} Views</li>
        <li>{numberformat.format(likeCount)} Likes</li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="border-2 border-dotted border-red-500">
      <h1>This is a Higher order component example</h1>
      <VideoCard info={info} />;
    </div>
  );
};
export default VideoCard;
