import React from 'react'
import { CustomSearchIcon } from './icons'

const Navbar = () => {
  return (
    <div className="h-4">
      <div className="px-5 py-3 flex justify-between items-center">
        <div className="flex-1 flex items-center">
          <span className="cursor-pointer text-sm">EN</span>
          <div className="border border-solid border-gray-400 rounded-sm flex items-center px-1 ml-6">
            <input className="border-none" />
            <CustomSearchIcon  color="black" />
          </div>
        </div>
        <div className="flex-1">center</div>
        <div className="flex-1">right</div>
      </div>
    </div>
  )
}

export default Navbar