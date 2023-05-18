import React from 'react'
import "./homepage.css"
import {data} from "./data"
import {HomeCards} from './HomeCards'
import HomeSlider from './HomeSlider'
import HomeFiger from './HomeFiger'
import Homecate from './Homecate'
import {cateData} from './cateData'
import Footer from './Footer'

export const Homepage = () => {
  return (
    <div>
    <div className='home_img'>
        <div className='home_text'><h1 >Travel memories<br/> you'll never forget</h1>
     <br/>   <h5>Turning the lights on at the Vatican Museums</h5><br/>
     <h6>Learn more {">"}</h6></div>
     
          </div>
    <div className='allContent'>    
          <div className='cardHedder'><h1>Unforgettable cultural experiences</h1></div>
     <div  className='homecards'>
        {/* <HomeCards/> */}

     {data.map((e)=><HomeCards data={e}/>)}
      
     </div>
     <div>
      <div className='cardHedder'><h1>Top cultural sights you can't miss</h1></div>
      <div className='cardSlider'><HomeSlider /></div>
     </div>
     <div>
      <div className='cardHedder'><h1 style={{margin:"15px 0px"}}>Culture eccezionali in giro per il mondo</h1></div>
     <div ><HomeFiger/></div>
     </div>
     <div>
      <div className='cardHedder'><h1 style={{margin:"15px 0px"}}>Top attraction categories</h1></div>
      <div className='catedata'>
        {cateData.map((e)=><Homecate data={e}/>)}
      </div>
     </div>
      </div> 
      <div><Footer/></div>

      </div>        
  )
}
