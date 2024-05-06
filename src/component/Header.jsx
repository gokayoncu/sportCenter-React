import React from 'react'
import './../App.css'

function Header() {
  return (
    <div className='head' id='home'>
        <nav className='navbarText' >
            <div className='power'><a >POWERFULL</a></div>
            <h1>Group Practice <br/><span>With Trainer</span></h1>
            <p className='sectin-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Fugiat, delectus illo eos laudantium in pariatur assumenda ipsam molestiae alias dolores ducimus 
            necessitatibus doloremque velit voluptates porro reiciendis nulla obcaecati perferendis?
            </p>
            <div className="bottomButtons">
                <a href="#" className='singIn'>Sign Up</a>
                <a href="#" className='details'>Details</a>
            </div>
        </nav>   
    </div>
  )
}

export default Header
   