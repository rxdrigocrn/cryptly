import React from 'react'
import logo from "../assets/logo.png"
import { navItems } from '../App'
import { FaDiscord, FaFacebookF } from "react-icons/fa";
import "./Navbar.css"


const Navbar = () => {
  return (
    <>
    <div className="navbar-wrapper">
    <nav className='navbar'>
            <div className="logo-container">
              <a href="#">
                <img src={logo} alt="logo" />
                <span>Cryptly</span>
              </a>
            </div>
            <ul>
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="social-container">
            <a href='#' className='discord'><FaDiscord /></a>
            <a href='#' className='facebook'><FaFacebookF /></a>
          </div>
        </nav>
    </div>
    </>
  )
}

export default Navbar