import React from 'react'
import Nav2 from '../sub-components/Nav'
import HeroSection from '../sub-components/HeroSection'
import Marquee from '../sub-components/Marquee'
import Feature from '../sub-components/Feature'
import BannerReport from '../sub-components/BannerReport'
import Testimonial from '../sub-components/Testimonial'
import AppSection from '../sub-components/AppSection'
import Newsletter from '../sub-components/Newsletter'


const Home = () => {
  return (
    <div>
        <Nav2 />
        <HeroSection />
        <Marquee />
        <Feature />
        <BannerReport />
        <Testimonial />
        <AppSection />
        <Newsletter />
    </div>
  )
}

export default Home