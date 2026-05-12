import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../redux/features/toggleMenuSlice";
import { useSearchParams } from "react-router-dom";
import FilterContainer from "../components/FilterContainer";
import WatchVideoDetail from "../components/WatchVideoDetail";
import SuggestionVideoCard from "../components/SuggestionVideoCard";

const WatchVideo = () => {
  const dispatch = useDispatch();
  const videos = useSelector((store) => store.videos.videos);

  const [searchParams] = useSearchParams();
  let id = searchParams.get("v");

  let playVideo = videos.find((video) => String(video.video_id) == String(id));

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className="mx-auto flex min-h-0 flex-1 w-full min-w-0 max-w-full flex-col gap-4 overflow-y-auto px-3 py-2 sm:px-4 lg:mx-6 lg:flex-row lg:items-start lg:gap-6 lg:px-6">
      <div className="min-w-0 w-full flex-1">
        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black">
          <iframe
            className="absolute inset-0 h-full w-full rounded-lg"
            src={"https://www.youtube.com/embed/" + id}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        
        <WatchVideoDetail playVideo={playVideo} />
      </div>
      <div className="flex w-full min-w-0 shrink-0 flex-col overflow-hidden lg:w-80 xl:w-96">
        <div className="shrink-0">
          <FilterContainer />
        </div>
        {videos && (
          <div>
            {videos.map((video) => (
              <SuggestionVideoCard videos={video} key={video.id} />
            ))}
          </div>
        )}
        
      </div>
    </div>
  );
};

export default WatchVideo;
