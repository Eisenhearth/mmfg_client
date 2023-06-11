import React, { Fragment } from 'react'
import Logo from '../assets/logo.png'
import { NavLink, Link } from "react-router-dom";
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { FaUserAlt } from "react-icons/fa";
import axiosClient from "../axios";
import { useStateContext } from "../contexts/ContextProvider";

const Nav = () => {
  const { currentUser, userToken, setCurrentUser, setUserToken } = useStateContext();
  
  const navigation = [
    { name: 'Home', to: '/' },
    { name: 'Pricing', to: '/pricing' },
    { name: 'Contact', to: '/contact' },
    { name: 'About', to: '/about' },
  ]

  const logout = (ev) => {
    ev.preventDefault();
    axiosClient.post("/logout").then((res) => {
      setCurrentUser({});
      setUserToken(null);
    });
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  


  return (
    <nav className='bg-mm-black sticky lg:fixed w-full top-0 left-0 z-50'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2'>
            <NavLink to="/">
              <a href="#" className='flex items-center md:ml-2'>
                  <img src={Logo} alt="logo-metal-muscle-fitness-gym" class="h-24 md:h-28 lg:h-[7.5rem]" />
              </a>
            </NavLink>

            <input type="checkbox" name="hamburger" id="hamburger" class="peer hidden" />
              <label for="hamburger" className="peer-checked:hamburger block relative z-20 p-4 -mr-2 md:-mr-0 cursor-pointer lg:hidden">
                <div aria-hidden="true" className="m-auto h-0.5 w-8 rounded bg-mm-white transition duration-300"></div>
                <div aria-hidden="true" className="m-auto mt-2 h-0.5 w-8 rounded bg-mm-white transition duration-300"></div>
            </label>

            <div className="peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] bg-mm-black shadow-xl transition duration-300">
                  <div className="flex flex-col h-full justify-between lg:items-center lg:flex-row">
                    <ul className="px-10 pt-40 md:px-12 space-y-10 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0">
                     {navigation.map((item) => 
                     <li>
                      <NavLink to={item.to} key={item.name} className="relative text-mm-white fluid-lg font-Inter font-medium lg:fluid-base">
                        <span>{item.name}</span>
                      </NavLink>
                     </li>
                     )}
                    </ul>

                    <div className="py-8 px-6 md:12 md:py-16 lg:border-t-0 lg:py-0">
                      <a onClick={(ev) => logout(ev)} className="block px-6 py-3 bg-mm-orange text-mm-white text-center fluid-lg lg:fluid-base font-Inter font-semibold">
                        Logout
                      </a>
                    </div>
                  </div>
              </div>
            
            
                <div className="py-8 px-4  md:py-16 lg:border-t-0 lg:py-0 md:order-2 hidden lg:flex">
                  <Menu as="div" className="relative">
                          <div>
                            <Menu.Button className="flex max-w-xs items-center rounded-full bg-mm-orange text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                              <span className="sr-only">Open user menu</span>
                              <FaUserAlt className='text-white w-10 h-10 p-2'/>
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-mm-smoke py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <Menu.Item>
                              <Link to="/dashboard">
                                <a className={"block px-4 py-2 text-sm text-white"}>
                                  Account Settings
                                </a>
                              </Link>
                              </Menu.Item>
                              <Menu.Item>
                              <Link to="/dashboard">
                                <a className={"block px-4 py-2 text-sm text-white"}>
                                  Dashboard
                                </a>
                              </Link>
                              </Menu.Item>
                              <Menu.Item>
                              <a href="#" onClick={(ev) => logout(ev)} className={"block px-4 py-2 text-sm text-white"}>
                                Sign out
                              </a>
                              </Menu.Item>
                              
                            </Menu.Items>
                          </Transition>
                    </Menu>
                </div>
           

            <div className='items-center hidden lg:flex md:ml-16'>
                <ul className='grid grid-col-3 grid-flow-col gap-16 lg:mr-24'>
                {navigation.map((item)=> 
                  <li>
                    <NavLink to={item.to} key={item.name} className={({ isActive }) => classNames(
                      isActive
                        ? "block py-2 text-mm-white text-[1.2rem] font-Inter font-medium hover:text-mm-orange transition duration-300 uppercase underline underline-offset-8 decoration-4 decoration-mm-orange"
                        : "block py-2 text-mm-white text-[1.2rem] font-Inter font-medium hover:text-mm-orange transition duration-300 uppercase"
                    )}>
                      <span>{item.name}</span>
                    </NavLink>
                  </li> 
                  )}
                </ul>
            </div>
        </div>
        
    </nav>
  )
}

export default Nav

