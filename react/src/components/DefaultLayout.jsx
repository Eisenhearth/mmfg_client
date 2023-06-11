import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider';


const DefaultLayout = () => {
    const { userToken } = useStateContext();

  if (!userToken) {
    return <Navigate to="/login" />;
  }
 
    return (
    <Outlet />
  )
}

export default DefaultLayout