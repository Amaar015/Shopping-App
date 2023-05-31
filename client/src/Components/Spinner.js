import React from 'react'
import { useState, CSSProperties } from "react";
// import ClipLoader from "react-spinners/ClipLoader";
import HashLoader from 'react-spinners/HashLoader'
const Spinner = () => {
    return (
        <div className='spinner'>
            <HashLoader color="#36d7b7" />
        </div>
    )

}

export default Spinner