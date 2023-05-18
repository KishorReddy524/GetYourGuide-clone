import React from 'react'
import './homecate.css'

function Homecate({data}) {
  return (
    <div className='cate'>
         <div><p>{data.no}</p></div>
         <div><p>{data.cate}</p></div>
         </div>
  )
}

export default Homecate