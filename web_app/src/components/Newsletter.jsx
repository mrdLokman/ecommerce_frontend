import React from 'react'
import { CustomSendIcon } from './icons'

const Newsletter = () => {
  return (
    <div className="h-[60vh] bg-[#fcf5f5] flex items-center justify-center flex-col">
        <h1 className="text-7xl mb-5 font-bold">Newsletter</h1>
        <div className="text-xl text-center font-light mb-5">Get timely update from your favorite product.</div>
        <div className="flex w-4/5 mobile:w-1/2 h-10 bg-white items-center justify-between border border-gray-300 p-0">
            <input className=" border-none flex-[8] px-5" placeholder='Your email...' />
            <button className="flex-1 h-full w-full flex justify-center items-center border-none bg-teal-500">
                <CustomSendIcon className="w-6 h-5 text-white flex items-center justify-center"/>
            </button>
        </div>
    </div>
  )
}

export default Newsletter