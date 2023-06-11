import React from 'react'

const Newsletter = () => {
  return (
    <section className='mt-10 mb-48'>
        <div className='lg:max-w-screen-xl md:max-w-[40rem] mx-auto'>
            <div className='newsletterBg bg-cover h-58 rounded-lg mx-5 md:mx-0 py-14' >
                <div className='col items-center text-center w-full'>
                    <div className='items-center flex flex-col'>
                        <h1 className='text-white text-center fluid-2xl uppercase font-Anton'>build together <br /> our legendary future.</h1>
                        <p className='text-white fluid-base mt-2 line-clamp-3 p-2'>Hey there! Don't miss out on our latest updates and exclusive content. <br className='hidden md:flex' />Register now for our website newsletter and stay in the loop!</p>
                    </div>

                    <div className='max-w-2xl mx-auto mt-5 flex flex-col md:flex-row items-center justify-center p-3'>
                        <input id="city" type="text" placeholder="" class="w-11/12 md:w-9/12 lg:w-full rounded-full focus: focus:ring-opacity-100 focus:ring-mm-orange  text-gray-900" />
                        <a href="#" className="w-48 flex items-center px-9 py-2 justify-evenly bg-mm-orange text-mm-white text-center mt-5 md:mt-0 fluid-lg lg:fluid-base font-Inter font-semibold hover:bg-mm-sage transition duration-300 ease-in-out leading-normal rounded-full ml-2">
                            <span className='text-xl italic'>Register</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Newsletter