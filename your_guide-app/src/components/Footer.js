import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer1'>
      <div className='finputs'>
      <label for="cars">Language</label>
      <select >
            <option>English</option>
            <option>Spanish</option>
            <option>Japanies</option>
            <option>Chaines</option>
            <option>Italion</option>
            <option>kannada</option>
            </select>
            <label for="cars">Currency</label>
            <select>
            <option>INDIAN(₹)</option>
            <option>UK(£)</option>
            <option>US($)</option>
            <option>Euros(€)</option>
            <option>J.Yen(¥)</option>
            <option>C.Yuan(¥)</option>
            </select>

      </div>
      <div className='mobile'>
        <p>Mobile</p>
        <img src='https://cdn.getyourguide.com/tf/assets/static/badges/google-play-badge-it-it.svg'/>
        <img src='https://cdn.getyourguide.com/tf/assets/static/badges/app-store-badge-it-it.svg'/>
      </div>
      <div className='list'>
        <tt>Supporto</tt>
        <ul>
            <li><a href='#'>centro assistenza</a></li>
            <li><a href='#'>informozioni legali</a></li>
            <li><a href='#'>informotiva sulla privecy</a></li>
            <li><a href='#'>Cookie e preferenze</a></li>
            <li><a href='#'>Termini e condizioni</a></li>
            <li><a href='#'>Informazioni ai sensi</a></li>
            <li><a href='#'>Mappa del sito</a></li>


        </ul>
      </div>
      <div className='list'>
        <tt>Supporto</tt>
        <ul>
            <li><a href='#'>centro assistenza</a></li>
            <li><a href='#'>informozioni legali</a></li>
            <li><a href='#'>informotiva sulla privecy</a></li>
            <li><a href='#'>Cookie e preferenze</a></li>
            <li><a href='#'>Termini e condizioni</a></li>
            <li><a href='#'>Informazioni ai sensi</a></li>
            <li><a href='#'>Mappa del sito</a></li>


        </ul>
      </div>
      <div className='list'>
        <tt>Supporto</tt>
        <ul>
            <li><a href='#'>centro assistenza</a></li>
            <li><a href='#'>informozioni legali</a></li>
            <li><a href='#'>informotiva sulla privecy</a></li>
            <li><a href='#'>Cookie e preferenze</a></li>
            <li><a href='#'>Termini e condizioni</a></li>
            <li><a href='#'>Informazioni ai sensi</a></li>
            <li><a href='#'>Mappa del sito</a></li>


        </ul>
      </div>
    </div>
    <div className='bottomline'>
        <div><p>© 2008 – 2023 GetYourGuide. Sviluppata a Zurigo e Berlino.</p></div>
       
    </div>
    <hr></hr>
    </div>
  )
}

export default Footer