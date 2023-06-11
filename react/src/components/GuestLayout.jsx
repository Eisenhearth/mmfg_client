import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider';

const GuestLayout = () => {
    const { userToken } = useStateContext();

    if (userToken) {
      return <Navigate to="/" />
    }

    return (
    <section className="bgImg bg-cover bg-black bg-opacity-40 h-[59.8rem]">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Outlet />
      </div>
    </section>
  )
}

export default GuestLayout