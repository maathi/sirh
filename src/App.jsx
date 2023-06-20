import Button from "@mui/material/Button"
import React from "react"
import { Route, BrowserRouter, Routes } from "react-router-dom"
import Branches from "./screens/Branches"
import Societe from "./screens/Company"

import { useState } from "react"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { ColorModeContext, useMode } from "./theme"
import Sidebar from "./components/Sidebar"
import Topbar from "./components/Topbar"
import Branch from "./screens/Branch"
import Signup from "./screens/signup"
import Login from "./screens/Login"
import Reset from "./screens/resetPassword"
import Admins from "./screens/Admins"
import Admin from "./screens/Admin"
import Roles from "./screens/Roles"
import Structure from "./screens/Structure"
import Structures from "./screens/structures"
import Emplois from "./screens/Emplois"
import Emploi from "./screens/Emploi"
import Poste from "./screens/Poste"
import Postes from "./screens/Postes"
import Types from "./screens/Types"
import ProtectedRoute from "./utils/protectedRoute"
import { AuthProvider, useAuth } from "./context/authContext"

function App() {
  const [theme, colorMode] = useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AuthProvider>
          <Layout></Layout>
        </AuthProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

const Layout = () => {
  const [isSidebar, setIsSidebar] = useState(true)
  const { token } = useAuth()

  return token ? (
    <div className="app">
      <Sidebar isSidebar={isSidebar} />
      <main className="content">
        <Topbar setIsSidebar={setIsSidebar} />
        <Routes>
          <Route path="/types" element={<Types />} />
          <Route path="/postes/:id" element={<Poste />} />
          <Route path="/postes" element={<Postes />} />
          <Route path="/emplois/:id" element={<Emploi />} />
          <Route path="/emplois" element={<Emplois />} />
          <Route path="/structures/:id" element={<Structure />} />
          <Route path="/structures" element={<Structures />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/admins/:id" element={<Admin />} />
          <Route path="/admins" element={<Admins />} />
          <Route path="/company" element={<Societe />} />
          <Route path="/branches/:id" element={<Branch />} />
          <Route path="/branches" element={<Branches />} />
        </Routes>
      </main>
    </div>
  ) : (
    <div className="app">
      <main className="content">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset" element={<Reset />} />
        </Routes>
      </main>
    </div>
  )
}
export default App
