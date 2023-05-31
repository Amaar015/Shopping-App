import React from 'react'
import Layout from '../Components/Layout/Layout'
import contact from '../images/doct-7.jpg'
const Policy = () => {
    return (
        <Layout title='Stores_policies - Ecomerce App'>
            <div className="container-box">
                <div className="img">
                    <img src={contact} alt="" />
                </div>
                <div className="content">
                    <h1>our policies</h1>
                    <p>- Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt voluptates officia saepe aliquid provident quo iure. Totam, qui molestiae similique numquam facilis velit reprehenderit? Porro omnis exercitationem alias ratione modi.
                    </p>
                    <p>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, commodi.</p>
                    <p>- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis dolore harum ad consequuntur perspiciatis?</p>
                    <p>- Lorem ipsum dolor sit.</p>
                </div>
            </div>
        </Layout>
    )
}

export default Policy