// RoomChat.component.tsx
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  RoomChatContainer,
  MessagesList,
  MessageItem,
  Input,
  Button,
  SendMessageContainer,
} from './RoomChat.styles'
import socket from '../../../../shared/services/socket'
import { api } from '../../../../shared/services/api'
import { FiLoader } from 'react-icons/fi'

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
  const [isSending, setIsSending] = useState(false)

  const username = localStorage.getItem('username') || 'Desconhecido'

  useEffect(() => {
    if (!roomId) return

    socket.emit('joinRoom', roomId)

    const handleHistory = (msgs: Message[]) => {
      setMessages(msgs)
    }

    const handleNewMessage = (msg: Message) => {
      if (msg.roomId === roomId) {
        setMessages((prev) => {
          if (prev.find((m) => m.id === msg.id)) return prev
          return [...prev, msg]
        })
      }
    }

    socket.on('roomHistory', handleHistory)
    socket.on('message', handleNewMessage)

    return () => {
      socket.off('roomHistory', handleHistory)
      socket.off('message', handleNewMessage)
    }
  }, [roomId])

  const handleSendMessage = async () => {
    if (!newMessage || !roomId) return

    const msg = { roomId, sender: username, content: newMessage }
    setIsSending(true)

    try {
      await api.post('/messages', msg)
      socket.emit('sendMessage', msg)
      setNewMessage('')
    } catch (err) {
      console.error('Erro ao enviar mensagem:', err)
    } finally {
      setIsSending(false)
    }
  }

  const handleLeaveRoom = () => {
    navigate('/chat')
  }

  return (
    <RoomChatContainer>
      <header>
        <h1>Sala: {roomId}</h1>
        <Button onClick={handleLeaveRoom}>Sair da sala</Button>
      </header>

      <MessagesList>
        {messages.map((msg) => (
          <MessageItem key={msg.id}>
            <strong>{msg.sender}:</strong> {msg.content}
          </MessageItem>
        ))}
      </MessagesList>

      <SendMessageContainer>
        <Input
          placeholder="Digite sua mensagem"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <Button onClick={handleSendMessage} disabled={isSending}>
          {isSending ? <FiLoader className="spin" /> : 'Enviar'}
        </Button>
      </SendMessageContainer>
    </RoomChatContainer>
  )
}

export default RoomChat
