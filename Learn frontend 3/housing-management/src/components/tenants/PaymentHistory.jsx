const PaymentHistory = ({ paymentHistory }) => {
  return (
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
  )
}

export default PaymentHistory