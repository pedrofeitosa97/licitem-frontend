import { api } from './api'

export interface Room {
  id: string
  name: string
}

const roomsService = {
  getRooms: async (): Promise<Room[]> => {
    const response = await api.get<Room[]>('/rooms')
    return response.data
  },

  createRoom: async (name: string): Promise<Room> => {
    const response = await api.post<Room>('/rooms', { name })
    return response.data
  },
}

export default roomsService
