import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logoImg from "../../assets/logo.png"
import {HiOutlineMenuAlt3} from "react-icons/hi";
import { IoIosCloseCircle } from "react-icons/io";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <nav className='navbar py-[1.8rem] px-0' id = "navbar">
      <div className='container w-[90%] mx-auto my-0 navbar-content flex items-center'>
        <div className='brand-and-toggler w-[100%] flex justify-between'>
          <Link to = "/" className='navbar-brand w-[90px] flex items-center'>
            <img src = {logoImg} alt = "site logo" />
            <span className='uppercase font-[700] ml-[2rem] text-[2.4rem] tracking-[1px]'>bookhub</span>
          </Link>
          <button type = "button" className='navbar-toggler-btn z-[11]' onClick={handleNavbar}>
            {toggleMenu ? <IoIosCloseCircle size={35} style={{color:"#fff"}} /> : <HiOutlineMenuAlt3 size = {35} style = {{color:"#010101"}} /> }
            
          </button>
        </div>

        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className = "navbar-nav">
            <li className='nav-item'>
              <Link to = "book" className='nav-link text-uppercase text-[2.2rem] fw-6 ls-1'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to = "about" className='nav-link text-uppercase text-[2.2rem] fw-6 ls-1'>About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar