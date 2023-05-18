import React from 'react'
import "./hedder.css"

const Hedder = () => {
  return (
    <div >
        
    <div className='hedder'>
    <div className='hedder-1'> 
        <div className=' '><img src='https://cdn.getyourguide.com/tf/assets/static/logos/gyg-logo-white.svg'/></div>
        
        <div className='ip '>
            <form className='search'>
                <h3>🔍</h3>
            <input placeholder='Where are you going?'/>
        <button>Search</button>
            </form>
        </div>
        </div>
        <div className='hedder-2'>
        <div className='slt'><select>
            <option>English</option>
            <option>Spanish</option>
            <option>Japanies</option>
            <option>Chaines</option>
            <option>Italion</option>
            <option>kannada</option>
            </select></div>
            <div className='slt'><select>
            <option>IND(₹)</option>
            <option>UK(£)</option>
            <option>US($)</option>
            <option>Euros(€)</option>
            <option>J.Yen(¥)</option>
            <option>C.Yuan(¥)</option>
            </select></div>
            <div className='cent'><h1>♡</h1></div>
            <div className='cent'><h1>🛒</h1></div>
            <div className='cent'><h1>?</h1></div>
            <div className='slt'><select>
            <option>Log...In</option>
            <option>History</option>
            <option>Apperence</option>
            <option>Downlode App</option>
            </select></div>
            <div className='cent' id='sign'><button>Sign Up</button></div>
            </div>
            </div>
    </div>
  )
}

export default Hedder