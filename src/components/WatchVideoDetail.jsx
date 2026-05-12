import React from "react";
import { HiOutlineThumbUp, HiOutlineThumbDown } from "react-icons/hi";
import { IoShareOutline } from "react-icons/io5";

const WatchVideoDetail = ({ playVideo }) => {
  return (
    <div className="mt-1 text-left">
      {playVideo ? (
        <>
          <h1 className="mt-4 text-lg font-semibold leading-snug text-neutral-900 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] sm:text-2xl sm:leading-tight">
            {playVideo.title}
          </h1>

          <div className="mt-4 flex flex-col gap-3 border-b border-neutral-200 pb-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <div className="flex min-w-0 flex-1 items-center gap-3">
                {playVideo.channel?.thumbnail ? (
                  <img
                    className="h-10 w-10 shrink-0 rounded-full object-cover ring-1 ring-neutral-200 sm:h-11 sm:w-11"
                    src={playVideo.channel.thumbnail}
                    alt={playVideo.channel?.name ?? "Channel"}
                  />
                ) : (
                  <div
                    className="h-10 w-10 shrink-0 rounded-full bg-neutral-200 sm:h-11 sm:w-11"
                    aria-hidden
                  />
                )}
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[15px] font-semibold text-neutral-900">
                    {playVideo.channel?.name ?? "Channel"}
                  </p>
                  <p className="mt-0.5 text-sm text-neutral-600">
                    {playVideo.views}
                    {playVideo.published_date ? (
                      <span className="text-neutral-400">
                        {" · "}
                        {playVideo.published_date}
                      </span>
                    ) : null}
                  </p>
                </div>
                <button
                  type="button"
                  className="hidden shrink-0 rounded-full bg-neutral-900 px-5 py-2 text-sm font-semibold text-white hover:bg-neutral-800 sm:inline-flex"
                >
                  Subscribe
                </button>
              </div>

              <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto sm:justify-end">
                <div className="inline-flex rounded-full border border-neutral-200 bg-neutral-50 p-0.5 shadow-sm">
                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-neutral-800 hover:bg-white"
                    aria-label="Like"
                  >
                    <HiOutlineThumbUp className="h-[18px] w-[18px]" />
                    <span className="hidden sm:inline">Like</span>
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center rounded-full px-2 py-2 text-neutral-600 hover:bg-white"
                    aria-label="Dislike"
                  >
                    <HiOutlineThumbDown className="h-[18px] w-[18px]" />
                  </button>
                </div>
                <button
                  type="button"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm font-medium text-neutral-800 shadow-sm hover:bg-neutral-100 sm:flex-initial"
                >
                  <IoShareOutline className="h-[18px] w-[18px]" />
                  Share
                </button>
              </div>
            </div>

            <button
              type="button"
              className="w-full rounded-full bg-neutral-900 py-2.5 text-sm font-semibold text-white hover:bg-neutral-800 sm:hidden"
            >
              Subscribe
            </button>
          </div>
        </>
      ) : (
        <div className="mt-4 space-y-4 border-b border-neutral-200 pb-4">
          <div className="h-8 w-full max-w-3xl animate-pulse rounded-lg bg-neutral-200" />
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 shrink-0 animate-pulse rounded-full bg-neutral-200" />
            <div className="flex-1 space-y-2">
              <div className="h-4 w-40 max-w-full animate-pulse rounded bg-neutral-200" />
              <div className="h-3 w-28 animate-pulse rounded bg-neutral-200" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WatchVideoDetail;
