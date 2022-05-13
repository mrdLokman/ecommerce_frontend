import React from 'react'
import { categories } from "../data/dummy_data";
import { CategoryItem } from './mini';

const CategoriesSection = () => {
  return (
    <div className="flex p-5 justify-between">
      {
        categories.map((item)=>{
          return (
            <CategoryItem key={item.id} item={item} />
          );
        })
      }
    </div>
  )
}

export default CategoriesSection