import { useState } from 'react'
import {Route, createBrowserRouter,createRoutesFromElements, RouterProvider, Navigate} from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import TenantDashboard from './pages/TenantDashboard'
import LandlordDashboard from './pages/LandlordDashboard'
import Login from './pages/Login'
import { login } from './services/authService'

const App = () => {
  const [user, setUser] = useState(null)
  const [error, setError] = useState('')

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUser(null)
  }

  const handleLogin = async (credentials) => {
    try {
      const { token, user } = await login(credentials)
      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(user))
      setUser(user)
      setError('')
    } catch (err) {
      setError(err.message)
    }
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/login" element={
          user ? <Navigate to={user.role === 'landlord' ? '/' : '/tenant'} /> : <Login onLogin={handleLogin} error={error} />
        } />
        <Route element={user ? <MainLayout user={user} onLogout={handleLogout} /> : <Navigate to="/login" />}>
          <Route path="/" element={user?.role === 'landlord' ? <LandlordDashboard /> : <Navigate to="/tenant" />} />
          <Route path="/tenant" element={user?.role === 'tenant' ? <TenantDashboard /> : <Navigate to="/" />} />
        </Route>
      </>
    )
  )

  return <RouterProvider router={router} />
}

export default App
