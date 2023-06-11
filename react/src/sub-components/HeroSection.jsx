import React from 'react'
import Hero from '../assets/hero.png'
import { Link } from 'react-router-dom'

const HeroSection = () => {
    return (
    <div className='w-full bg-center bg-cover h-[35rem] lg:h-[61rem] bgImg'>
      <div class="flex items-start lg:items-center justify-center w-full h-full bg-mm-dark bg-opacity-70 py-20 lg:py-96">
            <div class="text-center max-w-4xl pt-16 lg:pt-0">
                <h1 class="text-white uppercase font-Anton text-6xl md:text-8xl lg:text-9xl">WE TAKE <br /> FITNESS TO A <br/> <span className='italic font-Anton'>WHOLE NEW LEVEL</span></h1>
                <div className="py-8 px-4 lg:border-t-0 lg:py-0 md:order-2 flex justify-center lg:mt-10">
                    <Link to="/pricing">
                    <a href="#" className="flex items-center px-9 py-3 lg:py-5 lg:px-10 justify-evenly bg-mm-orange text-mm-white text-center fluid-base lg:fluid-lg font-Inter font-semibold hover:ring-8 hover:ring-mm-sage hover:bg-mm-sage transition duration-300 ease-in-out leading-normal italic">
                            <span>Get Started</span>
                    </a>
                    </Link>
                </div>
            </div>
        </div>
    </div>

    
  )
}

export default HeroSection