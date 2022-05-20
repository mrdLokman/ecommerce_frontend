import React from 'react'
import { CustomSearchIcon, ShoppingCartIcon } from './icons'
import Badge from '@mui/material/Badge';
import MenuItem from './MenuItem';

const Navbar = () => {
  return (
    <div className="h-12 mobile:h-14">
      <div className="mobile:px-5 py-3 flex justify-between items-center">
        <div className="tablet:flex-1 flex items-center">
          <span className="hidden tablet:block cursor-pointer text-sm">EN</span>
          <div className="border border-solid border-gray-400 rounded-sm flex items-center px-1 ml-6 group">
            <input className="border-none w-0 group-hover:w-full mobile:w-14 tablet:w-full focus:w-full" placeholder='Search'/>
            <CustomSearchIcon className="text-gray-500 w-5 h-5"/>
          </div>
        </div> 
        <div className="flex-1 justify-start tablet:justify-center text-center">
          <h1 className="font-bold  text-2xl mobile:text-3xl">
            MyShop.
          </h1>
        </div>
        <div className="flex-[2] mobile:flex-1 items-center justify-end hidden tablet:flex">
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon className="text-black w-7 h-7" />
            </Badge>
          </MenuItem>
        </div>
      </div>
    </div>
  )
}

export default Navbar