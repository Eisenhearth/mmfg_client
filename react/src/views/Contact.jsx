import React from 'react'
import Nav2 from '../sub-components/Nav'
import { GrFacebook } from "react-icons/gr";
import { BsInstagram, BsFillTelephoneFill} from "react-icons/bs";

const Contact = () => {
  return (
    <div className='mx-auto'>

      <Nav2 />
      <section className='py-16 md:py-10 lg:py-48 lg:max-w-screen-xl md:max-w-[40rem] mx-auto'>
        <div className='mx-auto'>
          <div className='text-center'>
            <h1 className="font-Anton tracking-wider uppercase text-3xl lg:text-6xl text-white">
              Contact us
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
               We'd love to talk about how we can help you.
            </p>
          </div>

          <div className='mt-12 max-w-xl mx-auto'>
            <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 border-mm-smoke">
              <h2 class="mb-8 text-2xl font-semibold text-gray-200">
              Fill in the form
              </h2>

              <form>
                <div className="grid gap-4 lg:gap-6">

                  <div className='flex flex-col p-4 sm:p-6 lg-p-8'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                      <div>
                        <label for="hs-firstname-contacts-1" class="block text-sm text-gray-700 font-medium dark:text-white">First Name</label>
                        <input type="text" name="hs-firstname-contacts-1" id="hs-firstname-contacts-1" className="py-3 px-4 block w-full  rounded-md text-sm focus:border-mm-orange focus:ring-mm-orange bg-mm-smoke border-mm-smoke text-gray-400 mt-2" />
                      </div>

                      <div>
                        <label for="hs-lastname-contacts-1" class="block text-sm text-gray-700 font-medium dark:text-white">Last Name</label>
                        <input type="text" name="hs-lastname-contacts-1" id="hs-lastname-contacts-1" className="py-3 px-4 block w-full rounded-md text-sm focus:border-mm-orange focus:ring-mm-orange bg-mm-smoke border-mm-smoke text-gray-400 mt-2" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mt-2">
                      <div>
                        <label for="hs-firstname-contacts-1" class="block text-sm text-gray-700 font-medium dark:text-white">Email</label>
                        <input type="email" name="hs-email-contacts-1" id="hs-email-contacts-1" autocomplete="email" className="py-3 px-4 block w-full  rounded-md text-sm focus:border-mm-orange focus:ring-mm-orange bg-mm-smoke border-mm-smoke text-gray-400 mt-2" />
                      </div>

                      <div>
                        <label for="hs-lastname-contacts-1" class="block text-sm text-gray-700 font-medium dark:text-white">Phone Number</label>
                        <input type="text" name="hs-phone-number-1" id="hs-phone-number-1" className="py-3 px-4 block w-full rounded-md text-sm focus:border-mm-orange focus:ring-mm-orange bg-mm-smoke border-mm-smoke text-gray-400 mt-2" />
                      </div>
                    </div>

                    <div className='mt-5'>
                      <label for="hs-about-contacts-1" class="block text-sm text-gray-700 font-medium dark:text-white">Details</label>
                      <textarea id="hs-about-contacts-1" name="hs-about-contacts-1" rows="4" className="py-3 px-4 block w-full rounded-md text-sm focus:border-mm-orange focus:ring-mm-orange bg-mm-smoke border-mm-smoke text-gray-400 mt-2"></textarea>
                    </div>

                    <div class="mt-6 grid">
                      <button type="submit" class="inline-flex justify-center items-center gap-x-3 text-center bg-mm-orange hover:bg-mm-sage border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800">Send inquiry</button>
                    </div>

                    
                  </div>

                </div>
              </form>
            </div>

          </div>


          <div class="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-4 lg:gap-8">
            <a class="flex flex-col h-full text-center rounded-md hover:bg-gray-100 p-4 sm:p-6 hover:bg-white/[.05]" href="#">
              <GrFacebook className='text-mm-orange mx-auto text-5xl' />
              <div class="grow mt-2">
                <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200">Metal Muscle Fitness Gym</h3>
                <p class="mt-1 text-gray-500">If you have any inquiries or questions, please feel free to message our Facebook page.</p>
                <p class="mt-5 inline-flex items-center gap-x-2 font-medium text-mm-orange"> Proceed to our Facebook Page
                  <svg class="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/>
                  </svg>
               </p>
              </div>
            </a>

            <a class="flex flex-col h-full text-center rounded-md hover:bg-gray-100 p-4 sm:p-6 hover:bg-white/[.05]" href="#">
              <BsInstagram className='text-mm-orange mx-auto text-5xl'/>
              <div class="grow mt-2">
                <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200">@mmfg_ph</h3>
                <p class="mt-1 text-gray-500">Get ready to be inspired and entertained by following our Instagram account!</p>
                <p class="mt-5 inline-flex items-center gap-x-2 font-medium text-mm-orange"> Follow our Instagram
                  <svg class="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/>
                  </svg>
               </p>
              </div>
            </a>
            <a class="flex flex-col h-full text-center rounded-md hover:bg-gray-100 p-4 sm:p-6 hover:bg-white/[.05]" href="#">
              <BsFillTelephoneFill className='text-mm-orange mx-auto text-5xl'/>
              <div class="grow mt-2">
                <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200">09062-554-714 / 0997-776-355</h3>
                <p class="mt-1 text-gray-500">Interested in achieving your fitness goals? Inquire today about our gym and let us help you on your journey to a healthier lifestyle!</p>
                <p class="mt-5 inline-flex items-center gap-x-2 font-medium text-mm-orange"> Call us through our phone number
                  <svg class="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/>
                  </svg>
               </p>
              </div>
            </a>
          </div>
        </div>
      </section>
    
    </div>
    )
}

export default Contact