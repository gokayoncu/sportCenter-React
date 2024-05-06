import React from 'react'
import './../App.css'
import trainer1 from './../images/trainer1.jpg'
import trainer2 from './../images/trainer2.jpg'
import trainer3 from './../images/trainer3.jpg'

function Trainers() {
  return (
    <div className="trainer" id="trainer">
        <h2 className="sections-header">OUR BEST TRAINER</h2>
        <div className="header-symbol"></div>
        <p className="sectin-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum laboriosam, accusantium porro ratione sequi quasi?</p>
        <div className="trainer-container">
            <div className="trainer-box">
                <div className="after"></div>
                <img src={trainer1} alt=""/>
                <span>Jane Doe <p>Cardio Trainer</p></span>
                
            </div>
            <div className="trainer-box">
                <div className="after"></div>
                <img src={trainer2} alt=""/>
                <span>John Doe <p>Cardio Trainer</p></span>
            </div>
            <div className="trainer-box">
                <div className="after"></div>
                <img src={trainer3} alt=""/>
                <span>Jane Doe <p>Cardio Trainer</p></span>
            </div>
        </div>
    </div>
  )
}

export default Trainers
