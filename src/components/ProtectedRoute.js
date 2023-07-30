// components/ProtectedRoute.js
import Cookies from 'js-cookie';

import { Navigate, Outlet } from 'react-router-dom'
const PrivateRoutes = () => {
  let auth = Cookies.get('token');
return (
    auth !== undefined || null ? <Outlet /> : <Navigate to="/login" />
  )
}

export default PrivateRoutes