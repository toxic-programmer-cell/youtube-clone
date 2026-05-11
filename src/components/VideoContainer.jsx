import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEO_API } from "../utils/contents";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    console.log(json.related_videos);
    setVideos(json.related_videos);
  };
  return (
    <div className="flex-1 min-h-0 overflow-y-auto">
      <div className="grid grid-cols-1 gap-x-4 gap-y-8 px-4 py-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {videos?.map((v) => (
          <Link key={v?.video_id || v?.title} to={`/watch?=${v.video_id}`}>
          <VideoCard  info={v} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoContainer;
