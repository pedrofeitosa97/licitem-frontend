import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './modules/chat/components/Login/Login.component'
import Register from './modules/chat/components/Register/Register.component'
import Chat from './modules/chat/components/Chat/Chat.component'
import RoomChat from './modules/chat/components/Chat/RoomChat.component'

const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/chat/:roomId" element={<RoomChat />} />
    </Routes>
  </BrowserRouter>
)

export default AppRoutes
