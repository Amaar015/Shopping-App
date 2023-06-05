import React from 'react'

const Categoryform = ({ handleSubmit, value, setValue }) => {
    return (
        <>
            <form onSubmit={handleSubmit} style={{ background: "none" }}>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder='Enter new Category' value={value}
                        onChange={(e) => setValue(e.target.value)} />
                </div>
                <button onClick={handleSubmit} className='btn btn-primary'>Submit</button>

            </form>
        </>
    )
}


export default Categoryform