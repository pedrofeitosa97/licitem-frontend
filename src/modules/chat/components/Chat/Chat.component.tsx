import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ChatContainer,
  RoomList,
  RoomItem,
  Button,
  Modal,
  Input,
  HeaderButtons,
  ModalOverlay,
} from './Chat.styles'
import { api } from '../../../../shared/services/api'
import { toast } from 'react-toastify'

interface Room {
  id: string
  name: string
}

const Chat: React.FC = () => {
  const navigate = useNavigate()
  const [rooms, setRooms] = useState<Room[]>([])
  const [showModal, setShowModal] = useState(false)
  const [newRoomName, setNewRoomName] = useState('')
  const [isCreating, setIsCreating] = useState(false) // bloqueia múltiplos envios

  useEffect(() => {
    fetchRooms()
  }, [])

  const fetchRooms = async () => {
    try {
      const res = await api.get('/rooms')
      setRooms(res.data)
    } catch (err) {
      console.log(err)
      toast.error('Erro ao carregar salas.')
    }
  }

  const handleCreateRoom = async () => {
    if (!newRoomName || isCreating) return
    setIsCreating(true)
    try {
      const res = await api.post('/rooms', { name: newRoomName })
      setRooms((prev) => [...prev, res.data])
      setNewRoomName('')
      setShowModal(false)
      toast.success('Sala criada com sucesso!')
    } catch (err) {
      console.log(err)
      toast.error('Erro ao criar a sala.')
    } finally {
      setIsCreating(false)
    }
  }

  const handleEnterRoom = (roomId: string) => {
    navigate(`/chat/${roomId}`)
  }

  const handleLogout = () => {
    navigate('/')
  }

  return (
    <ChatContainer>
      <h1>SALAS DISPONÍVEIS</h1>

      <HeaderButtons>
        <Button onClick={() => setShowModal(true)}>Criar Sala</Button>
        <Button onClick={handleLogout} destructive>
          Sair
        </Button>
      </HeaderButtons>

      <RoomList>
        {rooms.map((room) => (
          <RoomItem key={room.id} onClick={() => handleEnterRoom(room.id)}>
            {room.name}
          </RoomItem>
        ))}
      </RoomList>

      {showModal && (
        <ModalOverlay>
          <Modal>
            <h2>Criar Sala</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleCreateRoom()
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
              }}
            >
              <Input
                placeholder="Nome da sala"
                value={newRoomName}
                onChange={(e) => setNewRoomName(e.target.value)}
              />

              <Button type="submit" disabled={isCreating}>
                {isCreating ? 'Criando...' : 'Criar'}
              </Button>

              <Button
                type="button"
                onClick={() => setShowModal(false)}
                destructive
              >
                Cancelar
              </Button>
            </form>
          </Modal>
        </ModalOverlay>
      )}
    </ChatContainer>
  )
}

export default Chat
