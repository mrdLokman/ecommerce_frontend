import React from 'react'
import { Navbar, Footer, Announcement, ProductsSection, Newsletter } from '../components'
import { SelectInput } from '../components/mini'
import { orderOptions, colorOptions, sizeOptions } from '../data/dummy_data'



const ProductsPage = () => {
  return (
    <div>
        <Navbar />
        <Announcement />

        <h1 className="font-bold text-5xl m-5">Dresses</h1>
        <div className="flex justify-between">
            <div className="m-5">
                <span className="text-xl font-semibold mr-5">Filter products:</span>
                <SelectInput title={"Color"} itemOptions={colorOptions} />
                <SelectInput title={"Size"} itemOptions={sizeOptions} />
            </div>
            <div className="m-5">
                <span className="text-xl font-semibold mr-5">Sort products:</span>
                <SelectInput itemOptions={orderOptions} />
            </div>
        </div>

        <ProductsSection />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default ProductsPage