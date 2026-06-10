import {useState, useEffect} from 'react'
import OverduePayments from '../components/landlord/OverduePayments'
import TenantTable from '../components/landlord/TenantTable'
import RoomOverview from '../components/landlord/RoomOverview'
import {getTenants} from '../services/tenantService'
import {getRooms} from '../services/roomService'  

const LandlordDashboard = () => {
  const [tenants, setTenants] = useState([])
  const [rooms, setRooms] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tenantsData = await getTenants()
        const roomsData = await getRooms()
        setTenants(tenantsData)
        setRooms(roomsData)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const overdueTenants = tenants.filter((tenant) => tenant.status === "Overdue")

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <>
      <h1>Landlord Dashboard</h1>
      <OverduePayments overdueTenants={overdueTenants} />
      <TenantTable tenants={tenants} />
      <RoomOverview rooms={rooms} />
    </>
  )
}

export default LandlordDashboard