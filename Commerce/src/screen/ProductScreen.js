import React from 'react'
import { Card } from 'react-bootstrap'
const ProductScreen = ({ product }) => {
    return (
        <>
            <Card className='my-3 p-3 rounded'>
                <a href={`/product/${product.id}`}>
                    <Card.Img src={product.image} variant='top' />

                </a>
                <Card.Body>
                    <a href={`/product/${product.id}`}>
                        <Card.Title>
                            <strong>{product.name}</strong>
                        </Card.Title>
                    </a>

                </Card.Body>
            </Card>
        </>
    )
}

export default ProductScreen