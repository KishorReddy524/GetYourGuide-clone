 import React from 'react'
  import './homecardes.css'
 
 export const HomeCards = ({data}) => {
   return (
    <div className='container'>
     <div className='cardBox'>
        <div><img src={data.img}/>
        <i class="fa fa-heart-o" id="heart" ></i></div>
     <div className='cardData'>
        <div><h4>Entery ticket</h4></div>
        <div><h3>Vatican: Museums & Sistine Chapel Entrance Ticket</h3></div>
        <div><h4>{ data.duration}<br/> Optional audio guid</h4></div>
        <div className='cardLast'>
        <i class='fa fa-star checked'></i>
        <i class='fa fa-star checked'></i>
        <i class='fa fa-star checked'></i>
        <i class='fa fa-star'></i>
        <i class='fa fa-star'></i>
        <div className='cost'><h4>From {data.price}</h4><p>Per Person</p></div>
            
            </div>
        


     </div>
     </div>
     </div>
   )
 }
 