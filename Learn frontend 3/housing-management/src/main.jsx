import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import TenantDashboard from './pages/TenantDashboard'
// import LandlordDashboard from './pages/LandlordDashboard'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <h1>Housing Management</h1> */}
    {/* <BrowserRouter>
      <Routes>
        <Route path="/tenant" element={<TenantDashboard />} />
        <Route path="/landlord" element={<LandlordDashboard />} />
      </Routes>
    </BrowserRouter> */}
    <App />
  </StrictMode>,
)