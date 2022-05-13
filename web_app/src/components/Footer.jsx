import React from 'react'
import { CustomAddressIcon, CustomEMailIcon, CustomFacebookIcon, CustomInstagramIcon, CustomPhoneIcon, CustomTwitterIcon } from './icons'

const Footer = () => {
  return (
    <div className="flex items-start justify-center">
        <div className="flex-1 flex flex-col p-5">
            <h1 className="text-xl font-bold">MyShop.</h1>
            <p className="my-5 px-3">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
            <div className="flex px-3">
                <CustomFacebookIcon className="w-10 h-10 cursor-pointer rounded-full text-white bg-[#4267B2] mr-5" />
                <CustomInstagramIcon className="w-10 h-10 cursor-pointer rounded-full text-white bg-[#F77737] mr-5" />
                <CustomTwitterIcon className="w-10 h-10 cursor-pointer rounded-full text-white bg-[#1DA1F2] mr-5" />
            </div>
        </div>
        <div className="flex-1 p-5">
            <h3 className="mb-7 font-semibold text-lg">Usefull Links</h3>
            <ul className="m-0 p-0 flex flex-wrap px-3">
                <li className="cursor-pointer w-1/2 mb-2">Home</li>
                <li className="cursor-pointer w-1/2 mb-2">Cart</li>
                <li className="cursor-pointer w-1/2 mb-2">Men Fashion</li>
                <li className="cursor-pointer w-1/2 mb-2">Wonem Fashion</li>
                <li className="cursor-pointer w-1/2 mb-2">My Account</li>
                <li className="cursor-pointer w-1/2 mb-2">My Orders</li>
                <li className="cursor-pointer w-1/2 mb-2">Terms</li>
            </ul>
        </div>
        <div className="flex-1 p-5">
            <h3 className="mb-7 font-semibold text-lg">Contact infos</h3>
            <div className="px-3">
                <div className="cursor-pointer mb-2 p-1 flex justify-start items-center">
                    <CustomAddressIcon className="w-5 h-5 mr-4" />
                    Dar-elbieda, Algiers, Algeria.
                </div>
                <div className="cursor-pointer mb-2 p-1 flex justify-start items-center">
                    <CustomPhoneIcon className="w-5 h-5 mr-4" />
                    +213773699828
                </div>
                <div className="cursor-pointer mb-2 p-1 flex justify-start items-center">
                    <CustomEMailIcon className="w-5 h-5 mr-4" />
                    Merdjilokman@gmail.com
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer