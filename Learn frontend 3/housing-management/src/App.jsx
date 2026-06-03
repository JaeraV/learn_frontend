import { useState } from 'react'
import {Route, createBrowserRouter,createRoutesFromElements, RouterProvider} from 'react-router-dom'
import TenantDashboard from './pages/TenantDashboard'
import LandlordDashboard from './pages/LandlordDashboard'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LandlordDashboard />}>
      <Route path="/tenant" element={<TenantDashboard />} />
      <Route index element={<LandlordDashboard />} />
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App
