import {useState, useEffect} from 'react'
import PaymentStatus from "../components/tenants/PaymentStatus"
import PaymentHistory from "../components/tenants/PaymentHistory"
import AvailableRooms from "../components/tenants/AvailableRooms"
import {getPaymentHistory} from '../services/tenantService'
import {getVacantRooms} from '../services/roomService'


const TenantDashboard = () => {
  const [tenant, setTenant] = useState(null)
  const [paymentHistory, setPaymentHistory] = useState([])
  const [vacantRooms, setVacantRooms] = useState([])  
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const historyData = await getPaymentHistory()
        const vacantRoomsData = await getVacantRooms()
        setPaymentHistory(historyData)
        setVacantRooms(vacantRoomsData)
        // Mock tenant data - in real app, fetch from API
        setTenant({
          name: "John Doe",
          room: "Room 101",
          monthlyRent: 500,
          dueDate: "June 15, 2026",
          balance: 250,
        })
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    } 
      fetchData()
  }, [])

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif"}}>
      <h1>Welcome, {tenant.name}</h1>
      <p>Current Room: <strong>{tenant.room}</strong></p>

      {/* Payment Status */}
      <PaymentStatus tenant={tenant} />
      

      {/* Payment History */}
      <PaymentHistory paymentHistory={paymentHistory} />

      {/* Available Rooms */}
      <AvailableRooms vacantRooms={vacantRooms} />
    </div>
  )
}

export default TenantDashboard