const mockRooms = [
  { id: 1, name: 'Room 101', status: 'Occupied', tenant: 'John Doe', rent: 500, amenities: 'WiFi, AC' },
  { id: 2, name: 'Room 202', status: 'Occupied', tenant: 'Jane Smith', rent: 450, amenities: 'WiFi, AC' },
  { id: 3, name: 'Room 203', status: 'Vacant', tenant: null, rent: 450, amenities: 'WiFi, AC, Furnished' },
  { id: 4, name: 'Room 303', status: 'Occupied', tenant: 'Bob Johnson', rent: 600, amenities: 'WiFi, AC' },
  { id: 5, name: 'Room 305', status: 'Vacant', tenant: null, rent: 600, amenities: 'WiFi, AC, Kitchen, Balcony' },
]

export const getRooms = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500))
  return mockRooms
}

export const getVacantRooms = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500))
  return mockRooms.filter((room) => room.status === 'Vacant')
}