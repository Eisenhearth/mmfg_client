import React from 'react'

const BannerReport = () => {
  return (
    <div className='w-full bg-mm-sage py-5'>
        <div className="container grid mx-auto max-w-xl md:max-w-3xl lg:max-w-6xl grid-cols-3">
            <div className='flex flex-col items-center'>
                <h1 className='fluid-3xl font-Anton'>150+</h1>
                <h2 className='uppercase font-Anton fluid-xl mt-2'>customers</h2>
            </div>
            <div className='flex flex-col items-center'>
                <h1 className='fluid-3xl font-Anton'>12</h1>
                <h2 className='uppercase font-Anton fluid-xl mt-2'>awards</h2>
            </div>
            <div className='flex flex-col items-center'>
                <h1 className='fluid-3xl font-Anton'>1</h1>
                <h2 className='uppercase font-Anton fluid-xl mt-2'>Branch</h2>
            </div>
        </div>
        
    </div>
  )
}

export default BannerReport