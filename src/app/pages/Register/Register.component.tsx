import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useNavigate } from 'react-router-dom'
import {
  RegisterContainer,
  Form,
  Input,
  Button,
  FooterText,
} from './Register.styles'
import { api } from '../../../shared/services/api'

const registerSchema = z.object({
  username: z.string().min(1, 'Usuário obrigatório'),
  password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
})

type RegisterFormInputs = z.infer<typeof registerSchema>

const Register: React.FC = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerSchema),
  })

  const onSubmit = async (data: RegisterFormInputs) => {
    try {
      await api.post('/register', data) // seu endpoint de registro
      navigate('/')
    } catch (err) {
      console.error(err)
      alert('Erro ao registrar')
    }
  }

  return (
    <RegisterContainer>
      <h1>Registre-se no Chat LICITEM</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder="Usuário" {...register('username')} />
        {errors.username && <p>{errors.username.message}</p>}

        <Input placeholder="Senha" type="password" {...register('password')} />
        {errors.password && <p>{errors.password.message}</p>}

        <Button type="submit">Registrar</Button>
      </Form>
      <FooterText onClick={() => navigate('/')}>
        Já tem conta? Faça login
      </FooterText>
    </RegisterContainer>
  )
}

export default Register
