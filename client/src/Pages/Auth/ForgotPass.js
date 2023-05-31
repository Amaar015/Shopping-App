import React, { useState } from 'react'
import Layout from '../../Components/Layout/Layout'
import '../../index.css'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import toast from "react-hot-toast";
import { useDispatch } from 'react-redux';
import { showLoading, hideLoading } from '../../Redux/features/alertSlice';
const ForgotPass = () => {
    const disptach = useDispatch();
    const [email, setemail] = useState("")
    const [Newpassword, setpassword] = useState("")
    const [question, setquestion] = useState('')
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            disptach(showLoading());
            const res = await axios.post('/api/v1/auth/forget-password', {
                email, Newpassword, question
            })
            disptach(hideLoading())
            if (res.data.success) {
                toast.success('Password Reset successfully')
                navigate('/login')
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
                <h1>Forgot Password</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email'
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        placeholder='Email' />
                    <label htmlFor="question">question</label>
                    <input type="text" name='question'
                        value={question}
                        onChange={(e) => setquestion(e.target.value)}
                        placeholder='What is your favorite color?' />
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password'
                        value={Newpassword}
                        onChange={(e) => setpassword(e.target.value)}
                        placeholder='Enter new Password' />
                    <button className='btn btn-primary'>Reset Password</button>
                    <Link to='/login' style={{ marginTop: '1rem', textDecoration: "none", fontSize: "1.2rem" }}>Login</Link>
                </form>

            </div>
        </Layout>
    )
}

export default ForgotPass