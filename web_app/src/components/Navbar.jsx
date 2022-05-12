import React from 'react'
import { CustomSearchIcon, ShoppingCart } from './icons'
import Badge from '@mui/material/Badge';
import MenuItem from './MenuItem';

const Navbar = () => {
  return (
    <div className="h-14">
      <div className="px-5 py-3 flex justify-between items-center">
        <div className="flex-1 flex items-center">
          <span className="cursor-pointer text-sm">EN</span>
          <div className="border border-solid border-gray-400 rounded-sm flex items-center px-1 ml-6">
            <input className="border-none" />
            <CustomSearchIcon className="text-gray-500 w-5 h-5"/>
          </div>
        </div>
        <div className="flex-1 text-center">
          <h1 className="font-bold text-2xl">
            MyShop.
          </h1>
        </div>
        <div className="flex-1 flex items-center justify-end">
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCart   color="black" size={"medium"} />
            </Badge>
          </MenuItem>
        </div>
      </div>
    </div>
  )
}

export default Navbar