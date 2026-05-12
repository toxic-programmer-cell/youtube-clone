import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import useVideoData from '../utils/useVideoData'

const Body = () => {
  useVideoData();
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <Header />
    <div className="flex flex-1 min-h-0 w-full min-w-0 overflow-hidden">
        <Sidebar />
        <Outlet />
    </div>
    </div>
  )
}

export default Body