import { api } from './api'

export interface Message {
  id?: string
  roomId: string
  sender: string
  content: string
  createdAt?: string
}

const messagesService = {
  getMessages: async (roomId: string): Promise<Message[]> => {
    const response = await api.get<Message[]>(`/messages/${roomId}`)
    return response.data
  },

  sendMessage: async (message: Message): Promise<Message> => {
    const response = await api.post<Message>('/messages', message)
    return response.data
  },
}

export default messagesService
