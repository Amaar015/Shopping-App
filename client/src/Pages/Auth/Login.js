import React, { useState } from 'react'
import Layout from '../../Components/Layout/Layout'
import '../../index.css'
import axios from 'axios';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import toast from "react-hot-toast";
import { useDispatch } from 'react-redux';
import { showLoading, hideLoading } from '../../Redux/features/alertSlice';
const Login = () => {
    const disptach = useDispatch();
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const navigate = useNavigate();
    const location = useLocation();
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            disptach(showLoading());
            const res = await axios.post('/api/v1/auth/login', {
                email, password
            })
            disptach(hideLoading())
            if (res.data.success) {
                localStorage.setItem('token', res.data.token)
                toast.success('Login Successfully')
                navigate('/')
            } else {
                toast.error(res.data.message)
            }

        } catch (error) {
            disptach(hideLoading())
            console.log(error);
            toast.error('Something went wrong', {
                duration: 5000,
                position: 'top-center'
            })
        }


    }

    return (
        <Layout title='Login_form - Ecomerce App'>

            <div className="form">
                <h1>Login Form</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email'
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        placeholder='Email' />
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password'
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        placeholder='Password' />
                    <button className='btn btn-primary'>Login</button>
                    <Link to='/forget-password' style={{ marginTop: '1rem', textDecoration: "none", fontSize: "1.2rem" }}>Forget password  </Link>
                </form>

            </div>
        </Layout>
    )
}

export default Login