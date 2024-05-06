import React from 'react'
import './../App.css'
import bmi from './../images/bmi-index.jpg'



export default function Bmi() {
  return (
    <div className="bmı">
      <div className="bmiCalculator">
            <h2>BMI Calculator</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Odio, eaque. Nihil est veritatis mollitia sunt?
                Odio, eaque. Nihil est veritatis mollitia sunt?
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Odio, eaque. Nihil est veritatis mollitia sunt?
                Odio, eaque. Nihil est veritatis mollitia sunt?
            </p>
            <div className="inputForm">
                <div><input id="inputHeight" name="height" type="number" placeholder=" Your Height" />cm</div>
                <div><input id="inputWeight" name="weight" type="number" placeholder=" Your weight" />kg</div>
            </div>
        </div>
        
        <form className="bmi-img">
            <p>Your BMI: <span id="resultBmi"></span></p>
            <img src={bmi} alt="bmi"/>
            <div className="empty"></div>
        </form>
    </div>
  )
}
