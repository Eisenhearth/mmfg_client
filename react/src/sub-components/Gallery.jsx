import React, { useState } from 'react'
import FsLightbox from "fslightbox-react";


export default function Gallery() {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    sourceIndex: 0
  });

  function openLightboxOnSource(sourceIndex) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      sourceIndex: sourceIndex
    });
  }
 
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-2 px-10 lg:px-0'>
      <div onClick={() => openLightboxOnSource(0)}>
            <img src='./src/assets/gallery/IMAGE_1.jpg'/>
        </div>
        
        <div onClick={() => openLightboxOnSource(1)}>
            <img src="./src/assets/gallery/IMAGE_2.jpg"/>
        </div>
        <div onClick={() => openLightboxOnSource(2)}>
            <img src="./src/assets/gallery/IMAGE_3.jpg"/>
        </div>
        <div onClick={() => openLightboxOnSource(3)}>
            <img src="./src/assets/gallery/IMAGE_4.jpg"/>
        </div>
        <div onClick={() => openLightboxOnSource(4)}>
            <img src="./src/assets/gallery/IMAGE_5.jpg"/>
        </div>
        <div onClick={() => openLightboxOnSource(5)}>
            <img src="./src/assets/gallery/IMAGE_6.jpg"/>
        </div>
      
      <FsLightbox
          toggler={lightboxController.toggler}
          sourceIndex={lightboxController.sourceIndex}
          thumbs={[
            null,
              "./src/assets/gallery/IMAGE_1.jpg",
              "./src/assets/gallery/IMAGE_2.jpg",
              "./src/assets/gallery/IMAGE_3.jpg",
              "./src/assets/gallery/IMAGE_4.jpg",
              "./src/assets/gallery/IMAGE_5.jpg",
              "./src/assets/gallery/IMAGE_6.jpg"
          ]}
          sources={[
              "./src/assets/gallery/IMAGE_1.jpg",
              "./src/assets/gallery/IMAGE_2.jpg",
              "./src/assets/gallery/IMAGE_3.jpg",
              "./src/assets/gallery/IMAGE_4.jpg",
              "./src/assets/gallery/IMAGE_5.jpg",
              "./src/assets/gallery/IMAGE_6.jpg"
          ]}
        />
    </div>
  )
}


