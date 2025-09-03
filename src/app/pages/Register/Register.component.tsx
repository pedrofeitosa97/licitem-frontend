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
import { register as registerUser } from '../../../shared/services/auth'

const registerSchema = z.object({
  email: z.string().email('Email inválido'),
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
      await registerUser(data.email, data.password, data.username)
      navigate('/')
    } catch (error) {
      console.error('Registro falhou', error)
    }
  }

  return (
    <RegisterContainer>
      <h1>Registre-se</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input type="text" placeholder="Email" {...register('email')} />
        {errors.email && <p>{errors.email.message}</p>}

        <Input type="text" placeholder="Usuário" {...register('username')} />
        {errors.username && <p>{errors.username.message}</p>}

        <Input type="password" placeholder="Senha" {...register('password')} />
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
