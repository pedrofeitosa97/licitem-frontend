import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './app/pages/Login/Login.component'
import Register from './app/pages/Register/Register.component'
import Chat from './app/pages/Chat/Chat.component'

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
