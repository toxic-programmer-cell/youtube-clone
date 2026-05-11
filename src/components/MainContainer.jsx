import React from 'react'
import FilterContainer from './FilterContainer'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className="flex flex-1 min-h-0 min-w-0 flex-col overflow-hidden">
        <div className="shrink-0">
          <FilterContainer />
        </div>
        <VideoContainer />
    </div>
  )
}

export default MainContainer