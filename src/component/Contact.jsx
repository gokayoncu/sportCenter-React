import React from 'react'
import './../App.css'

function Contact() {
  return (
    <div id="contact" className="contact">
        <h2 className="sections-header">CONTACT US</h2>
        <div className="header-symbol"></div>
        <p className="contact-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum laboriosam, accusantium porro ratione sequi quasi?</p>
        <div className="contact-container">
            <div className="contact-box">
                <div className="contact-info">
                    <span>Mobile Number <p>+136 773 321 4442</p></span>
                    <span>Email Address <p>demo@demo.com</p></span>
                </div>
                <h3>Make An Appoinment</h3>
                <div>
                    <input type="text" placeholder=" Your Name"/>
                    <input type="email" placeholder=" Your Email"/>
                    <textarea  cols="55" rows="9" placeholder=" Your Message"></textarea>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6784.02228630057!2d-70.5623509386103!3d41.45294724664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e5290da8c4c4d1%3A0x178a87a06122a0dc!2sInkwell%20Beach!5e0!3m2!1str!2str!4v1713734772797!5m2!1str!2str" width="90%" height="300px"  loading="lazy"  />
        </div>
    </div>
  )
}

export default Contact
