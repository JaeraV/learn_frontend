import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside style={{
      width: '220px',
      backgroundColor: '#4338ca',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      position: 'fixed',
      top: 0,
      left: 0,
    }}>
      <div style={{ padding: '24px 16px', borderBottom: '1px solid #6366f1', fontWeight: 'bold', fontSize: '18px' }}>
        Housing Management
      </div>

      <nav style={{ display: 'flex', flexDirection: 'column', padding: '12px' }}>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: 'white',
            textDecoration: 'none',
            padding: '8px 12px',
            borderRadius: '6px',
            marginBottom: '4px',
            backgroundColor: isActive ? 'rgba(0,0,0,0.3)' : 'transparent',
          })}
        >
          Landlord Dashboard
        </NavLink>

        <NavLink
          to="/tenant"
          style={({ isActive }) => ({
            color: 'white',
            textDecoration: 'none',
            padding: '8px 12px',
            borderRadius: '6px',
            marginBottom: '4px',
            backgroundColor: isActive ? 'rgba(0,0,0,0.3)' : 'transparent',
          })}
        >
          Tenant Dashboard
        </NavLink>
      </nav>
    </aside>
  )
}

export default Sidebar