import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className="flex flex-1 min-h-0 w-full min-w-0 overflow-hidden">
        <Sidebar />
        <Outlet />
    </div>
  )
}

export default Body