import React from 'react'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import { Provider } from 'react-redux'
import store from './redux/store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainContainer from './components/MainContainer'
import WatchVideo from './pages/WatchVideo'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />
      },
      {
        path: 'watch',
        element:<WatchVideo />
      }
    ]
  },
])

const App = () => {
  /**
   * Header
   * Body
   *  Sidebar
   *  MainContainer
   *    FilterContainer
   *      FilterButton
   *    VideoContainer
   *      VideoCard
   */
  return (
    <Provider store={store}>
    <div className="h-screen overflow-hidden flex flex-col">
      <Header />
      <RouterProvider router={appRouter} />
    </div>
    </Provider>
  )
}

export default App