import React from 'react'

const FilterButton = ({name}) => {
  return (
    <button className='px-3 py-1 mx-2 my-2 bg-gray-200 rounded-lg whitespace-nowrap cursor-pointer'>{name}</button>
  )
}

export default FilterButton