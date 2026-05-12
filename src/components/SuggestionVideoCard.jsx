import React from "react";

const SuggestionVideoCard = ({ videos }) => {
  console.log(videos);
  return (
    <div className="my-2 flex items-start gap-3">
      <div className="relative aspect-video w-[200px] shrink-0 overflow-hidden rounded-lg bg-gray-200 ring-1 ring-black/5">
        <img
          className="h-full w-full object-cover"
          src={videos?.thumbnail?.static}
          alt=""
        />
      </div>
      <div className="min-w-0 flex-1 py-0.5 pr-1">
        <p className="line-clamp-2 font-semibold text-base leading-snug text-gray-900">
          {videos?.title}
        </p>
        <p className="mt-1 truncate text-sm text-gray-500">{videos?.channel?.name}</p>
        <p className="mt-0.5 truncate text-sm text-gray-500">{videos.views}</p>
        <p className="mt-0.5 truncate text-sm text-gray-500">{videos.published_date}</p>
      </div>
    </div>
  );
};

export default SuggestionVideoCard;
