import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Navbar, Footer, Announcement, ProductsSection, Newsletter } from '../components'
import { SelectInput } from '../components/mini'
import { orderOptions, colorOptions, sizeOptions } from '../data/dummy_data'



const ProductsPage = () => {
  const location = useLocation();
  const locationElements = location.pathname.split('/');
  const category = locationElements.length>2? locationElements[2]: "";

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilterChange = (e)=>{
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]:value
    })
  }

  const handleSortChange = (e)=>{
    const value = e.target.value;
    setSort(value)
  }

  return (
    <div>
        <Navbar />
        <Announcement />

        <h1 className="font-bold text-5xl m-5">{category}</h1>
        <div className="flex justify-between">
            <div className="my-0 mx-5 tablet:m-5 flex flex-col tablet:block">
                <span className="text-xl font-semibold mr-0 tablet:mr-5">Filter products:</span>
                <SelectInput name={"colors"} title={"Color"} itemOptions={colorOptions} onChange={handleFilterChange}/>
                <SelectInput name={"size"} title={"Size"} itemOptions={sizeOptions}  onChange={handleFilterChange}/>
            </div>
            <div className="my-0 mx-5 tablet:m-5 flex flex-col tablet:block">
                <span className="text-xl font-semibold mr-0 tablet:mr-5">Sort products:</span>
                <SelectInput name={"order"} itemOptions={orderOptions} onChange={handleSortChange}/>
            </div>
        </div>

        <ProductsSection categoryParam={category} filtersParam={filters} sortParma={sort} />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default ProductsPage