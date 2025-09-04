import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './modules/app/components/Login/Login.component'
import Register from './modules/app/components/Register/Register.component'
import Chat from './modules/app/components/Chat/Chat.component'
import RoomChat from './modules/app/components/Chat/RoomChat.component'

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
