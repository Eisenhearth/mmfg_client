import React, { useRef, useState } from "react";
import Gymuser1 from "../assets/gym_user_1.jpg"

const Testimonial = () => {
  return (
    <section className='mt-5 md:mt-10'>
      <div className="lg:max-w-screen-xl md:max-w-[40rem] pb-5 pt-20 mx-auto">
          <div class="max-w-7xl items-end justify-between sm:flex">
              <h2 class="w-full text-5xl md:fluid-2xl text-white font-Anton uppercase text-center">
                  Read trusted reviews from our customers
              </h2>
          </div>
          <div className="container grid grid-cols-1 md:grid-cols-2 mx-auto mt-10 gap-4">
            <div className="bg-mm-smoke rounded-lg flex flex-col lg:flex-row p-3 md:p-5 items-center m-5 md:m-0">
              <div className="basis-1/2">
                <img alt="Man"src={Gymuser1} className="aspect-square w-full rounded-lg object-cover"/>
              </div>
              <blockquote className="sm:col-span-2 basis-1/2 p-5">
                <p className="lg:text-lg font-Inter font-normal text-base text-white">
                "Since I started going to the gym regularly,
                I have not only seen significant improvements in my physical health and fitness levels,
                but also in my overall mood and self-confidence"
                </p>
                <cite className="mt-8 inline-flex items-center not-italic">
                  <span className="hidden h-px w-6 bg-gray-400 sm:inline-block"></span>
                  <p className="text-sm uppercase text-gray-500 sm:ml-3">
                    <strong>Harry</strong>, Daan-Sarile, Cabanatuan City
                  </p>
                </cite>
              </blockquote>
            </div>
            <div className="bg-mm-smoke rounded-lg flex flex-col lg:flex-row p-5 items-center m-5 md:m-0">
              <div className="basis-1/2">
                <img alt="Man"src="https://lh3.googleusercontent.com/p/AF1QipNCFGwLOVGOAbADqoqwAD_7EvfkZopxEqK8YrxP=w768-h768-n-o-v1" className="aspect-square w-full rounded-lg object-cover"/>
              </div>
              <blockquote className="sm:col-span-2 basis-1/2 p-5">
                <p className="lg:text-lg font-Inter font-normal text-base text-white">
                "Thanks to the supportive environment and challenging workouts,
                I've been able to achieve my fitness goals
                and feel stronger and healthier than ever before."
                </p>
                <cite className="mt-8 inline-flex items-center not-italic">
                  <span className="hidden h-px w-6 bg-gray-400 sm:inline-block"></span>
                  <p className="text-sm uppercase text-gray-500 sm:ml-3">
                    <strong>Justin</strong>, Burgos, Cabanatuan City
                  </p>
                </cite>
              </blockquote>
            </div>
            <div></div>
          </div>
      </div>
    </section>
  )
}

export default Testimonial