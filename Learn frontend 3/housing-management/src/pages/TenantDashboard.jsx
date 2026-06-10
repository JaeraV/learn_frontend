import PaymentStatus from "../components/tenants/PaymentStatus"


function TenantDashboard() {
  const tenant = {
    name: "John Doe",
    room: "Room 101",
    monthlyRent: 500,
    dueDate: "June 15, 2026",
    balance: 250,
  }

  const paymentHistory = [
    { id: 1, date: "May 1, 2026", amount: 500, status: "Paid" },
    { id: 2, date: "April 1, 2026", amount: 500, status: "Paid" },
    { id: 3, date: "March 1, 2026", amount: 500, status: "Overdue" },
  ]

  const vacantRooms = [
    { id: 1, name: "Room 203", rent: 450, amenities: "WiFi, AC, Furnished" },
    { id: 2, name: "Room 305", rent: 600, amenities: "WiFi, AC, Kitchen, Balcony" },
  ]

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif"}}>
      <h1>Welcome, {tenant.name}</h1>
      <p>Current Room: <strong>{tenant.room}</strong></p>

      {/* Payment Status */}
      <PaymentStatus tenant={tenant} />
      

      {/* Payment History */}
      <section style={{ marginTop: "2rem" }}>
        <h2>Payment History</h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#f0f0f0" }}>
              <th style={{ padding: "8px", textAlign: "left" }}>Date</th>
              <th style={{ padding: "8px", textAlign: "left" }}>Amount</th>
              <th style={{ padding: "8px", textAlign: "left" }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {paymentHistory.map((payment) => (
              <tr key={payment.id} style={{ borderBottom: "1px solid #ddd" }}>
                <td style={{ padding: "8px" }}>{payment.date}</td>
                <td style={{ padding: "8px" }}>${payment.amount}</td>
                <td style={{ padding: "8px", color: payment.status === "Paid" ? "green" : "red" }}>
                  {payment.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Vacant Rooms */}
      <section style={{ marginTop: "2rem" }}>
        <h2>Available Rooms</h2>
        {vacantRooms.map((room) => (
          <div key={room.id} style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "1rem", marginBottom: "1rem" }}>
            <h3>{room.name}</h3>
            <p>Monthly Rent: <strong>${room.rent}</strong></p>
            <p>Amenities: {room.amenities}</p>
          </div>
        ))}
      </section>
    </div>
  )
}

export default TenantDashboard