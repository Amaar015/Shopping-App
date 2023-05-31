import React, { useState } from 'react'
import Layout from '../../Components/Layout/Layout'
import '../../index.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux'
import { showLoading, hideLoading } from '../../Redux/features/alertSlice';
const Register = () => {
    const [name, setName] = useState("")
    const [email, setemail] = useState("")
    const [phone, setphone] = useState("")
    const [address, setaddress] = useState("")
    const [password, setpassword] = useState("")
    const [question, setquestion] = useState("")
    const navigate = useNavigate();
    const disptach = useDispatch();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            disptach(showLoading());
            const res = await axios.post('/api/v1/auth/register', {
                name, email, phone, address, password, question
            })
            disptach(hideLoading());
            if (res && res.data.success) {
                toast.success(res.data.message, {
                    duration: 3000,
                    position: 'top-center'
                })
                navigate('/login')
            } else {
                toast.error(res.data.message, {
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
        <Layout title='Register_form - Ecomerce App'>
            <div className="form">
                <h1>Register Form</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text"
                        name='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Name'
                        required />
                    <label htmlFor="email">Email</label>
                    <input type="email"
                        name='email'
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        placeholder='Email'
                        required />
                    <label htmlFor="phone">Phone</label>
                    <input type="text"
                        name='phone'
                        value={phone}
                        onChange={(e) => setphone(e.target.value)}
                        placeholder='Phone'
                        required />
                    <label htmlFor="Adress">Address</label>
                    <input type="text"
                        name='address'
                        value={address}
                        onChange={(e) => setaddress(e.target.value)}
                        placeholder='Address'
                        required />
                    <label htmlFor="question">question</label>
                    <input type="text"
                        name='question'
                        value={question}
                        onChange={(e) => setquestion(e.target.value)}
                        placeholder='What is your favorite color?'
                        required />
                    <label htmlFor="password">Password</label>
                    <input type="password"
                        name='password'
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        placeholder='Password'
                        required />

                    <button className='btn btn-primary'>Register</button>
                </form>
            </div>
        </Layout>
    )
}

export default Register