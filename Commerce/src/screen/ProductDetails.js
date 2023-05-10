import React, { useState, useEffect } from 'react'
import { Col, Row, Image, ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Rating from '../components/Rating'
import axios from 'axios'
// import Product from '../products'
const ProductDetails = ({ match }) => {
    const params = useParams()
    // const product = Product.find((p) => p._id === params.id)
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const fatchProduct = async () => {
            const { data } = await axios.get(`/products/${match.params.id}`)
            setProduct(data);
        }
        fatchProduct();
    }, [])
    return (
        <>
            <Row>
                <Col md={5} className='mt-2'>
                    <Image src={product.image} fluid />
                </Col>
                <Col md={4}>
                    <ListGroup variant='flush'>
                        <ListGroupItem>

                            <h4>{product.name}</h4>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Rating
                                value={product.rating}
                                text={`${product.numReviews} Reviews`}
                            />
                        </ListGroupItem>
                        <ListGroupItem>
                            <h4>{` $ ${product.price}`}</h4>
                        </ListGroupItem>
                        <ListGroupItem>
                            <h5>{product.description}</h5>
                        </ListGroupItem>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <ListGroupItem>
                        <Row>
                            <Col>Status :</Col>
                            <Col>{product.countInStock > 0 ? "In Stock" : "Out of Stock"}</Col>
                        </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Button className='btn btn-primary mt-4 ml-4' type='button'>Add to Cart</Button>
                    </ListGroupItem>
                </Col>
            </Row>
        </>
    )
}

export default ProductDetails