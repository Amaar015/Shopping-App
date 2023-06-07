import React from 'react'
import { useSearch } from '../../Redux/search'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Search = () => {
    const [values, setValues] = useSearch()
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.get(`/api/v1/product/search/${values.keyword}`)
            setValues({ ...values, results: data })
            navigate('/search')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <form className='d-flex search' style={{ background: "none", flexDirection: "row" }} role='search' onSubmit={handleSubmit} >
                <input type="search"
                    className='form-control me-2'
                    style={{ width: "300px", height: "50px" }}
                    placeholder='Search'
                    aria-label='Search'
                    value={values.keyword}
                    onChange={(e) => setValues({ ...values, keyword: e.target.value })}
                />
                <button className='btn btn-outline-success' type='submit'
                    style={{ width: "100px", height: "50px", marginTop: "0px" }}>
                    Search
                </button>
            </form>
        </div>
    )
}

export default Search