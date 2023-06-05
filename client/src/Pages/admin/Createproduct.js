import React, { useState, useEffect } from 'react'
import Layout from '../../Components/Layout/Layout'
import AdminDashboard from '../../Components/Layout/AdminDashboard'
import axios from 'axios';
import toast from 'react-hot-toast'
import { Select } from 'antd'
import { useNavigate } from 'react-router-dom';
const { Option } = Select;
const Createproduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState('');
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState('');
    const [shipping, setShipping] = useState('');
    const [image, setImage] = useState('')
    const navigate = useNavigate();
    // get all category
    const getAllCategory = async () => {
        try {
            const { data } = await axios.get('/api/v1/categroy/getallcategories')
            if (data?.success) {
                setCategories(data?.categroies);
            }
        } catch (error) {
            console.log(error);
            toast.error('something went wrong in category');
        }
    }
    useEffect(() => {
        getAllCategory()
    }, []);

    const handleCreate = async (e) => {
        e.preventDefault();
        try {
            const productData = new FormData()
            productData.append('name', name);
            productData.append('description', description);
            productData.append('quantity', quantity);
            productData.append('category', category);
            productData.append('price', price);
            productData.append('image', image);

            const { data } = axios.post('/api/v1/product/create-product', productData)
            if (data?.success) {
                toast.error(data?.message)
            } else {
                toast.success('Product Created successfully')
                navigate('/dashboard/admin/products');

            }

        } catch (error) {
            console.log(error)
            toast.error('something went wrong in product creation')
        }
    }

    return (
        <Layout>
            <div className="container-fluid m-3 p-3">
                <div className="row">
                    <div className="col-md-3">
                        <AdminDashboard />
                    </div>
                    <div className="col-md-9">
                        <h1>Createproduct</h1>
                        <div className="m-1 w-75">
                            <Select bordered={false} placeholder="Select Category" size='large' showSearch
                                className='form-select mb-3'
                                onChange={(value) => { setCategory(value) }}>
                                {categories?.map((cat) => (
                                    <Option key={cat._id} value={cat._id}>
                                        {cat.name}
                                    </Option>
                                ))}

                            </Select>
                            <div className="mb-3">
                                <label className="btn btn-outline-secondary col-md-12">
                                    {image ? image.name : "Upload Photo"}
                                    <input
                                        type="file"
                                        name="image"
                                        accept="image/*"
                                        onChange={(e) => setImage(e.target.files[0])}
                                        hidden
                                    />
                                </label>
                            </div>
                            <div className="mb-3">
                                {image && (
                                    <div className="text-center">
                                        <img src={URL.createObjectURL(image)} alt="product-image"
                                            height={"200px"} className='img img-responsive' />
                                    </div>
                                )}
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    value={name}
                                    placeholder="write a name"
                                    className="form-control"
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <textarea
                                    type="text"
                                    value={description}
                                    placeholder="write a description"
                                    className="form-control"
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>

                            <div className="mb-3">
                                <input
                                    type="number"
                                    value={price}
                                    placeholder="write a Price"
                                    className="form-control"
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="number"
                                    value={quantity}
                                    placeholder="write a quantity"
                                    className="form-control"
                                    onChange={(e) => setQuantity(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <Select
                                    bordered={false}
                                    placeholder="Select Shipping "
                                    size="large"
                                    showSearch
                                    className="form-select mb-3"
                                    onChange={(value) => {
                                        setShipping(value);
                                    }}
                                >
                                    <Option value="0">No</Option>
                                    <Option value="1">Yes</Option>
                                </Select>
                            </div>
                            <div className="mb-3">
                                <button className="btn btn-primary" onClick={handleCreate}>
                                    CREATE PRODUCT
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Createproduct