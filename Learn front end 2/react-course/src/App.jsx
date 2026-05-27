import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route index element={<HomePage />} /> //creates a route from a path for the element specified
  )
);

const App = () => {
  return (
   <RouterProvider router={router} />
  )
}

export default App