import React from 'react'
import { Link } from 'react-router-dom'
import { FaOpencart } from 'react-icons/fa';
const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link to='/' className="navbar-brand" >Abdullah <FaOpencart /></Link>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' className="nav-link " >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/categories' className="nav-link">Category</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/register' className="nav-link">Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/login' className="nav-link">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/cart' className="nav-link" >Cart(0)</Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header