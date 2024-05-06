import React, { useState } from 'react'
import './../App.css'
import yoga from './../images/yoga.jpg'
import group from './../images/group.webp'
import solo from './../images/solo.jpg'
import stretching from './../images/stret.webp'


function Classes() {
    const [count, setCount] = useState("Why are your yoga?")
    const [text, setText] = useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fugiat minima impedit excepturi iure, doloremque ipsum! Ullam exercitationem ex odio?")

    const [images, setİmage] = useState(yoga)

    const yogaBtn = () => {
        setCount("Why are your yoga?")
        setText("Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fugiat minima impedit excepturi iure, doloremque ipsum! Ullam exercitationem ex odio?")
        setİmage(yoga)
    }
    const groupBtn = () => {
        setCount("Why are your Group?")
        setText("Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fugiat minima impedit excepturi iure, doloremque ipsum!")
        setİmage(group)
    }
    const soloBtn = () => {
        setCount("Why are your Solo?")
        setText("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea quas commodi quasi, velit molestias ullam laborum ipsam sapiente ratione corrupti.?")
        setİmage(solo)
    }
    const stretchingBtn = () => {
        setCount("Why are your Stretching?")
        setText("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae voluptate quaerat sunt iste iusto, consequatur, maiores, saepe asperiores laboriosam dolor pariatur porro. Deleniti, corrupti facere odio vero sequi perferendis nam?")
        setİmage(stretching)
    }


  return (
    <div className='classes'>
        <div className="cards" id="about">
            <div><p>325</p><span>Course</span></div>
            <div><p>405</p><span>Work Out</span></div>
            <div><p>305</p><span>Working Hour</span></div>
            <div><p>705</p><span>Happy Client</span></div>          
        </div>
        <div className="mainClasses" id="classes">
            <div className="classesHead">
                <h2 className="sections-header">OUR CLASSES</h2>
                <div className="header-symbol"></div>
                <p className="sectin-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Ipsa voluptatem laborum doloremque repellendus dolores dolore omnis esse nemo sint.
                </p>
            </div>            
            <div className="secondClasses">
                <div className="classesBtn">
                    
                    <button onClick={yogaBtn} type="button"  id="yogaBtn">Yoga</button>
                    <button onClick={groupBtn} type="button" id="groupBtn">Group</button>
                    <button onClick={soloBtn} type="button" id="soloBtn">Solo</button>
                    <button onClick={stretchingBtn} type="button" id="stretchingBtn">Stretching</button>
                </div>
                
                <div className="btnContainer">
                    <div id="btnBox">
                        <h3 id="btnHeader">{count}</h3>
                        <p id="lower-text">{text}</p>
                        <h3>When comes Yoga Your Time.</h3>
                        <p>Saturday-Sunday:8:00am-10:00pm</p>
                        <p>Monday-Tuesday: 10:00am - 12:00pm</p>
                        <p>Wednesday-Friday: 3:00pm - 6:00pm</p> 
                    </div>  
                    <img src={images} alt="" />             
                </div>
            </div>
            <div className="classes-clip"></div>            
        </div>
    </div>
  )
}

export default Classes
