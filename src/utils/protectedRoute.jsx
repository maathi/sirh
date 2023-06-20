import React from "react"
import { Route, Navigate, RouteProps } from "react-router-dom"
import { getCurrentUser } from "../services/auth.service"

// interface ProtectedRouteProps extends RouteProps {
//   component: React.ComponentType<any>
// }

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const currentUser = getCurrentUser()

  return (
    <Route
      {...rest}
      //   render={(props) =>
      //     currentUser ? <Component {...props} /> : <Navigate to="/login" />
      //   }
      // render={()=>false}
      element={currentUser ? <Component /> : <Navigate to="/login" />}
    />
  )
}

export default ProtectedRoute
