import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import { Link } from "react-router-dom";
import axiosClient from "../axios.js"
import { useStateContext } from '../contexts/ContextProvider';

export default function Login() {
  const { setCurrentUser, setUserToken } = useStateContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({__html: ''});

  const onSubmit = (ev) => {
    ev.preventDefault();
    setError({ __html: '' })

    axiosClient.post("/login", {
      email,
      password,
    })
    .then(({ data }) => {
        setCurrentUser(data.user)
        setUserToken(data.token)
    })
    .catch((error) => {
      if (error.response) {
          const finalErrors = Object.values(error.response.data.errors).reduce((accum, next) => [...accum, ...next], [])
          setError({__html: finalErrors.join('<br>')})
      }
      console.error(error)
    });
  };

  return (
    <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-mm-dark dark:border-mm-smoke mt-20">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div className='flex justify-center'>
                <a>
                  <Link to="/">
                    <img src={Logo} href="#" alt="mmfg-logo" className="w-40 h-auto"/>
                  </Link>
                </a>
              </div>
              <h1 className="text-xl text-gray-900 md:text-3xl dark:text-white text-center uppercase font-Anton">
                  Login
              </h1>
              
              {error.__html && (<div className="bg-red-500 rounded py-2 px-3 text-white" dangerouslySetInnerHTML={error}></div>)}

              <form onSubmit={onSubmit} className="space-y-4 md:space-y-6" action="#" method="POST">
              <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-Inter">Your email</label>
                      <input type="email" name="email" id="email-address" value={email} onChange={ev => setEmail(ev.target.value)} className=" sm:text-sm rounded-lg block w-full p-2.5 bg-mm-smoke border-mm-dark placeholder-gray-400 text-white focus:ring-mm-orange focus:border-mm-orange" placeholder="name@email.com" required="" />
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-Inter">Password</label>
                      <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={ev => setPassword(ev.target.value)} className="sm:text-sm rounded-lg block w-full p-2.5 bg-mm-smoke border-mm-dark placeholder-gray-400 text-white focus:ring-mm-orange focus:border-mm-orange" required="" />
                  </div>
                  <button type="submit" className="w-full text-white bg-mm-sage hover:bg-mm-orange focus:ring-4 focus:outline-none focus:ring-mm-smoke font-medium rounded-lg text-sm px-5 py-2.5 text-center font-Inter uppercase">Login</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center font-Inter">
                      Not Yet a Member? <Link to="/signup"><a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Create An Account</a></Link>
                  </p>
                </form>
          </div>
      </div> 
  )
}




 