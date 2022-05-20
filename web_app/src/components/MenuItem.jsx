import React from 'react'

const MenuItem = ({children}) => {
  return (
    <div className="cursor-pointer text-xs mobile:text-sm ml-2 mobile:ml-4">
        {children}
    </div>
  )
}

export default MenuItem