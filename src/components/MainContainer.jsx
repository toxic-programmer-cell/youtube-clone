import React, { useEffect } from 'react'
import FilterContainer from './FilterContainer'
import VideoContainer from './VideoContainer'
import { useDispatch } from 'react-redux'
import { openMenu } from '../redux/features/toggleMenuSlice'

const MainContainer = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(openMenu())
  },[])
  
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