const AvailableRooms = ({vacantRooms}) => {
  return (
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
  )
}

export default AvailableRooms