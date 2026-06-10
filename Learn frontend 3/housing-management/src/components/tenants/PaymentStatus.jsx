const PaymentStatus = ({tenant}) => {
  return (
    <section style={{ marginTop: "2rem" }}>
        <h2>Payment Status</h2>
        <div style={{ background: "#fff3cd", padding: "1rem", borderRadius: "8px" }}>
          <p>Monthly Rent: <strong>${tenant.monthlyRent}</strong></p>
          <p>Due Date: <strong>{tenant.dueDate}</strong></p>
          <p>Outstanding Balance: <strong style={{ color: "red" }}>${tenant.balance}</strong></p>
        </div>
      </section>
  )
}

export default PaymentStatus