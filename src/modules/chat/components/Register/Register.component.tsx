import React, { useState } from 'react'
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
  ErrorMessage,
} from './Register.styles'
import { register as registerUser } from '../../../../shared/services/auth'
import { toast } from 'react-toastify'
import { FiLoader } from 'react-icons/fi'

const registerSchema = z.object({
  email: z.string().email('Email inválido'),
  username: z.string().min(1, 'Usuário obrigatório'),
  password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
})

type RegisterFormInputs = z.infer<typeof registerSchema>

const Register: React.FC = () => {
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerSchema),
  })

  const onSubmit = async (data: RegisterFormInputs) => {
    if (isSubmitting) return
    setIsSubmitting(true)

    try {
      await registerUser(data.email, data.password, data.username)
      toast.success('Registro bem-sucedido! Faça login.')
      navigate('/')
    } catch (error) {
      console.error('Registro falhou', error)
      toast.error('Erro ao registrar. Tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <RegisterContainer>
      <h1>Registre-se</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input type="text" placeholder="Email" {...register('email')} />
        <ErrorMessage>
          {errors.email && <p>{errors.email.message}</p>}
        </ErrorMessage>

        <Input type="text" placeholder="Usuário" {...register('username')} />
        <ErrorMessage>
          {errors.username && <p>{errors.username.message}</p>}
        </ErrorMessage>

        <Input type="password" placeholder="Senha" {...register('password')} />
        <ErrorMessage>
          {errors.password && <p>{errors.password.message}</p>}
        </ErrorMessage>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? <FiLoader className="spin" /> : 'Registrar'}
        </Button>
      </Form>

      <FooterText onClick={() => navigate('/')}>
        Já tem conta? Faça login
      </FooterText>
    </RegisterContainer>
  )
}

export default Register
