import styled from 'styled-components'

export const LoginContainer = styled.div`
  background: #0a0a0a;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  h2 {
    padding: 20px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 300px;
`

export const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #9333ea;
  background: #111;
  color: #fff;
`

export const Button = styled.button`
  padding: 10px;
  background: #9333ea;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`

export const FooterText = styled.p`
  margin-top: 20px;
  color: #a855f7;
  cursor: pointer;
`

export const ErrorMessage = styled.p`
  color: #cdacf7ff;
  font-size: 0.8rem;
  margin: 0px 0 8px;
  font-weight: 500;
`
