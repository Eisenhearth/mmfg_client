import React from 'react'
import { ImCross } from "react-icons/im";

const Marquee = () => {
  return (
    <div className="relative flex overflow-x-hidden bg-mm-sage z-40">
        <div class="py-4 animate-marquee whitespace-nowrap">
          <span class="mx-6 text-4xl lg:text-5xl font-Anton italic">WORLD CLASS TRAINER</span>
          <span class="mx-6 text-4xl lg:text-5xl font-Anton italic">SUPPORTIVE COMMUNITY</span>
          <span class="mx-6 text-4xl lg:text-5xl font-Anton italic">BEGINNER'S FRIENDLY</span>
          <span class="mx-6 text-4xl lg:text-5xl font-Anton italic">AFFORDABLE</span>
          <span class="mx-6 text-4xl lg:text-5xl font-Anton italic">WELL-EQUIPPED</span>
        </div>

        <div class="absolute top-0 py-4 animate-marquee2 whitespace-nowrap">
          <span class="mx-6 text-4xl lg:text-5xl font-Anton italic">WORLD CLASS TRAINER</span>
          <span class="mx-6 text-4xl lg:text-5xl font-Anton italic">SUPPORTIVE COMMUNITY</span>
          <span class="mx-6 text-4xl lg:text-5xl font-Anton italic">BEGINNER'S FRIENDLY</span>
          <span class="mx-6 text-4xl lg:text-5xl font-Anton italic">AFFORDABLE</span>
          <span class="mx-6 text-4xl lg:text-5xl font-Anton italic">WELL-EQUIPPED</span>
        </div>
    </div>
  )
}

export default Marquee