import React from 'react'
import Layout from '../../Components/Layout/Layout'
import AdminDashboard from '../../Components/Layout/AdminDashboard'
import { useSelector } from 'react-redux'
const Dashboard = () => {
    const { user } = useSelector(state => state.user)
    return (
        <Layout>
            <div className="container-fluid m-3 p-3">
                <div className="row">
                    <div className="col-md-3">
                        <AdminDashboard />
                    </div>
                    <div className="col-md-9">
                        <div className="card w-75 p-3">
                            <h3>User Name : {user?.name}</h3>
                            <h3>Email address : {user?.email}</h3>
                            <h3>Address : {user?.address}</h3>
                            <h3>Mobile no : {user?.phone}</h3>
                            <h3>What is your favorite color? {user?.question}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard