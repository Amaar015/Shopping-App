import React, { useState, useEffect } from 'react'
import Layout from '../Components/Layout/Layout'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Categories = () => {


    const [categories, setCategories] = useState([])
    const getAllcategory = async () => {
        try {
            const { data } = await axios.get('/api/v1/categroy/getallcategories')
            setCategories(data?.categroies)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getAllcategory();
    }, [])


    return (
        <Layout title={"All-Categories"}>
            <div className="container">
                <div className="row">
                    {categories?.map((c) => (
                        <div className="col-md-5 mt-5 mb-3 gx-3 gy-3" key={c._id}>
                            <Link className='btn btn-outline-primary' to={`/category/${c.slug}`}>{c.name}</Link>
                        </div>
                    ))}
                </div>
            </div>

        </Layout>

    )
}

export default Categories