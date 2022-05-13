import React from 'react'
import { Navbar, Footer, Announcement, ProductsSection, Newsletter } from '../components'
import { productExample } from '../data/dummy_data'

const SingleProductPage = () => {
  return (
    <div>
        <Navbar />
        <Announcement />

        <div>
            <div>
                <img src={productExample.img} alt='img' />
            </div>
            <div>
                <h1>{productExample.title}</h1>
                <p>{productExample.description}</p>
                <p>{productExample.price}</p>
            </div>
        </div>

        <Newsletter />
        <Footer />
    </div>
  )
}

export default SingleProductPage