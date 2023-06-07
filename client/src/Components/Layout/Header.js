import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaOpencart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../../Redux/cart';
import '../../index.css'
import axios from 'axios';
import { Badge } from 'antd'
import SearchInput from '../form/SearchInput';
const Header = () => {
    const { user } = useSelector(state => state.user)
    const location = useLocation();
    const navigate = useNavigate();
    const [categories, setCategories] = useState([])
    const [cart] = useCart();
    const handleLogout = async () => {
        localStorage.clear();
        toast.success("Logout Successfully");
        window.location.reload(false);
        navigate('/login');
    }


    const getAllcategory = async () => {
        try {
            const { data } = await axios.get('/api/v1/categroy/getallcategories')
            setCategories(data?.categroies)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getAllcategory();
    }, [])

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
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                </Link>

                                <ul className='dropdown-menu'>
                                    <li>
                                        <Link to='/categories' style={{ color: "black" }}>
                                            All Categories
                                        </Link>
                                    </li>
                                    {categories?.map((c) => (
                                        <li>
                                            <Link to={`/category/${c.slug}`} className='dropdown-item' >
                                                {c.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>


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
                                <Badge count={cart?.length} showZero>
                                    <Link to='/cart' className="nav-link" >Cart </Link>
                                </Badge>
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