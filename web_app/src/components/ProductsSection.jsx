import React from 'react'
import { ProductItem } from './mini'
import { popularProducts } from '../data/dummy_data'

const ProductsSection = () => {
  return (
    <div className="flex p-5 flex-wrap justify-center tablet:justify-between">
        {
            popularProducts.map((item)=>{
                return (<ProductItem key={item.id} item={item} />);
            })
        }
    </div>
  )
}

export default ProductsSection