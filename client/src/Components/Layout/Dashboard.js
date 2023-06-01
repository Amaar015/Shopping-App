import React from 'react'
import Layout from '../Layout/Layout'
import AdminDashboard from './AdminDashboard'
const Dashboard = () => {
    return (
        <Layout>
            <div className="container-fluid m-3 p-3">
                <div className="row">
                    <div className="col-md-3">
                        <AdminDashboard />
                    </div>
                    <div className="col-md-9">
                        content
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard