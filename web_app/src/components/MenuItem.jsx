import React from 'react'

const MenuItem = ({children}) => {
  return (
    <div className="cursor-pointer text-sm ml-3">
        {children}
    </div>
  )
}

export default MenuItem