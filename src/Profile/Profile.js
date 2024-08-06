import React from "react";
import "./Profile.css"
import Resume from '../resume/Nithish Kumar - Resume.pdf'
import Image from '../Images/intro-section-illustration.png'

function profile(){
    return(
        <div className='profile'>
            <div className='container'>
              <div className='contant'>
                <h1><span>Hi!</span>
                <span>I'm Nithish Kumar</span>
                <span>Front-end Developer</span>
                </h1>
                <p>Experienced front-end developer specializing in creating responsive, user-friendly
                   interfaces with HTML, CSS, and JavaScript. Proficient in modern frameworks like React,
                   dedicated to optimizing performance and usability.
                </p>
                <div>
                <a  className='CV-button' target='blank'  href={Resume} download>Download CV</a>
              </div>
              </div>
              <div className='image'>
                <img src={Image} />
              </div>
            </div>

          </div>
    )
}

export default profile