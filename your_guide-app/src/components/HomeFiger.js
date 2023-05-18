import React from 'react'
import CardFiger from './CardFiger'
import {fdata} from './figData'
import './cardFig.css'

function HomeFiger() {
  return (
    <div className='homefig' > 
        
        {fdata.map((e)=><CardFiger data={e}/>)}
        </div>
  )
}

export default HomeFiger