import React from 'react'
 
 import {cdata} from './cardData'
import CardSlid from './CardSlid';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
 

const HomeSlider = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
     
  return (
   
      <Carousel responsive={responsive}>
    
         
        {cdata.map((e)=><CardSlid data={e}/>)}

         </Carousel>
      

  )
}

export default HomeSlider