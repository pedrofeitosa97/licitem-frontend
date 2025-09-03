import { io } from 'socket.io-client'

const socket = io('http://localhost:3000', {
  autoConnect: false,
})

socket.connect()

socket.on('connect', () => {
  console.log('Conectado ao socket com id:', socket.id)
})

socket.on('disconnect', () => {
  console.log('Desconectado do socket')
})

export default socket
