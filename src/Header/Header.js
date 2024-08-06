import React from "react";
import '../Header/Header.css'
import Logo from '../Images/1000_F_820291677_fEfmaPg7YbI2uxoWIDU3G0245x7ojVe0-removebg-preview.png'
import { useNavigate } from "react-router-dom";

function Header (){

    return(
        <div className="header">
            <div className="header-container">
                <ul>
                    <div className="logo">
                    <img  src={Logo}/>
                    </div>
                    <li><a href="#/">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Exprience">Exprience</a></li>
                    <li><a href="#Contact">Contact</a></li>
                    <button className="connect-btn" href="#Contact">Connect</button>
                </ul>
            </div>
        </div>
    )
}

export default Header