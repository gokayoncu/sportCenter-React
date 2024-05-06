import React from 'react'
import './../App.css'
import logo from  './../images/logo.png'

function Footer() {
  return (
    <div className="footer">
      <a href="#home"><img src={logo} alt="logo" className="hero-img"/></a>
        <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit iste et veritatis quia 
            est animi blanditiis reprehenderit architecto id, esse, impedit excepturi aspernatur, 
            consectetur iusto corporis quibusdam deleniti non nulla. Labore consectetur enim temporibus error.
        </p>
        <div className="links-container">
            <div className="links-box">
                <h4>Information</h4>
                <a href="#">About Us</a>
                <a href="#">Classes</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
            </div>
            <div className="links-box">
                <h4>Helpful Links</h4>
                <a href="#">Services</a>
                <a href="#">Supports</a>
                <a href="#">Terms & Condition</a>
                <a href="#">Privacy Policy</a>
            </div>
        </div>
    </div>
  )
}

export default Footer
