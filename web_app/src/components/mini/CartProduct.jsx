import React from 'react'
import { CustomAddIcon, CustomRemoveIcon } from '../icons/index'
const CartProduct = ({product}) => {
  return (
    <div className="flex justify-between p-5">
        <div className="flex-[2] flex">
            <img className="w-[200px] h-[200px] object-fit" alt='img' src={product.imgUrl}/>
            <div className="flex p-5 flex-col justify-around">
                <span className=""><b>Product: </b>{product.title}</span>
                <span className=""><b>ID: </b>{product.id}</span>
                <div className="w-5 h-5 rounded-full" style={{backgroundColor: product.color}}></div>
                <span className=""><b>Size: </b>{product.size} </span>
            </div>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center">
          <div className="flex items-center font-bold mb-5">
            <CustomRemoveIcon />
            <span className="w-7 h-7 border rounded-md border-solid border-teal-500 text-center text-2xl mx-1">1</span>
            <CustomAddIcon />
          </div>
          <div className="text-3xl font-light">{product.price} $</div>
        </div>
    </div>
  )
}

export default CartProduct