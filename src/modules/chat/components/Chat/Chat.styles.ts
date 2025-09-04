import styled from 'styled-components'

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: linear-gradient(
    135deg,
    rgba(41, 5, 75, 0.9) 0%,
    rgba(10, 10, 10, 1) 100%
  );

  height: 100vh;
  color: #fff;

  h1 {
    font-size: 18px;
    padding: 20px;
  }
`

export const HeaderButtons = styled.div`
  display: flex;
  width: 100%;
  max-width: 400px;
  justify-content: space-between;
`

export const RoomList = styled.div`
  margin-top: 1rem;
  width: 100%;
  max-width: 400px;
  max-height: 600px;
  flex: 1;
  overflow: auto;

  /* Scrollbar para Webkit (Chrome, Edge, Safari) */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(20, 20, 20, 0.3);
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #9333ea;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #bb7bf7;
  }

  /* Scrollbar para Firefox */
  scrollbar-width: thin;
  scrollbar-color: #9333ea rgba(20, 20, 20, 0.3);
`

export const RoomItem = styled.div`
  padding: 1rem;
  margin-bottom: 0.5rem;
  min-height: 50px;
  background: rgba(20, 20, 20, 0.8);
  border-radius: 8px;
  cursor: pointer;

  &:first-child {
    margin-top: 0.5rem;
  }

  &:hover {
    background: rgba(147, 51, 234, 0.3);
  }
`

export const Button = styled.button<{ destructive?: boolean }>`
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  width: 200px;
  border: none;
  cursor: pointer;
  background: ${({ destructive }) => (destructive ? 'transparent' : '#9333ea')};
  border: ${({ destructive }) =>
    destructive ? '2px solid #bb7bf7ff' : 'none'};
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
