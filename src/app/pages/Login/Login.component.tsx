import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useNavigate } from 'react-router-dom'
import { LoginContainer, Form, Input, Button, FooterText } from './Login.styles'
import { api } from '../../../shared/services/api'

const loginSchema = z.object({
  username: z.string().min(1, 'Usuário obrigatório'),
  password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
})

type LoginFormInputs = z.infer<typeof loginSchema>

const Login: React.FC = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      await api.post('/login', data)
      navigate('/chat')
    } catch (err) {
      console.error(err)
      alert('Erro ao logar')
    }
  }

  return (
    <LoginContainer>
      <h1>Chat LICITEM</h1>
      <h2>Entre na sua conta</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder="Usuário" {...register('username')} />
        {errors.username && <p>{errors.username.message}</p>}

        <Input placeholder="Senha" type="password" {...register('password')} />
        {errors.password && <p>{errors.password.message}</p>}

        <Button type="submit">Entrar</Button>
      </Form>
      <FooterText onClick={() => navigate('/register')}>
        Não tem conta? Registre-se
      </FooterText>
    </LoginContainer>
  )
}

export default Login
