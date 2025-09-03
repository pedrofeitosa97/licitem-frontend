import styled from 'styled-components'

export const RegisterContainer = styled.div`
  background-color: #0a0a0a;
  color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-top: 1rem;
`

export const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 1px solid rgba(147, 51, 234, 0.3);
  background: #1a1a1a;
  color: #fff;
`

export const Button = styled.button`
  background: #9333ea;
  color: #fff;
  padding: 0.5rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`

export const FooterText = styled.div`
  margin-top: 1rem;
  color: #a855f7;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`
