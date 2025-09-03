import { api } from './api'

export interface LoginData {
  email: string
  password: string
}

export interface RegisterData {
  email: string
  password: string
  username: string
}

export interface AuthResponse {
  token: string
  userId: string
  username?: string
}

const authService = {
  login: async (data: LoginData): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>('/auth/login', data)
    return response.data
  },

  register: async (data: RegisterData): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>('/auth/register', data)
    return response.data
  },
}

export default authService
