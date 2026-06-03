import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()

  const navLinks = [
    { to: '/', label: 'Landlord Dashboard' },
    { to: '/tenant', label: 'Tenant Dashboard' },
  ]

  return (
    <aside style={{backgroundColor: 'darkblue', width: '256px', height: '100vh', display: 'flex', flexDirection: 'column'}}>
      {/* Logo */}
      <div className="px-4 py-6 border-b border-indigo-500">
        <Link className="flex items-center gap-3" to="/">
          <span className="text-white text-xl font-bold">Housing Management</span>
        </Link>
      </div>

      {/* Nav Links */}
      <nav className="flex flex-col gap-1 px-3 py-4">
        {navLinks.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className={`text-white rounded-md px-3 py-2 transition-colors ${
              location.pathname === to ? 'bg-black' : 'hover:bg-gray-900'
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}

export default Navbar