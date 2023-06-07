import React from 'react'
import { Link } from 'react-router-dom'
import { FaOpencart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../index.css'
import SearchInput from '../form/SearchInput';
const Header = () => {
    const { user } = useSelector(state => state.user)
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogout = async () => {
        localStorage.clear();
        toast.success("Logout Successfully");
        window.location.reload(false);
        navigate('/login');
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link to='/' className="navbar-brand" >Abdullah <FaOpencart /></Link>
                        <ul className="navbar-nav  mb-2 mb-lg-0 ">
                            <SearchInput />
                            <li className="nav-item">
                                <Link to='/' className="nav-link " >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/categories' className="nav-link">Category</Link>
                            </li>
                            {!user ? (
                                <>
                                    <li className="nav-item">
                                        <Link to='/register' className="nav-link">Register</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/login' className="nav-link">Login</Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <Link onClick={handleLogout} className="nav-link">Logout</Link>
                                    </li>
                                </>
                            )}


                            <li className="nav-item">
                                <Link to='/cart' className="nav-link" >Cart(0)</Link>
                            </li>

                        </ul>

                    </div>


                </div>
                <div className="admin">
                    <Link to='/dashboard'>
                        <h5>{user?.name}</h5>
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Header