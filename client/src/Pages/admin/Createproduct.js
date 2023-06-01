import React from 'react'
import Layout from '../../Components/Layout/Layout'
import AdminDashboard from '../../Components/Layout/AdminDashboard'

const Createproduct = () => {
    return (
        <Layout>
            <div className="container-fluid m-3 p-3">
                <div className="row">
                    <div className="col-md-3">
                        <AdminDashboard />
                    </div>
                    <div className="col-md-9">
                        <div>Createproduct</div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Createproduct