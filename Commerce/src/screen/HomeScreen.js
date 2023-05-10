import React, { useState, useEffect } from 'react'
import axios from 'axios';
// import products from '../products'
import { Row, Col } from 'react-bootstrap'
import ProductScreen from './ProductScreen'
const HomeScreen = () => {
    const [products, setProducts] = useState([]);
    // const getProduct = async () => {
    //     try {
    //         const { res } = await axios.get('/product')
    //         setPrducts(res);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    useEffect(() => {
        // getProduct()
        const fatchProducts = async () => {
            const { data } = await axios.get("/products")
            // console.log(data)
            setProducts(data)
        };
        fatchProducts()
    }, [])
    return (
        <>
            <Row>
                {
                    products.map((product) => (
                        <Col md={3}>

                            <ProductScreen product={product} />
                        </Col>
                    ))
                }
            </Row>
        </>
    )
}

export default HomeScreen