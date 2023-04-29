import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../../assets/svgs/home.svg'
import "./Navbar.scss"

export default function Navbar() {
    return (
        <div className={`navbar`}>
            <Link className='link-container' to="/departments">
                <img className='icon' src={Home} alt="home" />
            </Link>
        </div>
    )
}
