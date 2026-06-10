const RoomOverview = ({ rooms }) => {
  return (
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
  )
}

export default RoomOverview