import { ReactElement } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface PrivateRouteProps {
  children ?: ReactElement 
  authentication : boolean
}

export default function PrivateRoute({authentication}:PrivateRouteProps):React.ReactElement|null {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  if(authentication) { /** 인증의 필요 여부 */
    return (!isAuthenticated || isAuthenticated === 'false') ? <Navigate to="/login"/> : <Outlet/>
  } else {
    return (!isAuthenticated || isAuthenticated === 'false') ? <Outlet/> : <Navigate to='/login'/>
  }
}