import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Header from "../src/Header/Header"
import Portfolio from "../src/Portfolio/Index"
import Contact from './Contact/Contact';
import Profile from "./Profile/Profile"
import About from "./About Us/About"
import Exprience from './Exprience/Exprience';
import Company from './Company/Company';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Portfolio />} />
        <Route path='/Header' element={<Header />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/About' element={<About />} />
        <Route path='/Exprience' element={<Exprience />} />
        <Route path='/Company' element={<Company />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
