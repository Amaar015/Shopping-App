import React from 'react'
import Layout from '../../Components/Layout/Layout'
import AdminDashboard from '../../Components/Layout/AdminDashboard'
const Profile = () => {
    return (
        <Layout>
            <div className="container-fluid p-3 m-3">
                <div className="row">
                    <div className="col-md-3">
                        <AdminDashboard />
                    </div>
                    <div className="col-md-9">
                        <h1>Users Profile</h1>
                    </div>

                </div>
            </div>

        </Layout>
    )
}

export default Profile