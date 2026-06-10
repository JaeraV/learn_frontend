import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const MainLayout = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <main style={{ marginLeft: '220px', padding: '2rem', flex: 1 }}>
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout