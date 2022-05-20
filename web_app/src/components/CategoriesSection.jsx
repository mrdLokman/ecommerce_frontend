import React from 'react'
import { categories } from "../data/dummy_data";
import { CategoryItem } from './mini';

const CategoriesSection = () => {
  return (
    <div className="flex flex-col tablet:flex-row p-0 tablet:p-5 tablet:justify-between">
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