import React from 'react'
import { useState, useEffect } from 'react';

import logo from "../assets/logo.png"
import "./Navbar.css"

import ScrollToSectionLink from './ScrollToSectionLink';
import { navItems } from '../App'

import { FaDiscord, FaFacebookF } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (isOpen) {
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed'; // Fix the position to avoid scroll
        document.body.style.width = '100%'; // Prevent width change when scroll is hidden
    } else {
        document.body.style.overflow = 'auto';
        document.body.style.position = ''; // Reset position
        document.body.style.width = ''; // Reset width
    }

    return () => {
        document.body.style.overflow = 'auto'; // Reset overflow on component unmount
        document.body.style.position = ''; // Reset position on component unmount
        document.body.style.width = ''; // Reset width on component unmount
    };
}, [isOpen]);


  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <>
      <header>
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
                  <ScrollToSectionLink to={item.href}>
                    {item.label}
                  </ScrollToSectionLink>
                </li>
              ))}
            </ul>
            <div className="social-container">
              <a href='#' className='discord'><FaDiscord /></a>
              <a href='#' className='facebook'><FaFacebookF /></a>
            </div>
          </nav>


          <div className="menu-mobile">
            <button className='menu-toggle' onClick={toggleMenu}>{isOpen ? <IoCloseOutline /> : <IoIosMenu />}</button>
            <nav className={`menu ${isOpen ? 'open' : ''}`}>
              <ul>
                {navItems.map((item, index) => (
                  <li key={index} onClick={closeMenu}>
                    <ScrollToSectionLink to={item.href}>
                      {item.label}
                    </ScrollToSectionLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar