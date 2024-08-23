import React, { useState, useEffect } from 'react'
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import "./MenuMobile.css"
import { navItems } from '../App'
import ScrollToSectionLink from './ScrollToSectionLink';



const MenuMobile = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        return () => {
            document.body.classList.remove('no-scroll');
        }
    }, [isOpen])

    const closeMenu = () => {
        setIsOpen(false)
    }

    return (
        <>
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

        </>
    )
}

export default MenuMobile