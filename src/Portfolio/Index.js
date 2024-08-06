import React from 'react'
import '../Portfolio/Index.css'
import Header from '../Header/Header'
import Profile from "../Profile/Profile"
import About from "../About Us/About"
import Hire from '../Hire/Hire'
import Exprience from "../Exprience/Exprience"
import Company from "../Company/Company"
import Customer from '../Customer/Customer'
import Footer from '../Footer/Footer'
import Contact from '../Contact/Contact'


function portfolio() {
  return (
    <div className='Portfolio' id='/'>
      <Header />
      <Profile />
      <About />
      <Hire />
      <Exprience />
      <Company />
      <Customer />
      <Contact />
      <Footer />
    </div>

  )
}

export default portfolio;