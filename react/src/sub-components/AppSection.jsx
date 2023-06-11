import React from 'react'
import AndroidApp from '../assets/app.png'
import { IoLogoGooglePlaystore} from "react-icons/io5";

const AppSection = () => {
  return (
    <div className="lg:max-w-screen-xl md:max-w-[40rem] mx-auto">
        <div className='bg-mm-smoke px-28 py-8 rounded-lg lg:flex hidden'>
            <div className='container w-full grid grid-cols-2 items-center gap-2'>
                <div className='pl-2 flex flex-col'>
                    <h1 className='text-[4.8rem]/[6rem] font-Anton uppercase text-white justify-end'>
                    Download <br />
                    Our android App <br />
                    today.
                    </h1>
                    <p className='text-white font-Inter font-normal mt-5 text-xl'>Don't miss out on exclusive deals and convenient <br /> access to  fitness resources</p>
                    <button className="inline-flex items-center px-6 py-3 rounded-lg bg-mm-orange max-w-[15rem] mt-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current w-7 h-7 text-white">
                            <path d="M 5.4160156 2.328125 L 12.935547 10.158203 C 13.132547 10.363203 13.45925 10.363203 13.65625 10.158203 L 15.179688 8.5742188 C 15.405688 8.3392188 15.354312 7.956875 15.070312 7.796875 C 11.137313 5.571875 6.2620156 2.811125 5.4160156 2.328125 z M 3.140625 2.8476562 C 3.055625 3.0456562 3 3.2629063 3 3.5039062 L 3 20.591797 C 3 20.788797 3.044375 20.970625 3.109375 21.140625 L 11.576172 12.324219 C 11.762172 12.131219 11.762172 11.826813 11.576172 11.632812 L 3.140625 2.8476562 z M 17.443359 9.2578125 C 17.335484 9.2729375 17.233297 9.32375 17.154297 9.40625 L 15.015625 11.632812 C 14.829625 11.825812 14.829625 12.130219 15.015625 12.324219 L 17.134766 14.529297 C 17.292766 14.694297 17.546141 14.729188 17.744141 14.617188 C 19.227141 13.777188 20.226563 13.212891 20.226562 13.212891 C 20.725562 12.909891 21.007 12.443547 21 11.935547 C 20.992 11.439547 20.702609 10.981938 20.224609 10.710938 C 20.163609 10.676937 19.187672 10.124359 17.763672 9.3183594 C 17.664172 9.2623594 17.551234 9.2426875 17.443359 9.2578125 z M 13.296875 13.644531 C 13.165875 13.644531 13.034047 13.696328 12.935547 13.798828 L 5.4746094 21.566406 C 6.7566094 20.837406 11.328781 18.249578 15.050781 16.142578 C 15.334781 15.981578 15.386156 15.599281 15.160156 15.363281 L 13.65625 13.798828 C 13.55775 13.696328 13.427875 13.644531 13.296875 13.644531 z"></path>
                        </svg>
                        <span className="flex flex-col items-start ml-4 leading-none">
                            <span className="mb-1 text-xs text-white">GET IT ON</span>
                            <span className="font-semibold title-font text-white">Google Play</span>
                        </span>
			        </button>
                </div>
                <div className='flex justify-center'>
                    <img src={AndroidApp} className='h-[45rem]' alt="" />
                </div>
            </div>
        </div>

        <div>
            <div className='downloadBg bg-cover lg:hidden flex h-52 rounded-lg mx-5 md:mx-0'>
                <div className='col items-center text-center w-full pt-14'>
                    <div className='items-center flex flex-col'>
                        <h1 className='text-white text-center text-3xl uppercase font-Anton'>Download Our Android App today.</h1>
                        <button className="inline-flex items-center px-6 py-3 rounded-lg bg-mm-orange max-w-[15rem] mt-5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current w-7 h-7 dark:text-gray-900">
                                <path d="M 5.4160156 2.328125 L 12.935547 10.158203 C 13.132547 10.363203 13.45925 10.363203 13.65625 10.158203 L 15.179688 8.5742188 C 15.405688 8.3392188 15.354312 7.956875 15.070312 7.796875 C 11.137313 5.571875 6.2620156 2.811125 5.4160156 2.328125 z M 3.140625 2.8476562 C 3.055625 3.0456562 3 3.2629063 3 3.5039062 L 3 20.591797 C 3 20.788797 3.044375 20.970625 3.109375 21.140625 L 11.576172 12.324219 C 11.762172 12.131219 11.762172 11.826813 11.576172 11.632812 L 3.140625 2.8476562 z M 17.443359 9.2578125 C 17.335484 9.2729375 17.233297 9.32375 17.154297 9.40625 L 15.015625 11.632812 C 14.829625 11.825812 14.829625 12.130219 15.015625 12.324219 L 17.134766 14.529297 C 17.292766 14.694297 17.546141 14.729188 17.744141 14.617188 C 19.227141 13.777188 20.226563 13.212891 20.226562 13.212891 C 20.725562 12.909891 21.007 12.443547 21 11.935547 C 20.992 11.439547 20.702609 10.981938 20.224609 10.710938 C 20.163609 10.676937 19.187672 10.124359 17.763672 9.3183594 C 17.664172 9.2623594 17.551234 9.2426875 17.443359 9.2578125 z M 13.296875 13.644531 C 13.165875 13.644531 13.034047 13.696328 12.935547 13.798828 L 5.4746094 21.566406 C 6.7566094 20.837406 11.328781 18.249578 15.050781 16.142578 C 15.334781 15.981578 15.386156 15.599281 15.160156 15.363281 L 13.65625 13.798828 C 13.55775 13.696328 13.427875 13.644531 13.296875 13.644531 z"></path>
                            </svg>
                            <span className="flex flex-col items-start ml-4 leading-none">
                                <span className="mb-1 text-xs">GET IT ON</span>
                                <span className="font-semibold title-font">Google Play</span>
                            </span>
			            </button>
                    </div>
            
                </div>
            </div>
        </div>
    </div>


  )
}

export default AppSection