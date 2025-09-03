import styled from 'styled-components'

export const LoginContainer = styled.div`
  background: #0a0a0a;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: rgba(20, 20, 20, 0.8);
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(147, 51, 234, 0.3);
`

export const Input = styled.input`
  padding: 10px 15px;
  border-radius: 10px;
  border: 1px solid rgba(147, 51, 234, 0.3);
  background: #111111;
  color: #ffffff;
  font-size: 16px;
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

export const FooterText = styled.span`
  margin-top: 15px;
  color: #a855f7;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`
