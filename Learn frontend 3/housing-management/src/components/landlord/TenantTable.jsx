import React from 'react'

const TenantTable = ({ tenants }) => {
  return (
    <section style={{ marginTop: "2rem" }}>
        <h2>All Tenants</h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#f0f0f0" }}>
              <th style={{ padding: "8px", textAlign: "left" }}>Name</th>
              <th style={{ padding: "8px", textAlign: "left" }}>Room</th>
              <th style={{ padding: "8px", textAlign: "left" }}>Rent</th>
              <th style={{ padding: "8px", textAlign: "left" }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {tenants.map((tenant) => (
              <tr key={tenant.id} style={{ borderBottom: "1px solid #ddd" }}>
                <td style={{ padding: "8px" }}>{tenant.name}</td>
                <td style={{ padding: "8px" }}>{tenant.room}</td>
                <td style={{ padding: "8px" }}>${tenant.rent}</td>
                <td style={{ padding: "8px", color: tenant.status === "Paid" ? "green" : "red" }}>
                  {tenant.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
  )
}

export default TenantTable