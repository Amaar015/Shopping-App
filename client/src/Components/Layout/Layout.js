import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Helmet } from 'react-helmet'
import { Toaster } from "react-hot-toast";
const Layout = ({ children, title, description, keywords, author }) => {
    return (
        <>
            <Helmet>
                <meta charSet='utf-8' />
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
                <meta name='author' content={author} />
                <title>{title}</title>

            </Helmet>
            <Header />
            <main style={{ minHeight: '100%' }}>
                <Toaster />
                {children}
            </main>
            {/* <Footer /> */}
        </>
    )
}
Layout.defaultProps = {
    title: 'Ecommerce app - Abdullah Store',
    description: 'Mern stack project',
    keywords: 'mern,react,mogodb,node',
    author: 'Amaar_Hassnain',
}

export default Layout