import React from "react";

const VideoCard = ({ info }) => {
  if (!info) return null;

  const { thumbnail, channel, views, title, video_id, published_date, length } =
    info ?? {};

  const thumbnailUrl =
    thumbnail?.static || thumbnail?.rich || thumbnail?.image || thumbnail?.url;

  const channelThumb = channel?.thumbnail;
  const channelName = channel?.name;

  return (
    <div className="group block w-full max-w-[360px] cursor-pointer">
      {/* Thumbnail */}
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
        {thumbnailUrl ? (
          <img
            className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-[1.02]"
            src={thumbnailUrl}
            alt={title || video_id || "video thumbnail"}
            loading="lazy"
          />
        ) : null}

        {length ? (
          <span className="absolute bottom-2 right-2 rounded bg-black/80 px-1.5 py-0.5 text-xs font-medium text-white">
            {length}
          </span>
        ) : null}
      </div>

      {/* Meta */}
      <div className="mt-3 flex gap-3">
        <div className="shrink-0">
          {channelThumb ? (
            <img
              className="h-9 w-9 rounded-full object-cover"
              src={channelThumb}
              alt={channelName || "channel"}
              loading="lazy"
            />
          ) : (
            <div className="h-9 w-9 rounded-full bg-gray-300" />
          )}
        </div>

        <div className="min-w-0 text-left">
          <h3 className="overflow-hidden text-[15px] font-medium leading-5 text-gray-900 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
            {title}
          </h3>

          <p className="mt-1 truncate text-sm text-gray-600">{channelName}</p>

          <p className="mt-0.5 text-sm text-gray-600">
            <span>{views}</span>
            {published_date ? <span className="mx-1">•</span> : null}
            <span>{published_date}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
