import {Route, createBrowserRouter,createRoutesFromElements, RouterProvider, Outlet} from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import TenantDashboard from './pages/TenantDashboard'
import LandlordDashboard from './pages/LandlordDashboard'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route path="/" element={<LandlordDashboard />} />
      <Route path="/tenant" element={<TenantDashboard />} />
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
