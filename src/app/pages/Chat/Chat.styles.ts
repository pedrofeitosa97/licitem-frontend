import styled from 'styled-components'

export const ChatContainer = styled.div`
  background: #0a0a0a;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: #ffffff;
`

export const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  background: rgba(20, 20, 20, 0.8);
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 20px;
`

export const MessageInput = styled.input`
  padding: 10px 15px;
  border-radius: 10px;
  border: 1px solid rgba(147, 51, 234, 0.3);
  background: #111111;
  color: #ffffff;
  font-size: 16px;
  margin-bottom: 10px;
  &:focus {
    outline: none;
    box-shadow: 0 0 10px rgba(147, 51, 234, 0.6);
  }
`

export const Button = styled.button`
  padding: 12px 20px;
  border: none;
  border-radius: 10px;
  background: #9333ea;
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background: #a855f7;
  }
`
