import React, { useEffect, useState } from 'react'
import { io, Socket } from 'socket.io-client'
import {
  ChatContainer,
  MessagesContainer,
  MessageInput,
  Button,
} from './Chat.styles'
import { api } from '../../../shared/services/api'
interface Message {
  user: string
  text: string
}

const socket: Socket = io('http://localhost:3000')

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [text, setText] = useState('')

  useEffect(() => {
    socket.on('message', (msg: Message) => {
      setMessages((prev) => [...prev, msg])
    })

    return () => {
      socket.off('message')
    }
  }, [])

  const sendMessage = async () => {
    if (!text) return
    await api.post('/messages', {
      roomId: 'default',
      sender: 'user1',
      content: text,
    })
    setText('')
  }

  return (
    <ChatContainer>
      <MessagesContainer>
        {messages.map((msg, i) => (
          <div key={i}>
            <strong>{msg.user}:</strong> {msg.text}
          </div>
        ))}
      </MessagesContainer>
      <MessageInput value={text} onChange={(e) => setText(e.target.value)} />
      <Button onClick={sendMessage}>Enviar</Button>
    </ChatContainer>
  )
}

export default Chat
