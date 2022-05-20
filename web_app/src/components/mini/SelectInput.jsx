import React from 'react'

const SelectInput = ({title, itemOptions}) => {
  return (
    <select className="p-3 my-2 tablet:mr-5 border rounded-sm border-black cursor-pointer">
        { title && (<option disabled selected>{title}</option>)}
        {
            itemOptions.map((item) => { 
                return <option key={item.id}>{item.value}</option>;
            })
        }
    </select>
  )
}

export default SelectInput