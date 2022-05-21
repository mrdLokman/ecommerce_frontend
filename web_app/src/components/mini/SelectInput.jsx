import React from 'react'

const SelectInput = ({name, title, itemOptions, onChange}) => {

  const handlSelect = (e) => {
    onChange(e);
  }

  return (
    <select name={name} onChange={handlSelect} className="p-3 my-2 tablet:mr-5 border rounded-sm border-black cursor-pointer">
        { title && (<option disabled value={title}>{title}</option>)}
        {
            itemOptions.map((item) => { 
                return <option key={item.id} value={item.key}>{item.value}</option>;
            })
        }
    </select>
  )
}

export default SelectInput