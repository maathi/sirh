import React, { createContext, useState, useEffect, useContext } from "react"

// Define the shape of the authentication context
interface AuthContextType {
  token: string | null
  //   login: (token: string) => void
  //   logout: () => void
  setToken: (value: string | null) => void
  isAuthenticated: () => boolean
}

// Create the authentication context
const AuthContext = createContext<AuthContextType>({
  token: null,
  //   login: () => {},
  //   logout: () => {},
  setToken: () => {},
  isAuthenticated: () => false,
})

// Create a wrapper component to provide the authentication context
export const AuthProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}: any) => {
  const [token, setToken] = useState<string | null>(null)

  // Check if a token exists in AsyncStorage on app startup
  useEffect(() => {
    const checkToken = () => {
      const storedToken = localStorage.getItem("access_token")

      if (storedToken) {
        setToken(storedToken)
      }
    }
    checkToken()
  }, [])

  //   useEffect(() => {
  //     console.log(">>>>", token)
  //   }, [token])

  // Handle login by setting the token in state and AsyncStorage
  //   const login = (newToken: string) => {
  //     setToken(newToken)
  //     // AsyncStorage.setItem("token", newToken)
  //     localStorage.setItem("token", newToken)
  //   }

  // Handle logout by removing the token from state and AsyncStorage
  //   const logout = () => {
  //     setToken(null)
  //     // AsyncStorage.removeItem("token")
  //     localStorage.removeItem("token")
  //   }

  // Check if the user is authenticated based on the presence of a token
  const isAuthenticated = () => {
    return token !== null
  }

  return (
    <AuthContext.Provider value={{ token, setToken, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}

// Custom hook to access the authentication context
export const useAuth = () => useContext(AuthContext)
