import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

const AdminDashboard = () => {
    const { user } = useSelector(state => state.user)
    const navigate = useNavigate()
    return (
        <>
            {user?.role === 1 ? (<div className="text-center">
                <div className="list-group">
                    <h4 onClick={() => { navigate('/dashboard') }} style={{ cursor: 'pointer' }} >Admin Panel</h4>
                    <Link to='/dashboard/admin/create-category' className='list-group-item list-group-item-action'>
                        Create Category
                    </Link>
                    <Link to='/dashboard/admin/create-product' className='list-group-item list-group-item-action'>
                        Create Product
                    </Link>
                    <Link to='/dashboard/admin/products' className='list-group-item list-group-item-action'>
                        Products
                    </Link>
                    <Link to='/dashboard/admin/order' className='list-group-item list-group-item-action'>
                        Orders
                    </Link>
                    <Link to='/dashboard/admin/user' className='list-group-item list-group-item-action'>
                        Users
                    </Link>
                </div>
            </div>) : (<div className="text-center">
                <div className="list-group">
                    <h4>User Panel</h4>
                    <Link to='/dashboard/user/profile' className='list-group-item list-group-item-action'>
                        Profile
                    </Link>
                    <Link to='/dashboard/user/orders' className='list-group-item list-group-item-action'>
                        Orders
                    </Link>
                    {/* <Link to='/dashboard/admin/order' className='list-group-item list-group-item-action'>
                        Orders
                    </Link> */}
                </div>
            </div>)}

        </>
    )
}

export default AdminDashboard