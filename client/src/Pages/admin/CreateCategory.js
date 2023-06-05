import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Layout/Layout'
import AdminDashboard from '../../Components/Layout/AdminDashboard'
import toast from 'react-hot-toast'
import axios from 'axios'
import { Modal } from 'antd'
import Categoryform from '../../Components/form/Categoryform'
const CreateCategory = () => {
    const [category, setCategory] = useState([]);
    const [name, setName] = useState("")
    const [visible, setVisible] = useState(false);
    const [selected, setselected] = useState(null);
    const [updateName, setupdateName] = useState('')
    // handle form


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("/api/v1/categroy/create-category", {
                name,
            });
            if (data?.success) {
                toast.success(`${name} is created`);
                getAllCategory();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("somthing went wrong in input form");
        }
    };

    // get all category
    const getAllCategory = async () => {
        try {
            const { data } = await axios.get('/api/v1/categroy/getallcategories')
            if (data.success) {
                setCategory(data.categroies);
            }
        } catch (error) {
            console.log(error);
            toast.error('something went wrong in category');
        }
    }
    useEffect(() => {
        getAllCategory()
    }, []);

    // handle update
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.put(`/api/v1/categroy/update-category/${selected._id}`,
                { name: updateName })
            if (data?.success) {
                toast.success(data.message);
                setupdateName('');
                setVisible(false);
                getAllCategory();
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error('something went wrong in update')
        }
    }
    const handleDelete = async (id) => {
        try {
            const { data } = await axios.delete(`/api/v1/categroy/delete-category/${id}`)
            if (data.success) {
                toast.success('category deleted successfully')
                getAllCategory();
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error('Error in deleting category')
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
                        <h1>Manage Category</h1>
                        <div className="p-3 w-50">
                            <Categoryform handleSubmit={handleSubmit} value={name} setValue={setName} />
                        </div>
                        <div className='w-75'>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th scope='col'>Name</th>
                                        <th scope='col'>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {category.map(cat => (
                                        <>
                                            <tr>
                                                <td key={cat._id}>{cat.name}</td>
                                                <td> <button className='btn btn-primary ms-2'
                                                    onClick={() => {
                                                        setVisible(true);
                                                        setupdateName(cat.name)
                                                        setselected(cat)
                                                    }}>Edit</button></td>
                                                <td> <button className='btn btn-danger ms-2'
                                                    onClick={() => { handleDelete(cat._id) }}>Delete</button></td>


                                            </tr>
                                        </>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                        <Modal onCancel={() => setVisible(false)} footer={null} open={visible}>
                            <Categoryform value={updateName} setValue={setupdateName} handleSubmit={handleUpdate} />
                        </Modal>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CreateCategory