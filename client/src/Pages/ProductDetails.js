import React, { useEffect, useState } from 'react'
import Layout from '../Components/Layout/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ProductDetails = () => {
    const params = useParams();
    const [product, setProduct] = useState({});
    const [relatedProduct, setrelatedProduct] = useState([])
    useEffect(() => {
        if (params?.slug) getProduct();
    }, [params?.slug])

    const getProduct = async () => {
        try {
            const { data } = await axios.get(`/api/v1/product/getsingleproduct/${params.slug}`)
            setProduct(data?.product)
            similarProduct(data?.product._id, data?.product.category._id);
        } catch (error) {
            console.log(error);

        }
    }

    const similarProduct = async (pid, cid) => {
        try {
            const { data } = await axios.get(`/api/v1/product/relative-product/${pid}/${cid}`)
            setrelatedProduct(data?.products)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        similarProduct();
    })
    return (
        <Layout>
            <div className="row container mt-2 ">
                <div className="col-md-6">
                    <img src={`/api/v1/product/product-photo/${product?._id}`} alt={product.name}
                        style={{ width: "80%", height: "90%" }} />

                </div>
                <div className="col-md-6">
                    <h1 className='text-center'>Product Details</h1>
                    <hr />
                    <h6>Name : {product.name}</h6>
                    <h6>Description : {product.description}</h6>
                    <h6>
                        Price :
                        {product?.price?.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                        })}
                    </h6>
                    <h6>Category : {product?.category?.name}</h6>
                    <h6>Shipping : {product?.shipping}</h6>
                    <button className="btn btn-secondary ms-1">ADD TO CART</button>
                </div>

            </div>
            <hr />
            <div className="row container">
                <h1>Similar Product</h1>
                {relatedProduct.length < 1 && (<p className='text-center'>No similar product found</p>)}                <div className="d-flex flex-wrap">
                    {relatedProduct.map(p => (
                        // <Link to={`/dashboard/admin/product/${p.slug}`} className='product-link'>
                        <div className="card m-2" style={{ width: "18rem" }} key={p._id}>
                            <img src={`/api/v1/product/product-photo/${p._id}`} alt={p.name} className='card-img-top' />
                            <div className="card-body">
                                <h5 className="card-title">{p.name}</h5>
                                <p className='card-text'>{p.description.substring(0, 30)}</p>
                                <p className='card-text'>{p.price}</p>
                                <button className='btn btn-secondary ms-1'>Add to Cart</button>
                            </div>

                        </div>
                        // </Link>
                    ))}
                </div>

            </div>

        </Layout>
    )
}

export default ProductDetails