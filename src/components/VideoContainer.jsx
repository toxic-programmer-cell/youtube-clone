import React from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import useVideoData from "../utils/useVideoData";
import { useSelector } from "react-redux";

const VideoContainer = () => {

  const videos = useSelector((state) => state.videos.videos);

  return (
    <div className="flex-1 min-h-0 overflow-y-auto">
      <div className="grid grid-cols-1 gap-x-4 gap-y-8 px-4 py-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {videos?.map((v) => (
          <Link key={v?.video_id || v?.title} to={`/watch?v=${v.video_id}`}>
          <VideoCard  info={v} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoContainer;
