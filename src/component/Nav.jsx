import React from 'react'
import './../App.css'
import logo from  './../images/logo.png'


function Nav() {
  
  return (
    <>
        <div className="navBar" id="navbar">
            <a href="#home"><img src={logo} alt="logo" className="hero-img" /></a>
            <input type="checkbox" id="mini-menu" className="checkbox-btn" />
            <label  htmlFor="mini-menu"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="48" d="M88 152h336M88 256h336M88 360h336"></path></svg></label>
            <div className="navBar-Btns">
                <a href="#home">Home</a>
                <a href="#about" className="hidden">About</a>
                <a href="#classes">Classes</a>
                <a href="#services" className="hidden">Services</a>
                <a href="#trainer">Trainer</a>
                <a href="#review">Review</a>
                <a href="#blog" className="hidden">Blog</a>
                <a href="#contact">Contact</a>
                <a href="#" id="join">Join Us</a>
            </div>
        </div>
      
    </>
  )
}

export default Nav

