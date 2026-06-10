import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const MainLayout = ({ user, onLogout }) => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar user={user} onLogout={onLogout} />
      <main style={{ marginLeft: '220px', padding: '2rem', flex: 1 }}>
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout