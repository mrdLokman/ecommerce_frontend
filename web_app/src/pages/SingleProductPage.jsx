import React from 'react'
import { Navbar, Footer, Announcement, Newsletter } from '../components'
import { CustomAddIcon, CustomRemoveIcon } from '../components/icons'
import { SelectInput } from '../components/mini'
import { productExample } from '../data/dummy_data'
import { sizeOptions } from '../data/dummy_data'

const SingleProductPage = () => {
  return (
    <div>
        <Navbar />
        <Announcement />

        <div className="flex flex-col p-2 tablet:p-12 tablet:flex-row">
            <div className="flex-1">
                <img className="w-full h-[40vh] tablet:h-[90vh] object-cover" src={productExample.img} alt='img' />
            </div>
            <div className="flex-1 px-2 mt-5 tablet:px-10 tablet:mt-0">
                <h1 className="font-light text-5xl">{productExample.title}</h1>
                <p className="my-5">{productExample.description}</p>
                <span className="font-light text-4xl">{productExample.price} $</span>

                <div className="flex justify-between w-full tablet:w-1/2 my-7">
                    <div className="flex items-center">
                        <span className="text-xl font-light mr-2">Color</span>
                        {
                            productExample.colors.map((item, index)=>{
                                return (<div key={index} style={{background: item}} className={`w-5 h-5 rounded-full mr-2 cursor-pointer`}></div>);
                            })
                        }
                    </div>
                    <div className="flex items-center">
                        <span className="text-xl font-light mr-2">Size</span>
                        <SelectInput itemOptions={sizeOptions} />
                    </div>
                </div>

                <div className="flex items-center justify-between w-full tablet:w-1/2 my-7">
                    <div className="flex items-center font-bold">
                        <CustomRemoveIcon />
                        <span className="w-7 h-7 border rounded-md border-solid border-teal-500 text-center mx-1">1</span>
                        <CustomAddIcon />
                    </div>

                    <button className="cursor-pointer p-3 border-2 border-solid border-teal-500 bg-white hover:bg-teal-50">ADD TO CART</button>
                </div>
            </div>
        </div>

        <Newsletter />
        <Footer />
    </div>
  )
}

export default SingleProductPage