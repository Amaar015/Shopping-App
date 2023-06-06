import React, { useState, useEffect } from 'react'
import Layout from '../Components/Layout/Layout'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Checkbox, Radio } from 'antd';
import { Prices } from '../Components/Prices';
const Home = () => {
    const [product, setProduct] = useState([]);
    const [categories, setCategories] = useState([]);
    const [checked, setChecked] = useState([]);
    const [radio, setRadio] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [Loading, setLoading] = useState(false)
    const getTotal = async () => {
        try {
            const { data } = await axios.get('/api/v1/product/product-count')
            setTotal(data?.total)
        } catch (error) {
            console.log(error);
        }
    }

    const LoadMore = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get(`/api/v1/product/product-list/${page}`)
            setLoading(false)
            setProduct([...product, ...data?.products])
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }
    useEffect(() => {
        if (page === 1) return
        LoadMore()
    }, [page])

    //   get all categories
    const getAllCategory = async () => {
        try {
            const { data } = await axios.get('/api/v1/categroy/getallcategories')
            if (data?.success) {
                setCategories(data?.categroies);
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getAllCategory()
        getTotal();
    }, []);


    const getAllproduct = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get(`/api/v1/product/product-list/${page}`)
            setLoading(false)
            setProduct(data.products)
        } catch (error) {
            setLoading(false)
            console.log(error);
        }
    }

    const handleFilter = async (value, id) => {
        let all = [...checked]
        if (value) {
            all.push(id)
        } else {
            all = all.filter(c => c !== id)
        }
        setChecked(all)
    }
    const filterProduct = async () => {
        try {
            const { data } = await axios.post('/api/v1/product/product-filter', { checked, radio })
            setProduct(data?.products)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        if (!checked.length || !radio.length) getAllproduct();
    }, [checked, radio])
    useEffect(() => {
        if (checked.length || radio.length) filterProduct();
    }, [checked, radio])
    return (
        <Layout title='Abdullah_Store - Ecomerce App'>
            <div className="row mt-3">
                <div className="col-md-3">
                    <h4 className="text-center">Filter By Category</h4>
                    <div className="d-flex flex-column">
                        {categories?.map((c) => (
                            <Checkbox
                                key={c._id}
                                onChange={(e) => handleFilter(e.target.checked, c._id)}
                            >
                                {c.name}
                            </Checkbox>
                        ))}
                    </div>
                    <h4 className="text-center">Filter By Price</h4>
                    <div className="d-flex flex-column">
                        <Radio.Group onChange={(e) => setRadio(e.target.value)}>
                            {Prices.map(p => (
                                <div key={p._id} className='mt-2'>
                                    <Radio value={p.array}>{p.name}</Radio>
                                </div>
                            ))}
                        </Radio.Group>
                    </div>
                    <div className="btn btn-danger mt-5" onClick={() => window.location.reload()}>
                        Reset Filter
                    </div>
                </div>
                <div className="col-md-9">
                    <h1 className="text-center">All Products</h1>
                    <div className="d-flex flex-wrap">
                        {product.map(p => (
                            <Link to={`/dashboard/admin/product/${p.slug}`} className='product-link'>
                                <div className="card m-2" style={{ width: "18rem" }} key={p._id}>
                                    <img src={`/api/v1/product/product-photo/${p._id}`} alt={p.name} className='card-img-top' />
                                    <div className="card-body">
                                        <h5 className="card-title">{p.name}</h5>
                                        <p className='card-text'>{p.description.substring(0, 30)}</p>
                                        <p className='card-text'>{p.price}</p>
                                        <button className="btn btn-primary ms-1">More Details</button>
                                        <button className='btn btn-secondary ms-1'>Add to Cart</button>
                                    </div>

                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className='m-2 p-3'>
                        {product && product.length < total && (
                            <button className='btn btn-warning'
                                onClick={(e) => {
                                    e.preventDefault();
                                    setPage(page + 1)
                                }}>
                                {Loading ? 'Loading...' : 'LoadMore'}

                            </button>
                        )}

                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Home