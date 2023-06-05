import React, { useState, useEffect } from 'react'
import Layout from '../../Components/Layout/Layout'
import AdminDashboard from '../../Components/Layout/AdminDashboard'
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
const Products = () => {
    const [product, setProduct] = useState([]);
    const getAllproduct = async () => {
        try {
            const { data } = await axios.get('/api/v1/product/getallproduct')
            setProduct(data.product)
        } catch (error) {
            toast.error('Something went wrong')
        }
    }
    useEffect(() => {
        getAllproduct();
    }, [])
    return (
        <Layout>
            <div className="container-fluid m-3 p-3">
                <div className="row">
                    <div className="col-md-3">
                        <AdminDashboard />
                    </div>
                    <div className="col-md-9 ">
                        <h2 className='text-center'>Products List</h2>
                        <div className='product-div '>
                            {product.map(p => (
                                <Link to={`/dashboard/admin/product/${p.slug}`} className='product-link'>
                                    <div className="card m-2" style={{ width: "18rem" }} key={p._id}>
                                        <img src={`/api/v1/product/product-photo/${p._id}`} alt={p.name} className='card-img-top' />
                                        <div className="card-body">
                                            <h5 className="card-title">{p.name}</h5>
                                            <p className='card-text'>{p.description}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>

    )
}

export default Products