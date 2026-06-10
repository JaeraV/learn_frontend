import React from 'react'
import OverduePayments from '../components/landlord/OverduePayments'
import TenantTable from '../components/landlord/TenantTable'

const LandlordDashboard = () => {
  const tenants = [
    { id: 1, name: "John Doe", room: "Room 101", rent: 500, status: "Paid" },
    { id: 2, name: "Jane Smith", room: "Room 202", rent: 450, status: "Overdue" },
    { id: 3, name: "Bob Johnson", room: "Room 303", rent: 600, status: "Paid" },
  ]

  const rooms = [
    { id: 1, name: "Room 101", status: "Occupied", tenant: "John Doe", rent: 500 },
    { id: 2, name: "Room 202", status: "Occupied", tenant: "Jane Smith", rent: 450 },
    { id: 3, name: "Room 203", status: "Vacant", tenant: null, rent: 450 },
    { id: 4, name: "Room 303", status: "Occupied", tenant: "Bob Johnson", rent: 600 },
    { id: 5, name: "Room 305", status: "Vacant", tenant: null, rent: 600 },
  ]

  const overdueTenants = tenants.filter((tenant) => tenant.status === "Overdue")

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "800px", margin: "0 auto", marginLeft: "240px" }}>
      <h1>Landlord Dashboard</h1>

      {/* Overdue Payments */}
      <OverduePayments overdueTenants={overdueTenants} />

      {/* Tenant List */}
      <TenantTable tenants={tenants} />

      {/* Room Overview */}
      <section style={{ marginTop: "2rem" }}>
        <h2>Room Overview</h2>
        {rooms.map((room) => (
          <div key={room.id} style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "1rem",
            marginBottom: "1rem",
            background: room.status === "Vacant" ? "#e8f5e9" : "#fff"
          }}>
            <h3>{room.name} — <span style={{ color: room.status === "Vacant" ? "green" : "#333" }}>{room.status}</span></h3>
            <p>Monthly Rent: <strong>${room.rent}</strong></p>
            {room.tenant ? (
              <p>Tenant: <strong>{room.tenant}</strong></p>
            ) : (
              <p style={{ color: "green" }}>Available for occupancy</p>
            )}
          </div>
        ))}
      </section>
    </div>
  )
}

export default LandlordDashboard