import { api } from './api'

export const login = async (email: string, password: string) => {
  const res = await api.post('/auth/login', { email, password })

  const { idToken, refreshToken, displayName } = res.data

  localStorage.setItem('token', idToken)
  localStorage.setItem('refreshToken', refreshToken)
  localStorage.setItem('username', displayName)

  return res.data
}

export const register = (email: string, password: string, username: string) =>
  api.post('/auth/register', { email, password, username })
