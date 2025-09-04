import { io } from 'socket.io-client'

const socket = io(import.meta.env.VITE_API_BASE_URL, {})

socket.connect()

socket.on('connect', () => {
  console.log('Conectado ao socket com id:', socket.id)
})

socket.on('disconnect', () => {
  console.log('Desconectado do socket')
})

export default socket
