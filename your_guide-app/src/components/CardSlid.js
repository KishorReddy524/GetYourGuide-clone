import React from 'react'
import './cardslider.css'

const CardSlid = ({data}) => {
  return (
    <div className='cardcontainer'>
   <div className='slideImg'><img src={data.img}/></div>
   <div className='cardhedder'>
    <div><p>{data.headert}</p></div>
    <div><p>{data.headerb}</p></div>
   </div>
         </div>
  )
}

export default CardSlid
 