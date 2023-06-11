import React, { useState } from 'react'
import Nav2 from '../sub-components/Nav'
import Gallery from '../sub-components/Gallery';
import Logo from '../assets/logo.png'


const About = () => {
 
  return (

    <section>
      <Nav2 />
      <div className='aboutBg bg-cover w-full bg-right h-[15rem] lg:h-[40rem]'>
        <div className='flex mx-auto p-20 lg:p-[18rem] text-center justify-center'>
            <h1 className='text-white text-6xl lg:fluid-4xl font-Anton uppercase italic'>About Us</h1>
        </div>
      </div>

      <div className='mt-2 md:mt-12 mx-auto md:max-w-2xl lg:max-w-6xl text-justify p-10 md:p-5 '>
        <p className='text-white text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, tenetur? Officiis aspernatur unde molestiae laborum enim? Quia, debitis id ab esse vero facilis quidem minima placeat nobis fugit unde dolore.
        Adipisci, iusto dolorum, ad blanditiis dicta consequuntur obcaecati error natus provident doloribus quis ut expedita amet nemo, repellendus placeat quas officiis rem. Laborum assumenda repudiandae animi earum impedit eum eius!
        Eius aliquid illo maxime tenetur, quasi alias aspernatur nesciunt similique autem doloremque ut placeat? Nihil voluptatum odit perspiciatis! Temporibus totam reprehenderit quae perferendis deleniti autem nisi nemo voluptatum excepturi sequi.
        Id quo deserunt magni optio quaerat eaque itaque nulla nobis qui repellendus dolores blanditiis, placeat excepturi, non dolore doloribus recusandae sequi, repellat eum! Nisi recusandae fugiat amet libero, dignissimos adipisci.
        Iste, repellendus! Quia fuga, eum et voluptatibus provident dicta incidunt alias illum aspernatur repellendus repudiandae velit facilis quae officia voluptates vero. Ad nisi excepturi non, unde corrupti aspernatur error quibusdam!
        Rem ullam sint dignissimos aliquid. Nisi labore iure corporis incidunt sint perspiciatis ea ipsam fugit, ullam eos natus esse voluptatibus enim non vero fugiat commodi quibusdam odit eaque odio expedita.
        Voluptatum, quo? Adipisci eveniet vero temporibus alias modi quo! Eum corrupti voluptatum inventore voluptates. At esse saepe consectetur ut quia doloremque eveniet, enim similique nemo earum totam omnis, itaque eum!
        Iure molestias recusandae molestiae quae eius explicabo, vitae at aspernatur qui ducimus nam inventore esse rerum labore blanditiis vel, deleniti aut sed illum, nobis alias tempora facere odio rem. Praesentium?
        Error possimus ut veniam quam ipsum modi nesciunt? Aspernatur incidunt iusto voluptas nostrum. Ab, consectetur. Sunt expedita error officiis soluta et numquam. Corporis qui molestiae architecto id sequi. Incidunt, repellat.
        Doloribus consectetur similique labore accusamus voluptas nobis facilis? Debitis in possimus inventore deleniti doloremque tenetur odio fugiat repellendus. Corrupti similique doloribus aperiam quas. Quibusdam, esse impedit eos doloribus a libero.</p>
      </div>

      <div className='max-w-6xl mt-5 mx-auto'>
        <h1 className='font-Anton text-white fluid-4xl lg:fluid-2xl uppercase text-center lg:text-start my-10'>Images</h1>
        <Gallery />
      </div>

      <div className='max-w-6xl mt-5 mx-auto py-10' >
        <h1 className='font-Anton text-white fluid-4xl lg:fluid-2xl uppercase text-center lg:text-start my-10'>Our Location</h1>
        <iframe className='w-full h-96 p-5 lg:p-0' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246009.66799762743!2d120.87222048986281!3d15.543433687642986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339729a82c997295%3A0x4f9ecfb0719d3518!2sMetal%20Muscle%20Gym!5e0!3m2!1sen!2sph!4v1681775681312!5m2!1sen!2sph" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <p className='text-center text-white italic mt-2'>In front of Irabon Apartment, San Josef Sur Purok 1, Cabanatuan City, 3100 Nueva Ecija</p>
      </div>



      
    </section>
  )
}

export default About