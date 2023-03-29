import React from 'react'
import products from '../products'
import { Row, Col } from 'react-bootstrap'
import ProductScreen from './ProductScreen'
const HomeScreen = () => {
    return (
        <>
            <Row>
                {
                    products.map((product) => (
                        <Col>
                            <ProductScreen product={product} />
                        </Col>
                    ))
                }
            </Row>
        </>
    )
}

export default HomeScreen