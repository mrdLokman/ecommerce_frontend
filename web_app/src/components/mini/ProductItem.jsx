import React from 'react'
import { CustomSearchIcon, ShoppingCartIcon, FavoriteIcon } from '../icons'

const ProductItem = ({item}) => {
  return (
    <div className="min-w-280 h-87 relative flex justify-center items-center m-3 bg-[#f5fbfd] group">
        <div className="w-52 h-52 rounded-full bg-white absolute"></div>
        <img className="h-3/4 z-10" src={item.img} alt='img' />
        <div className="cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in w-full h-full absolute top-0 left-0 bg-black/20 z-20 flex items-center justify-center">
            <div className="cursor-pointer w-10 h-10 rounded-full flex items-center justify-center bg-white m-3 hover:bg-[#e9f5f5] transition-all duration-100 ease-in hover:scale-110">
                <CustomSearchIcon className="h-full w-full p-1" />
            </div>
            <div className="cursor-pointer w-10 h-10 rounded-full flex items-center justify-center bg-white m-3 hover:bg-[#e9f5f5] transition-all duration-100 ease-in hover:scale-110">
                <ShoppingCartIcon className="h-full w-full p-1" />
            </div>
            <div className="cursor-pointer w-10 h-10 rounded-full flex items-center justify-center bg-white m-3 hover:bg-[#e9f5f5] transition-all duration-100 ease-in hover:scale-110">
                <FavoriteIcon className="h-full w-full p-1" />
            </div>
        </div>
    </div>
  )
}

export default ProductItem