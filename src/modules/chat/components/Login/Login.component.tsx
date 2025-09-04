import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useNavigate } from 'react-router-dom'
import {
  LoginContainer,
  Form,
  Input,
  Button,
  FooterText,
  ErrorMessage,
} from './Login.styles'
import { login } from '../../../../shared/services/auth'

const loginSchema = z.object({
  email: z.string().email('Email inválido'),
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
      await login(data.email, data.password)
      navigate('/chat')
    } catch (error) {
      console.error('Login falhou', error)
    }
  }

  return (
    <LoginContainer>
      <h1>Chat LICITEM</h1>
      <h2>Entre na sua conta</h2>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input type="text" placeholder="Email" {...register('email')} />
        <ErrorMessage>
          {errors.email && <p>{errors.email.message}</p>}
        </ErrorMessage>

        <Input type="password" placeholder="Senha" {...register('password')} />
        <ErrorMessage>
          {errors.password && <p>{errors.password.message}</p>}
        </ErrorMessage>

        <Button type="submit">Entrar</Button>
      </Form>

      <FooterText onClick={() => navigate('/register')}>
        Não tem conta? Registre-se
      </FooterText>
    </LoginContainer>
  )
}

export default Login
