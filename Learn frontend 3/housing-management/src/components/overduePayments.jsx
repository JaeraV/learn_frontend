import React from 'react'

const OverduePayments = ({ overdueTenants }) => {
  return (
    <section style={{ marginTop: "2rem" }}>
        <h2>Tenants with Overdue Payments</h2>
        {overdueTenants.length === 0 ? (
          <p style={{ color: "green" }}>No overdue payments!</p>
        ) : (
          overdueTenants.map((tenant) => (
            <div key={tenant.id} style={{ background: "#ffe0e0", padding: "1rem", borderRadius: "8px", marginBottom: "1rem" }}>
              <p><strong>{tenant.name}</strong> — {tenant.room}</p>
              <p style={{ color: "red" }}>Overdue: ${tenant.rent}</p>
            </div>
          ))
        )}
      </section>
  )
}

export default OverduePayments