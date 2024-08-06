import React from "react";
import "./Customer.css"
import Person1 from '../Images/person1.jpeg'
import Person2 from '../Images/person2.jpg'
import Star from '../Images/rating.png'

function Customer(){
    return(
        <div className='Testimonial'>
            <h1>Testimonial</h1>
            <h3>What our clients are saying</h3>
          
            <div className='quotes'>
              <p>"I'm impressed by how seamlessly your code integrates with the backend functionalities.
                 The way you've structured everything ensures both efficiency and maintainability. 
                 Keep up the excellent work!"</p>
              <img src={Star} />
              </div>
              <div className='profile-contant'>
                <img src={Person1} />
              </div>
              <h2>Uhuru Kenyatta</h2>
            
              {/* <div className='quotes'>
              <p>"Your innovative approach to incorporating new technologies has really paid off here. 
                The interactive elements you've implemented add a dynamic layer that engages users from 
                the moment they interact. Well done!"</p>
              <img src={Star}  />
              </div> 
              <div className='profile-contant'>
                <img src={Person2} />
              </div>
              <h2>ClaireBelle Zawadi</h2> */}
              
            </div>
    )
}

export default Customer