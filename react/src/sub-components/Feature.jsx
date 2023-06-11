import React from 'react'

import { BiDumbbell } from "react-icons/bi";
import { GoDeviceMobile } from "react-icons/go";
import { MdSupportAgent } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";


const Feature = () => {
  return (
    <section className='my-5 md:my-10'>
        <div className='lg:max-w-screen-xl md:max-w-[40rem] py-5 md:py-20 mx-auto'>
            <div className='container items-center md:items-start text-center md:text-start'>
                <h1 className='font-Anton text-white fluid-4xl md:fluid-2xl '>ELEVATE YOUR FITNESS. EMPOWER YOUR LIFE.</h1>
                <p className='font-Inter text-base text-white my-5'>Here is what you can expect when you join us today:</p>
            </div>

            <div className='container mx-auto grid mt-10 justify-between gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                <div className='bg-mm-orange flex flex-col items-center p-5 text-center max-w-xl mx-5 md:mx-0 lg:transition lg:duration-500 lg:hover:scale-105'>
                    <h2><BiDumbbell className='text-8xl' /></h2>
                    <h1 className='font-Anton text-4xl uppercase mt-5'>Equipment</h1>
                    <p className='mt-2 fluid-base'>This gym boasts state-of-the-art equipment to help you achieve your fitness goals.</p>  
                </div>
                <div className='bg-mm-orange flex flex-col items-center p-5 text-center max-w-xl mx-5 md:mx-0 lg:transition lg:duration-500 lg:hover:scale-105'>
                    <h2><GoDeviceMobile className='text-8xl ' /></h2>
                    <h1 className='font-Anton text-4xl uppercase mt-5'>mobile app</h1>
                    <p className='mt-2 fluid-base'>Get fit on-the-go with our gym's Android app, offering personalized workouts and progress tracking.</p> 
                   
                </div>
                <div className='bg-mm-orange flex flex-col items-center p-5 text-center max-w-xl mx-5 md:mx-0 lg:transition lg:duration-500 lg:hover:scale-105'>
                    <h2><MdSupportAgent className='text-8xl' /></h2>
                    <h1 className='font-Anton text-4xl uppercase mt-5'>chat support</h1>
                    <p className='mt-2 fluid-base'>Working out at this gym is made even better with their excellent chat support for any questions or motivation you need.</p> 
                  
                </div>
                <div className='bg-mm-orange flex flex-col items-center p-5 text-center max-w-xl mx-5 md:mx-0 lg:transition lg:duration-500 lg:hover:scale-105'>
                    <h2><IoIosPeople className='text-8xl' /></h2>
                    <h1 className='font-Anton text-4xl uppercase mt-5'>community</h1>
                    <p className='mt-2 fluid-base'>At this gym, you'll find a friendly and dedicated community of gym-goers who motivate and inspire each other to achieve their fitness goals. </p>   
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Feature

