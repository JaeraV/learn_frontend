const mockTenants = [
  { id: 1, name: 'John Doe', room: 'Room 101', rent: 500, status: 'Paid' },
  { id: 2, name: 'Jane Smith', room: 'Room 202', rent: 450, status: 'Overdue' },
  { id: 3, name: 'Bob Johnson', room: 'Room 303', rent: 600, status: 'Paid' },
]

const mockPaymentHistory = [
  { id: 1, date: 'May 1, 2026', amount: 500, status: 'Paid' },
  { id: 2, date: 'April 1, 2026', amount: 500, status: 'Paid' },
  { id: 3, date: 'March 1, 2026', amount: 500, status: 'Overdue' },
]

export const getTenants = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500))
  return mockTenants
}

export const getPaymentHistory = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500))
  return mockPaymentHistory
}