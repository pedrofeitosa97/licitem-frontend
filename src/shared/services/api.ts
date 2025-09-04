import axios from 'axios'

console.log(import.meta.env.VITE_API_BASE_URL)

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
})
