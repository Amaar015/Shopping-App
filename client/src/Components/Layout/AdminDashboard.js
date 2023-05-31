import React from 'react'
import './adminDash.css'
import { FaOpencart, FaHome, FaShoppingCart, FaMoneyCheck } from 'react-icons/fa';
import { MdOutlineUpdate } from 'react-icons/md'
import { Link } from 'react-router-dom'
import profile from '../../images/profile.jpeg'
import { useSelector } from 'react-redux';

const AdminDashboard = () => {
    const { user } = useSelector(state => state.user)
    return (
        <div className="dashboard">
            <div className="container-box">
                <div className="profile">
                    <Link to='/'>Abdullah Stroe <span><FaOpencart /></span> </Link>
                    <div className="user-detail">
                        <img src={profile} alt="" />
                        <h3>{user?.name}</h3>
                        <p>{user?.email}</p>
                    </div>
                    <div className="admin-navbar">
                        <ul>
                            <li>
                                <Link to='/user-dashboard' > <i><FaHome /></i> Dashboard</Link>
                            </li>
                            <li>
                                <Link to='/user-dashboard' ><i><FaShoppingCart /></i> Cart</Link>
                            </li>
                            <li>
                                <Link to='/user-dashboard' ><i><FaMoneyCheck /></i> Payment History</Link>
                            </li>
                            <li>
                                <Link to='/user-dashboard' ><i><MdOutlineUpdate /></i> Update Profile</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="dashboard-view">

                </div>
            </div>
        </div>
    )
}

export default AdminDashboard