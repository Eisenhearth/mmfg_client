import React from 'react'
import { BsBank2 } from "react-icons/bs";
import Logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom';

export default function Payment() {

    return (
    <div className='max-w-6xl mx-auto mt-10'>
         <div className='grid grid-cols-2 grid-flow-col max-md:'>
                <div className='col-span-1'>
                    <NavLink to="/">
                        <a href="#" className='flex items-center md:ml-2'>
                            <img src={Logo} alt="logo-metal-muscle-fitness-gym" class="h-24 md:h-28 lg:h-[7.5rem]" />
                        </a>
                    </NavLink>
                    <div className='col-span-1 my-5 md:my-9 p-3 text-center md:text-start'>
                            <h1 className='font-Anton fluid-2xl text-white uppercase'>Payment</h1>
                            <p className='mt-5 text-white fluid-lg font-semibold tracking-normal'>Choose payment below</p>
                    </div>
                </div>
         </div>
        <div className='grid grid-cols-4 md:gap-10 gap-1 p-5'>
                <div className='col-span-4 md:col-span-2 p-5 md:p-0'>
                    <div className='flex flex-col mx-auto'>
                        <h2 className='text-white fluid-lg'><span className='border-2 border-mm-orange p-3 rounded-full mr-4'>01</span>Billing Info</h2>
                        <form className='grid grid-cols-4 gap-6 md:gap-4 mt-14'>
                            <div className='col-span-4 md:col-span-2'>
                                <label htmlFor="first-name" className='font-medium block text-white'>First Name</label>
                                <input type="text" id="first-name" className='text-white w-full rounded-lg shadow-sm mt-1 bg-mm-smoke border-gray-600 focus:ring-mm-orange focus:border-mm-orange' placeholder='Juan' />
                            </div>
                            <div className='col-span-4 md:col-span-2'>
                                <label htmlFor="last-name" className='font-medium block text-white'>Last Name</label>
                                <input type="text" id="last-name" className=' text-white w-full rounded-lg shadow-sm mt-1 bg-mm-smoke border-gray-600 focus:ring-mm-orange focus:border-mm-orange' placeholder='Dela Cruz' />
                            </div>
                            <div className='col-span-4 md:col-span-2'>
                                <label htmlFor="email" className='font-medium block text-white'>Email</label>
                                <input type="text" id="email" className='text-white w-full rounded-lg shadow-sm mt-1 bg-mm-smoke border-gray-600 focus:ring-mm-orange focus:border-mm-orange' placeholder='name@email.com' />
                            </div>
                            <div className='col-span-4 md:col-span-2'>
                                <label htmlFor="mobile-number" className='font-medium block text-white'>Phone Number</label>
                                <input type="text" id="mobile-number" className='text-white w-full rounded-lg shadow-sm mt-1 bg-mm-smoke border-gray-600 focus:ring-mm-orange focus:border-mm-orange' placeholder='+639XXXXXXXXX' />
                            </div>
                            <div className='col-span-4'>
                                <label htmlFor="address" className='font-medium block text-white'>Address</label>
                                <input type="text" id="address" className='text-white w-full rounded-lg shadow-sm mt-1 bg-mm-smoke border-gray-600 focus:ring-mm-orange focus:border-mm-orange' />
                            </div>
                        </form>
                    </div>
                </div>

                <div className="col-span-4 md:col-span-2 p-5">
                    <div className='flex flex-col mx-auto'>
                        <h2 className='text-white fluid-lg'><span className='border-2 border-mm-orange p-3 rounded-full mr-4'>02</span>Payment Methods</h2>
                        <div className='container grid grid-cols-4 mt-5 md:mt-10 gap-4 p-5 md:p-0'>
                            <div className='col-span-2'>
                                <label htmlFor="payment1" className='cursor-pointer'>
                                    <input className="peer hidden" type="radio" id="payment1" name='payment-method' />
                                    <div className='payment-content'>
                                        <img src="./src/assets/payment_logo/gcash_logo.png" alt="gcash-logo" className='rounded-xl bg-white p-9' />
                                    </div>
                                </label>
                            </div>
                            <div className='col-span-2'>
                                <label htmlFor="payment2" className='cursor-pointer'>
                                    <input className="peer hidden" type="radio" id="payment2" name='payment-method' />
                                    <div className='payment-content flex mx-auto justify-center bg-mm-black'>
                                        <img src="./src/assets/payment_logo/maya_logo.png" alt="maya-logo" className='rounded-xl p-9' />
                                    </div>
                                </label>
                            </div>
                            <div className='col-span-2'>
                                <label htmlFor="payment3" className='cursor-pointer'>
                                    <input className="peer hidden" type="radio" id="payment3" name='payment-method' />
                                    <div className='payment-content flex mx-auto justify-center bg-mm-black'>
                                        <img src="./src/assets/payment_logo/bank_transfer_logo.png" alt="maya-logo" className='rounded-xl bg-white p-9' />
                                    </div>
                                </label>
                            </div>
                            <div className='col-span-2'>
                                <label htmlFor="payment4" className='cursor-pointer'>
                                    <input className="peer hidden" type="radio" id="payment4" name='payment-method' />
                                    <div className='payment-content flex mx-auto justify-center bg-mm-black'>
                                        <img src="./src/assets/payment_logo/cash_on_hand_logo.png" alt="maya-logo" className='rounded-xl bg-white p-9' />
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-span-4 p-5 md:p-0'>
                    <div className='flex flex-col'>
                        <h2 className='text-white fluid-lg'><span className='border-2 border-mm-orange p-3 rounded-full mr-4'>03</span>Choose Your Perfect Session</h2>
                        <div className='grid grid-cols-10 mt-5 md:mt-10 md:gap-4 gap-2 p-5 md:p-0'>
                            <div className='col-span-5 md:col-span-2'>
                                <input type="checkbox" id="session1" className='hidden peer'required="" />
                                <label htmlFor="session1" className='inline-flex items-center justify-between w-full bg-mm-sage p-5  border-2 border-mm-smoke cursor-pointer peer-checked:bg-mm-orange peer-checked:border-orange-600'>
                                    <div className='block'>
                                        <h1 className='font-Anton italic fluid-2xl'>₱500</h1>
                                        <p className='font-bold text-xs'>Gym Membership</p>
                                    </div>
                                </label>
                            </div>
                            
                            <div className='col-span-5 md:col-span-2'>
                                <input type="checkbox" id="session2" className='hidden peer'required="" />
                                <label htmlFor="session2" className='inline-flex items-center justify-between w-full bg-mm-sage p-5  border-2 border-mm-smoke cursor-pointer peer-checked:bg-mm-orange peer-checked:border-orange-600'>
                                    <div className='block'>
                                        <h1 className='font-Anton italic fluid-2xl'>₱30</h1>
                                        <p className='font-bold text-xs'>Gym Session</p>
                                    </div>
                                </label>
                            </div>
                            <div className='col-span-5 md:col-span-2'>
                                <input type="checkbox" id="session3" className='hidden peer'required="" />
                                <label htmlFor="session3" className='inline-flex items-center justify-between w-full bg-mm-sage p-5  border-2 border-mm-smoke cursor-pointer peer-checked:bg-mm-orange peer-checked:border-orange-600'>
                                    <div className='block'>
                                        <h1 className='font-Anton italic fluid-2xl'>₱350</h1>
                                        <p className='font-bold text-xs'>Gym Session Monthly</p>
                                    </div>
                                </label>
                            </div>
                            <div className='col-span-5 md:col-span-2'>
                                <input type="checkbox" id="session4" className='hidden peer'required="" />
                                <label htmlFor="session4" className='inline-flex items-center justify-between w-full bg-mm-sage p-5 border-2 border-mm-smoke cursor-pointer peer-checked:bg-mm-orange peer-checked:border-orange-600'>
                                    <div className='block'>
                                        <h1 className='font-Anton italic fluid-2xl'>₱250</h1>
                                        <p className='font-bold text-xs line-clamp-2 leading-3'>Personal Training with Coach Program Per Session</p>
                                    </div>
                                </label>
                            </div>
                            <div className='col-span-5 md:col-span-2'>
                                <input type="checkbox" id="session5" className='hidden peer'required="" />
                                <label htmlFor="session5" className='inline-flex items-center justify-between w-full bg-mm-sage p-5 border-2 border-mm-smoke cursor-pointer peer-checked:bg-mm-orange peer-checked:border-orange-600'>
                                    <div className='block'>
                                        <h1 className='font-Anton italic fluid-2xl'>₱2000</h1>
                                        <p className='font-bold text-xs line-clamp-1 leading-3'>Personal Training with Coach Program Per Session(Monthly)</p>
                                    </div>
                                </label>
                            </div>
                            <div className='col-span-5 md:col-span-2'>
                                <input type="checkbox" id="session6" className='hidden peer'required="" />
                                <label htmlFor="session6" className='inline-flex items-center justify-between w-full bg-mm-sage p-[1.15rem] border-2 border-mm-smoke cursor-pointer peer-checked:bg-mm-orange peer-checked:border-orange-600'>
                                    <div className='block'>
                                        <h1 className='font-Anton italic fluid-2xl'>₱200</h1>
                                        <p className='font-bold text-xs'>Muay Thai Sessions</p>
                                    </div>
                                </label>
                            </div>
                            <div className='col-span-5 md:col-span-2'>
                                <input type="checkbox" id="session7" className='hidden peer'required="" />
                                <label htmlFor="session7" className='inline-flex items-center justify-between w-full bg-mm-sage p-5 border-2 border-mm-smoke cursor-pointer peer-checked:bg-mm-orange peer-checked:border-orange-600'>
                                    <div className='block'>
                                        <h1 className='font-Anton italic fluid-2xl'>₱4000</h1>
                                        <p className='font-bold text-xs line-clamp-1 leading-2'>Muay Thai Sessions Monthly</p>
                                    </div>
                                </label>
                            </div>
                            <div className='col-span-5 md:col-span-2'>
                                <input type="checkbox" id="session8" className='hidden peer'required="" />
                                <label htmlFor="session8" className='inline-flex items-center justify-between w-full bg-mm-sage p-5 border-2 border-mm-smoke cursor-pointer peer-checked:bg-mm-orange peer-checked:border-orange-600'>
                                    <div className='block'>
                                        <h1 className='font-Anton italic fluid-2xl'>₱150</h1>
                                        <p className='font-bold text-xs line-clamp-2 leading-3'>Boxing Sessions</p>
                                    </div>
                                </label>
                            </div>
                            <div className='col-span-5 md:col-span-2'>
                                <input type="checkbox" id="session9" className='hidden peer'required="" />
                                <label htmlFor="session9" className='inline-flex items-center justify-between w-full bg-mm-sage p-5 border-2 border-mm-smoke cursor-pointer peer-checked:bg-mm-orange peer-checked:border-orange-600'>
                                    <div className='block'>
                                        <h1 className='font-Anton italic fluid-2xl'>₱3500</h1>
                                        <p className='font-bold text-xs line-clamp-2 leading-3'>Boxing Sessions Monthly</p>
                                    </div>
                                </label>
                            </div>
                            <div className='col-span-5 md:col-span-2'>
                                <input type="checkbox" id="session10" className='hidden peer'required="" />
                                <label htmlFor="session10" className='inline-flex items-center justify-between w-full bg-mm-sage p-5 border-2 border-mm-smoke cursor-pointer peer-checked:bg-mm-orange peer-checked:border-orange-600'>
                                    <div className='block'>
                                        <h1 className='font-Anton italic fluid-2xl'>₱100</h1>
                                        <p className='font-bold text-xs line-clamp-2 leading-3'>Nintendo Switch Sports</p>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>  
                </div>

                <div className='col-span-4 mt-5'>
                    <div className='flex flex-col mx-auto max-w-xs md:max-w-md'>
                        <button className='px-6 py-3 bg-mm-orange font-inter font-extrabold tracking-wide hover:ring-8 hover:ring-mm-sage text-xl italic text-white hover:bg-mm-sage  transition duration-300 ease-in-out'>PROCEED TO PAYMENT</button>
                    </div>
                </div>
        </div>
    </div>
  )
}

