import React from 'react'
import Layout from '../Components/Layout/Layout'
import { useCart } from '../Redux/cart'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'
const Cart = () => {
    const [cart, setCart] = useCart()
    const navigate = useNavigate();
    const { user } = useSelector(state => state.user)

    const removeHandle = async (id) => {
        try {
            let myCart = [...cart];
            let index = myCart.findIndex((item) => item._id === id)
            myCart.splice(index, 1)
            setCart(myCart)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Layout title={'Product_cart'}>
            <div className="container">
                <h1 className="text-center bg-light p-2">
                    {`hello ${user?.name}`}
                </h1>
                <div className="text-center mb-4">
                    <h3>
                        {cart?.length > 0 ? `you have ${cart.length} items in your cart ${localStorage.getItem('token') ? "" : "Please login to check out"}` : "your Cart is empty"}
                    </h3>
                </div>
                <div className="row">

                    <div className="col-md-9">

                        <div className="row">
                            <div className="col-md-8">
                                {cart?.map((p) => (
                                    <div className="row card mb-2 flex-row p-2">
                                        <div className="col-md-4 ">
                                            <img src={`/api/v1/product/product-photo/${p._id}`
                                            } width={"200px"} height={"200px"} alt={p.name} className='card-img-top' />
                                        </div>
                                        <div className="col-md-8 mt-5">
                                            <h4 className="card-title">{p.name}</h4>
                                            <h6 className='card-text'>{p.description}</h6>
                                            <h5 className='card-text'>Price: {p.price}</h5>
                                            <button className="btn btn-danger" onClick={() => removeHandle(p._id)}>Remove</button>
                                        </div>
                                    </div>

                                ))}
                            </div>
                            <div className="col-md-4">
                                payment | checkout
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Cart