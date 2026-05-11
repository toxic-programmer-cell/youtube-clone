import React, { useRef } from "react";
import FilterButton from "./FilterButton";

const FilterContainer = () => {
  const scrollerRef = useRef(null);

  const scrollByAmount = (amount) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="flex w-full min-w-0 items-center gap-2">
      <button
        type="button"
        onClick={() => scrollByAmount(-240)}
        className="shrink-0 rounded-full cursor-pointer border border-gray-300 bg-white px-2 py-1 text-sm hover:bg-gray-50"
        aria-label="Scroll left"
      >
        &#x2190;
      </button>

      <div
        ref={scrollerRef}
        className="w-full min-w-0 overflow-x-auto scrollbar-visible"
      >
        <div className="flex w-max whitespace-nowrap">
          {[
            "All",
            "Sport",
            "Music",
            "TMKOC",
            "Football",
            "currier247",
            "Namaste Dev",
            "gaming",
            "Dodo",
            "Sharyense Coding",
            "StudyIq",
            "Code with herry",
            "Coding ninza",
            "Codex",
            "Chai and code"
          ].map((name, idx) => (
            <div key={`${name}-${idx}`} className="shrink-0">
              <FilterButton name={name} />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => scrollByAmount(240)}
        className="shrink-0 rounded-full cursor-pointer border border-gray-300 bg-white px-2 py-1 text-sm hover:bg-gray-50"
        aria-label="Scroll right"
      >
        &#8594;
      </button>
    </div>
  );
};

export default FilterContainer;
