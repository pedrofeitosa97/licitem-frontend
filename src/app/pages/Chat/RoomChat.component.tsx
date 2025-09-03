// RoomChat.component.tsx
import React, { useEffect, useState, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  RoomChatContainer,
  MessagesList,
  MessageItem,
  Input,
  Button,
} from './RoomChat.styles'
import socket from '../../../shared/services/socket'
import { api } from '../../../shared/services/api'

interface Message {
  id: string
  roomId: string
  sender: string
  content: string
  createdAt: string
}

const RoomChat: React.FC = () => {
  const { roomId } = useParams()
  const navigate = useNavigate()
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState('')

  const fetchMessages = useCallback(async () => {
    if (!roomId) return
    try {
      const res = await api.get<Message[]>(`/messages/${roomId}`)
      setMessages(res.data)
    } catch (err) {
      console.error('Erro ao buscar mensagens:', err)
    }
  }, [roomId])

  useEffect(() => {
    if (!roomId) return

    fetchMessages()

    socket.emit('joinRoom', roomId)

    const handleNewMessage = (msg: Message) => {
      console.log('Mensagem recebida via socket:', msg)
      if (msg.roomId === roomId) {
        setMessages((prev) => [...prev, msg])
      }
    }

    socket.on('message', handleNewMessage)

    return () => {
      socket.off('message', handleNewMessage)
    }
  }, [roomId, fetchMessages])

  const handleSendMessage = async () => {
    if (!newMessage || !roomId) return

    const msg = { roomId, user: 'Pedro', message: newMessage }

    try {
      await api.post('/messages', {
        roomId,
        sender: 'Pedro',
        content: newMessage,
      })

      socket.emit('sendMessage', msg)

      setNewMessage('')
    } catch (err) {
      console.error('Erro ao enviar mensagem:', err)
    }
  }

  const handleLeaveRoom = () => {
    navigate('/chat')
  }

  return (
    <RoomChatContainer>
      <h1>Sala: {roomId}</h1>
      <Button destructive onClick={handleLeaveRoom}>
        Sair da sala
      </Button>

      <MessagesList>
        {messages.map((msg) => (
          <MessageItem key={msg.id}>
            <strong>{msg.sender}:</strong> {msg.content}
          </MessageItem>
        ))}
      </MessagesList>

      <div>
        <Input
          placeholder="Digite sua mensagem"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <Button onClick={handleSendMessage}>Enviar</Button>
      </div>
    </RoomChatContainer>
  )
}

export default RoomChat
