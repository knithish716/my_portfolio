import React from "react";
import "./Exprience.css"
import UI from '../Images/UI.png'
import WD from '../Images/Web Development.png'
import Ecom from '../Images/E-Com.png'

function Exprience(){
    return(
        <div className='skills' id="Exprience">
            <p>What I Do?</p>
            <h1>Service</h1>
              <div className='user'>
              <div className='user-image'>
                <img src={UI}/>
              </div>
              <div className='user-contant'>
                <h2>UI/UX Design</h2>
                <p>We specialize in creating intuitive interfaces that blend functionality 
                  with aesthetic appeal. Our portfolios showcase seamless user experiences 
                  crafted through meticulous research and innovative design solutions.
                   From wireframes to interactive prototypes, we bring your vision to life 
                   with precision and creativity. Transform your ideas into compelling digital 
                   journeys that captivate and convert.
                </p>
                <button>Learn More</button>
              </div>

              </div>
              <div className='Web-Development'>
              <div className='wd-contant'>
                <h2>Web Development</h2>
                <p>Our web development service specializes in crafting responsive and intuitive websites 
                  using React.js and JavaScript. We blend modern design aesthetics with robust backend 
                  solutions to ensure optimal performance. From custom CMS implementations to dynamic 
                  e-commerce platforms, our solutions are tailored to meet your business objectives. 
                  Elevate your online presence with websites that not only look great but also deliver 
                  seamless user experiences. Harness the power of React.js and JavaScript to engage your 
                  audience and drive business growth effectively.</p>
                <button>Learn More</button>
              </div>

              <div className='wd-image'>
                <img src={WD}/>
              </div>

              </div>
              <div className='E-com'>
              <div className='E-image'>
                <img src={Ecom}/>
              </div>
              <div className='E-contant'>
                <h2>Wordpress Website</h2>
                <p>Explore our WordPress portfolio service, specializing in custom themes and plugins 
                  that enhance your online presence. We create dynamic websites optimized for user experience 
                  and search engine visibility. Our expertise includes e-commerce integration, content 
                  management solutions, and responsive design. Elevate your brand with a WordPress site 
                  that combines aesthetics with functionality, tailored to your business goals. Discover 
                  how we can transform your ideas into a powerful digital presence.</p>
                <button>Learn More</button>
              </div>

              </div>
           
          </div>

    )
}

export default Exprience