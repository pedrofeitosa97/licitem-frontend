import styled from 'styled-components'

export const RoomChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #0a0a0a;
  color: #ffffff;
  padding: 20px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
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
  height: 60px;
`

export const Button = styled.button<{ $destructive?: boolean }>`
  background: ${(props) => (props.$destructive ? 'red' : '#9333ea')};
  color: white;
  width: 200px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  height: 60px;
`

export const SendMessageContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  align-items: center;
`
