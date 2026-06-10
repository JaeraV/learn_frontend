const mockUser = {
  landlord: {
    id: '1',
    name: 'John Landlord',
    email: 'landlord@test.com',
    password: 'password123',
    role: 'landlord'
  },
  tenant: {
    id: '2',
    name: 'John Doe',
    email: 'tenant@test.com',
    password: 'password123',
    role: 'tenant'
  }
}

export const login = async ({ email, password }) => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  const user = Object.values(mockUser).find(
    (u) => u.email === email && u.password === password
  )

  if (!user) {
    throw new Error('Invalid email or password')
  }

  // Mock token — later replace with real token from your backend
  const token = `mock-token-${user.role}`

  return { token, user }
}

export const logout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
}