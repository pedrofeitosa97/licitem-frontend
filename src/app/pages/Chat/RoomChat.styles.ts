import styled from 'styled-components'

export const RoomChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #0a0a0a;
  color: #ffffff;
  padding: 20px;
`

export const MessagesList = styled.div`
  flex: 1;
  overflow-y: auto;
  margin: 20px 0;
  padding: 10px;
  border-radius: 8px;
  background: rgba(20, 20, 20, 0.8);
`

export const MessageItem = styled.div`
  margin-bottom: 10px;
  strong {
    color: #9333ea;
  }
`

export const Input = styled.input`
  flex: 1;
  padding: 10px;
  border-radius: 8px;
  border: none;
  outline: none;
  background: #1a1a1a;
  color: #ffffff;
`

export const Button = styled.button<{ destructive?: boolean }>`
  padding: 10px 20px;
  margin-left: 10px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background: ${(props) => (props.destructive ? '#ef4444' : '#9333ea')};
  color: #fff;
  font-weight: bold;

  &:hover {
    opacity: 0.9;
  }
`
