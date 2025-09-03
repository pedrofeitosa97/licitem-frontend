import styled from 'styled-components'

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: #0a0a0a;
  min-height: 100vh;
  color: #fff;
`

export const RoomList = styled.div`
  margin-top: 1rem;
  width: 100%;
  max-width: 400px;
`

export const RoomItem = styled.div`
  padding: 1rem;
  margin-bottom: 0.5rem;
  background: rgba(20, 20, 20, 0.8);
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background: rgba(147, 51, 234, 0.3);
  }
`

export const Button = styled.button<{ destructive?: boolean }>`
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background: ${({ destructive }) => (destructive ? '#ef4444' : '#9333ea')};
  color: #fff;
  font-weight: bold;
  &:hover {
    opacity: 0.8;
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(20, 20, 20, 0.95);
  padding: 2rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Input = styled.input`
  margin: 0.5rem 0;
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid rgba(147, 51, 234, 0.3);
  background: #111;
  color: #fff;
  width: 100%;
`
