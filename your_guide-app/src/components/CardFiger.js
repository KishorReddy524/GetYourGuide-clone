import React from 'react'
import './cardFig.css'

function CardFiger({data}) {
  return (
    <div className='figCont'>
       <div className='figImg'><img src={data.img}/></div>
       <div className='figTitle'><p>{data.title}</p></div>
    </div>
  )
}

export default CardFiger