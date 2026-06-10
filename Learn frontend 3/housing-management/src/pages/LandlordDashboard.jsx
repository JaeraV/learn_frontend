import OverduePayments from '../components/landlord/OverduePayments'
import TenantTable from '../components/landlord/TenantTable'
import RoomOverview from '../components/landlord/RoomOverview'

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
    <div style={{ padding: "2rem", fontFamily: "sans-serif"}}>
      <h1>Landlord Dashboard</h1>

      {/* Overdue Payments */}
      <OverduePayments overdueTenants={overdueTenants} />

      {/* Tenant List */}
      <TenantTable tenants={tenants} />

      {/* Room Overview */}
      <RoomOverview rooms={rooms} />

    </div>
  )
}

export default LandlordDashboard