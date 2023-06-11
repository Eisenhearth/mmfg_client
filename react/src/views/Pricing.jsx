import React, { useState } from 'react'
import Nav2 from '../sub-components/Nav'
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';

const Pricing = () => {
  const [bmi, setBmi] = useState();
  const [info, setInfo] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const handleBmi = () => {
    let val = (
      [Number(weight) / Number(height) / Number(height)] * 10000
    ).toFixed(1);
    setBmi(`Here is your Bmi Result: ${val}`);
    if (val < 18.5) {
      setInfo("You are Under Weight");
    } else if (val > 18.5 && val <= 24.9) {
      setInfo("Your are Healthy");
    } else if (val > 24.9 && val < 30) {
      setInfo("Your are Overweight");
    } else {
      setInfo("Your are Obese");
    }
  };
  
  
  return ( 
    <div>

    <Nav2 />
    <main className='py-16 md:py-10 lg:py-48 lg:max-w-screen-xl md:max-w-[40rem] mx-auto'>
      <div className='p-10 md:p-4 mx-auto'>
        <h1 className=" text-5xl md:text-7xl leading-none text-white text-center font-Anton">THE MORE YOU SWEAT IN TRAINING, <br /> THE LESS YOU BLEED IN COMBAT</h1>
      </div>
      <div className='container mx-auto flex flex-col items-center justify-center max-w-lg p-4 sm:p-10 lg:flex-row'>
        <div className='flex flex-col items-center flex-1 p-8 md:p-4 lg:p-16 pb-8 bg-mm-orange rounded-lg  lg:transition lg:duration-500 lg:hover:scale-110'>
          <p className='font-Inter font-black uppercase text-center text-3xl leading-none'>Get a Lifetime Membership for Only</p>
          <h1 className='font-Anton lg:fluid-3xl fluid-6xl pt-5'>₱500</h1>
          <Link to="/payment">
          <button className='mt-10 px-6 py-3 bg-mm-black font-inter font-extrabold tracking-wide hover:ring-8 hover:ring-mm-sage text-xl italic text-white hover:bg-mm-sage  transition duration-300 ease-in-out'>GET A MEMBERSHIP</button>
          </Link>
        </div>
      </div>

      <div class="container mx-auto p-6 overflow-x-auto mt-14 lg:mt-24">
        <h1 className='font-Anton text-white fluid-4xl md:fluid-2xl uppercase text-center lg:text-start'>Our Services</h1>
        <table className='w-full mt-10'>
          <caption className='sr-only'>Pricing Plan Comparison</caption>
            <thead>
              <tr>
                <th></th>
                <th scope="col">
                  <h2 className='px-2 text-sm md:text-lg lg:text-xl font-Inter font-semibold text-white italic'>Non-Member</h2>
                </th>
                <th scope="col">
                  <h2 className='px-2 text-sm md:text-lg lg:text-xl font-Inter font-semibold text-white italic'>With Membership</h2>
                </th>
              </tr>
            </thead>

            <tbody className='space-y-6 text-center divide-y'>
              <tr>
                <th scope="row" className="text-left">
                  <h3 className="py-3 text-base md:text-lg text-white">Gym Session</h3>
                </th>
                <td>
                  <span className="block text-base md:text-lg text-white">₱50</span>
                </td>
                <td>
                  <span className="block text-base md:text-lg text-white">₱30</span>
                </td>
              </tr>
              <tr>
                <th scope="row" class="text-left">
                  <h3 className="py-3 text-base md:text-lg text-white">Gym Monthly Session</h3>
                </th>
                <td>
                  <span class="block text-base md:text-lg text-mm-orange"><ImCross className='mx-auto' /></span>
                </td>
                <td>
                  <span className="block text-base md:text-lg text-white">₱500</span>
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-left">
                  <h3 className="py-3 text-base md:text-lg text-white">Gym Half Month Session</h3>
                </th>
                <td>
                  <span className="block text-base md:text-lg text-mm-orange font-Anton"><ImCross className='mx-auto' /></span>
                </td>
                <td>
                  <span className="block text-base md:text-lg text-white">₱350</span>
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-left">
                  <h3 className="py-3 text-base md:text-lg text-white">Personal Training with Coach Program Per Session</h3>
                </th>
                <td>
                  <span className="block text-base md:text-lg text-white">₱350</span>
                </td>
                <td>
                  <span className="block text-base md:text-lg text-white">₱250</span>
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-left">
                  <h3 className="py-3 text-base md:text-lg text-white">Personal Training with Coach Program Per Session and Meal Prep Guide (Monthly)</h3>
                </th>
                <td>
                  <span className="block text-base md:text-lg text-mm-orange"><ImCross className='mx-auto' /></span>
                </td>
                <td>
                  <span className="block text-base md:text-lg text-white">₱2000</span>
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-left">
                  <h3 className="py-3 text-base md:text-lg text-white">Muay Thai Sessions</h3>
                </th>
                <td>
                  <span className="block text-base md:text-lg text-white">₱400</span>
                </td>
                <td>
                  <span className="block text-base md:text-lg text-white">₱200</span>
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-left">
                  <h3 className="py-3 text-base md:text-lg text-white">Muay Thai Sessions Monthly</h3>
                </th>
                <td>
                  <span className="block text-base md:text-lg text-mm-orange"><ImCross className='mx-auto' /></span>
                </td>
                <td>
                  <span className="block text-base md:text-lg text-white">₱4000</span>
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-left">
                  <h3 className="py-3 text-base md:text-lg text-white">Boxing Sessions</h3>
                </th>
                <td>
                  <span className="block text-base md:text-lg text-white">₱350</span>
                </td>
                <td>
                  <span className="block text-base md:text-lg text-white">₱150</span>
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-left">
                  <h3 className="py-3 text-base md:text-lg text-white">Boxing Sessions Monthly</h3>
                </th>
                <td>
                  <span className="block text-base md:text-lg text-mm-orange"><ImCross className='mx-auto' /></span>
                </td>
                <td>
                  <span className="block text-base md:text-lg text-white">₱3500</span>
                </td>
              </tr>
            </tbody>
        </table>
	    </div>


      <div className='container mx-auto p-8 overflow-x-auto mt-14 lg:mt-24 bg-mm-smoke rounded-none md:rounded-lg py-16 md:py-10'>
        <h1 className='font-Anton text-white fluid-4xl md:fluid-2xl uppercase text-center mt-5'>BMI Calculator</h1>
        <p className='font-Inter text-base text-white my-5 text-center'>Body mass index (BMI) is a measure of body fat based on height and weight that applies to adult men and women.</p>

        <div className='max-w-5xl grid md:grid-cols-2 mt-14 mx-auto grid-cols-1'>
          <div className='flex flex-col items-center'>
            <h1 className='mb-2 text-white font-semibold'>Your Height</h1>
            <input type="text" onChange={(e) => setHeight(e.target.value)}placeholder="Height in cm" className='rounded-lg w-3/6 border-mm-smoke focus:ring-mm-orange focus:border-mm-orange'/>
          </div>
          <div className='flex flex-col items-center mt-5 md:mt-0'>
          <h1 className='mb-2 text-white font-semibold'>Your Weight</h1>
          <input type="text" onChange={(e) => setWeight(e.target.value)}placeholder="Weight in kg" className='rounded-lg w-3/6 border-mm-smoke focus:ring-mm-orange focus:border-mm-orange'/>
          </div>
        </div>

        <div className='flex flex-col mx-auto mt-10'>
          <div className='flex flex-col mx-auto text-center'>
            <h1 className='text-white text-xl'>{bmi}</h1>
            <h2 className='text-white text-xl'>{info}</h2>
          </div>
          <button onClick={handleBmi} className='mt-5 px-6 py-3 mx-auto bg-mm-orange font-inter font-extrabold tracking-wide hover:ring-4 hover:ring-mm-sage text-xl italic text-white hover:bg-mm-sage  transition duration-300 ease-in-out'>Calculate</button>
        </div>
        
 
      </div>

    </main>

    </div>
  )
}

export default Pricing


