import React from 'react'
import Layout from '../Components/Layout/Layout'
import about from '../images/doct-8.jpg'
const About = () => {
    return (
        <Layout title='About-Us - Ecomerce App'>
            <div className="container-box">
                <div className="img">
                    <img src={about} alt="" />
                </div>
                <div className="content">
                    <h1>Who are We</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, nisi tenetur! Asperiores ea eveniet cupiditate distinctio et? Perferendis sapiente blanditiis id accusantium, commodi sequi inventore impedit veniam ab quidem laborum.
                        Consequuntur ducimus accusamus quam minus quidem praesentium ullam neque id odit enim sit perspiciatis modi nesciunt voluptate quas, molestiae expedita itaque voluptatibus vel dolor fugiat laborum animi cupiditate iure. Assumenda!
                        Deserunt sequi optio aperiam earum totam iure laborum nesciunt eius id magni culpa, labore quod aspernatur nam voluptates odio dolor atque excepturi minus deleniti? Enim eos cupiditate reiciendis iusto quia.</p>
                </div>
            </div>
        </Layout>
    )
}

export default About