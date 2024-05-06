import React from 'react'
import './../App.css'
import client1 from './../images/client1.jpg'
import client2 from './../images/client2.jpg'


function Review() {
  return (
    <div id="review" className="review">
        <h2 className="sections-header">REVİEW CLIENT</h2>
        <div className="header-symbol"></div>
        <p className="review-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum laboriosam, accusantium porro ratione sequi quasi?</p>
        <div className="review-container">
            <div className="review-box">
                <img src={client1} alt=""/>
                <div>
                    <h4>Diet  Expect</h4>
                    <p>CFO</p>
                </div>
                <p className="comments">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem necessitatibus porro cupiditate ipsam, quam esse enim. 
                    Velit nobis sapiente in amet dignissimos reiciendis quas vel.
                </p>
            </div>
            <div className="review-box">
                <img src={client2} alt=""/>
                <div>
                    <h4>Cardio Trainer</h4>
                    <p>CEO</p>
                </div>
                <p className="comments">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem necessitatibus porro cupiditate ipsam, quam esse enim. 
                    Velit nobis sapiente in amet dignissimos reiciendis quas vel.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Review
