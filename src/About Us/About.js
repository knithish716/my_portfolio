import React from "react";
import "./About.css"
import Men from '../Images/man-removebg-preview.png'

function about(){
    return(
        <div className='about-us' id="About">
        <div className='men'>
          <img src={Men}/>
        </div>

        <div className='about-contant'>
          <p>Who Am I ?</p>
          <h3>About Me</h3>
          <p>  Experienced Front-End Developer proficient in HTML5, CSS3, 
            and JavaScript/ES6+. Skilled in React.js for building 
            responsive and dynamic web applications. Strong background in UI/UX 
            design principles, ensuring intuitive user experiences. Expertise in 
            cross-browser compatibility, performance optimization, and version control (Git). 
            Dedicated to delivering clean, efficient code and collaborating effectively in Agile 
            environments. Passionate about leveraging technology to create compelling digital 
            experiences that align with business goals.</p>
            
        </div>

    </div>
    )
}

export default about