import axios from "axios"
import { useAuth } from "../context/authContext"

const API_URL = "http://localhost:3000/auth/"

export const login = (email: string, password: string) => {
  //   const { token, setToken } = useAuth()

  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.access_token) {
        localStorage.setItem("user", JSON.stringify(response.data))
        // setToken(response.data.access_token)
      }

      return response.data
    })
}

export const logout = () => {
  //   const { token, setToken } = useAuth()

  localStorage.removeItem("user")
  //   setToken(null)
}

export const register = (email: string, password: string) => {
  return axios.post(API_URL + "signup", {
    email,
    password,
  })
}

export const getCurrentUser = () => {
  const userStr = localStorage.getItem("user")
  if (userStr) return JSON.parse(userStr)

  return null
}
