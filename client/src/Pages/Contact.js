import React from 'react'
import Layout from '../Components/Layout/Layout'
import contact from '../images/doct-7.jpg'
import { BiMailSend, BiPhoneCall, BiSupport } from 'react-icons/bi'
const Contact = () => {
    return (
        <Layout title='ContactUs - Ecomerce App'>
            <div className="container-box">
                <div className="img">
                    <img src={contact} alt="" />
                </div>
                <div className="content">
                    <h1>contact us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt voluptates officia saepe aliquid provident quo iure. Totam, qui molestiae similique numquam facilis velit reprehenderit? Porro omnis exercitationem alias ratione modi.
                    </p>
                    <div className="socials">
                        <p>< BiMailSend /> : www.abdullah.store.com</p>
                        <p><BiPhoneCall /> : 0332-3498326</p>
                        <p><BiPhoneCall />: 1800 0000 0009</p>
                        <p><BiSupport />: abdullah@gmail.com</p>
                        <p><BiSupport /> : Near Wadho wah road Hyderabad</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Contact