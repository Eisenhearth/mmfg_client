import React from 'react'
import { useState } from 'react';
import Logo from '../assets/logo.png'
import { Link } from "react-router-dom";
import axiosClient from "../axios.js"
import { useStateContext } from '../contexts/ContextProvider';

export default function Signup() {
  const { setCurrentUser, setUserToken } = useStateContext();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState({__html: ''});

  const onSubmit = (ev) => {
    ev.preventDefault();
    setError({ __html: '' })

    axiosClient.post('/signup', {
      name: fullName,
      email,
      password,
      password_confirmation: passwordConfirmation
    })
      .then(({ data }) => {
        setCurrentUser(data.user)
        setUserToken(data.token)
      })
      .catch((error) => {
        if (error.response) {
          const finalErrors = Object.values(error.response.data.errors).reduce((accum, next) => [...accum, ...next], [])
          console.log(finalErrors)
          setError({__html: finalErrors.join('<br>')})
        }
        console.error(error)
      });
  }

  return (
    <div class="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-mm-dark dark:border-mm-smoke mt-20">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div className='flex justify-center'>
                <a>
                  <Link to="/">
                    <img src={Logo} href="#" alt="" srcset="" className="w-40 h-auto"/>
                  </Link>
                </a>
              </div>

              <h1 class="text-xl text-gray-900 md:text-3xl dark:text-white text-center uppercase font-Anton">
                  Create an account
              </h1>

              {error.__html && (<div className="bg-red-500 rounded py-2 px-3 text-white" dangerouslySetInnerHTML={error}>
              </div>)}
             
              <form onSubmit={onSubmit} class="space-y-4 md:space-y-6" action="#" method="POST">
                  <div>
                      <label htmlFor="full-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-Inter">Full Name</label>
                      <input type="text" name="name" id="full-name" value={fullName} onChange={ev => setFullName(ev.target.value)} class="sm:text-sm rounded-lg block w-full p-2.5 bg-mm-smoke border-mm-dark placeholder-gray-400 text-white focus:ring-mm-orange focus:border-mm-orange" placeholder="Juan Dela Cruz" required="" />
                  </div>
                  <div>
                      <label htmlFor="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-Inter">Your email</label>
                      <input type="email" name="email" id="email-address" value={email} onChange={ev => setEmail(ev.target.value)} class=" sm:text-sm rounded-lg block w-full p-2.5 bg-mm-smoke border-mm-dark placeholder-gray-400 text-white focus:ring-mm-orange focus:border-mm-orange" placeholder="name@email.com" required="" />
                  </div>
                  <div>
                      <label htmlFor="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-Inter">Password</label>
                      <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={ev => setPassword(ev.target.value)} class="sm:text-sm rounded-lg block w-full p-2.5 bg-mm-smoke border-mm-dark placeholder-gray-400 text-white focus:ring-mm-orange focus:border-mm-orange" required="" />
                  </div>
                  <div>
                      <label htmlFor="password-confirmation" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-Inter">Confirm Password</label>
                      <input type="password" name="password_confirmation" id="password-confirmation" placeholder="Confirm Password" value={passwordConfirmation} onChange={ev => setPasswordConfirmation(ev.target.value)} class="sm:text-sm rounded-lg block w-full p-2.5 bg-mm-smoke border-mm-dark placeholder-gray-400 text-white focus:ring-mm-orange focus:border-mm-orange" required="" />
                  </div>
                  <button type="submit" class="w-full text-white bg-mm-sage hover:bg-mm-orange focus:ring-4 focus:outline-none focus:ring-mm-smoke font-medium rounded-lg text-sm px-5 py-2.5 text-center font-Inter uppercase">Create an account</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400 text-center font-Inter">
                      Already have an account? <a className="font-medium text-primary-600 hover:underline dark:text-primary-500"><Link to="/login">Login here</Link></a>
                  </p>
                </form>
          </div>
        </div>
  )
}





 