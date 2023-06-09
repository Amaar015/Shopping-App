
import React from 'react'
import { Link } from 'react-router-dom'
import '../../index.css'
const Footer = () => {
    return (

        <footer className='bg-dark text-light p-3'>
            <h4 className='text-center'>All Rights Reserved &copy; Amaar Raza</h4>
            <ul className='text-center mt-3'>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/policy">Privacy Policy</Link>
                </li>
            </ul>
        </footer>

    )
}

export default Footer