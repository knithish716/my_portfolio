import React from "react";
import "./Company.css"
import Nafter from '../Images/Group_34-removebg-preview.png'
import Knackbay from '../Images/Group_21-removebg-preview 1.png'

function Company(){
    return(
        <div className='Companey' id="Company">
        <h1>Company</h1>
        <div className='company-logo'>
        <img src={Nafter}/>
        <img src={Knackbay}/>
        </div>
      </div>
    )
}

export default Company