import React, { useEffect } from 'react'
import Layout from '../Components/Layout/Layout'
import { useSelector } from 'react-redux'
const Home = () => {
    const { user } = useSelector(state => state.user)
    console.log(user?.name)
    return (

        <Layout title='Abdullah_Store - Ecomerce App'>
            <h1>{user?.name}</h1>
            <h1>Hello from Home</h1>
        </Layout>
    )
}

export default Home