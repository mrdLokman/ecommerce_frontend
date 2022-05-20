import React from 'react'

const CategoryItem = ({item}) => {
  return (
    <div className="flex-1 m-1 h-3/4 relative">
        <img className="w-full h-[50vh] tablet:h-full object-cover" alt='img' src={item.img}/>
        <div className="absolute flex items-center justify-center flex-col w-full h-full top-0 left-0">
            <h1 className="text-white mb-5 text-3xl">{item.title}</h1>
            <button className="p-3 text-xl bg-white text-gray-500 font-semibold border-none cursor-pointer">SHOP NOW</button>
        </div>
    </div>
  )
}

export default CategoryItem