import React from 'react'
import Layout from '../Components/Layout/Layout'
import { useSearch } from '../Redux/search';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Searchs = () => {
    const navigate = useNavigate();
    const [values, setValues] = useSearch();
    return (
        <Layout>
            <div className="container">
                <div className="text-center">
                    <h1>Search Results</h1>
                    <h6>{values?.results.length < 1 ? `No products found` :
                        `Found ${values?.results.length}`}</h6>
                    <div className="d-flex flex-wrap mt-4">
                        {values?.results.map(p => (
                            // <Link to={`/dashboard/admin/product/${p.slug}`} className='product-link'>
                            <div className="card m-2" style={{ width: "18rem" }} key={p._id}>
                                <img src={`/api/v1/product/product-photo/${p._id}`} alt={p.name} className='card-img-top' />
                                <div className="card-body">
                                    <h5 className="card-title">{p.name}</h5>
                                    <p className='card-text'>{p.description.substring(0, 30)}</p>
                                    <p className='card-text'>{p.price}</p>
                                    <button className="btn btn-primary ms-1" onClick={() => navigate(`/product/${p.slug}`)}>More Details</button>
                                    <button className='btn btn-secondary ms-1'>Add to Cart</button>
                                </div>

                            </div>
                            // </Link>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Searchs