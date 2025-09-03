import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './app/pages/Login/Login.component'
import Register from './app/pages/Register/Register.component'
import Chat from './app/pages/Chat/Chat.component'
import RoomChat from './app/pages/Chat/RoomChat.component'

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
