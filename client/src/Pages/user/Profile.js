import React, { useState } from 'react'
import Layout from '../../Components/Layout/Layout'
import '../../index.css'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux'
import { showLoading, hideLoading } from '../../Redux/features/alertSlice';
import AdminDashboard from '../../Components/Layout/AdminDashboard';
import { useParams } from 'react-router-dom';
const Profile = () => {
    const { user } = useSelector(state => state.user)
    const [name, setName] = useState("")
    const [email, setemail] = useState("")
    const [phone, setphone] = useState("")
    const [address, setaddress] = useState("")
    const [password, setpassword] = useState("")
    const disptach = useDispatch();
    const params = useParams()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            disptach(showLoading());
            const id = params.id;
            const { data } = await axios.post('/api/v1/auth/update-profile', {
                name, email, phone, address, password, id
            })
            disptach(hideLoading());
            if (data && data.updateduser.success) {
                toast.success(data.updateduser.message, {
                    duration: 3000,
                    position: 'top-center'
                })

            } else {
                toast.error(data.updateduser.message, {
                    duration: 3000,
                    position: 'top-center'
                })
            }
        } catch (error) {
            disptach(hideLoading())
            console.log(error);
            toast.error('Something went wrong', {
                duration: 3000,
                position: 'top-center'
            })
        }

    }
    return (
        <Layout>
            <div className="container-fluid p-3 m-3">
                <div className="row">
                    <div className="col-md-3">
                        <AdminDashboard />
                    </div>
                    <div className="col-md-9">

                        <div className="form">
                            <h1>Register Form</h1>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="name">Name</label>
                                <input type="text"
                                    name='name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder={user?.name}
                                />
                                <label htmlFor="email">Email</label>
                                <input type="email"
                                    name='email'
                                    value={email}
                                    onChange={(e) => setemail(e.target.value)}
                                    placeholder={user?.email}
                                    required
                                    disabled />
                                <label htmlFor="phone">Phone</label>
                                <input type="text"
                                    name='phone'
                                    value={phone}
                                    onChange={(e) => setphone(e.target.value)}
                                    placeholder={user?.phone}
                                />
                                <label htmlFor="Adress">Address</label>
                                <input type="text"
                                    name='address'
                                    value={address}
                                    onChange={(e) => setaddress(e.target.value)}
                                    placeholder={user?.address}
                                />
                                <label htmlFor="password">Password</label>
                                <input type="password"
                                    name='password'
                                    value={password}
                                    onChange={(e) => setpassword(e.target.value)}
                                    placeholder='New Password'
                                />

                                <button className='btn btn-primary'>Register</button>
                            </form>
                        </div>

                    </div>

                </div>
            </div>

        </Layout>
    )
}

export default Profile