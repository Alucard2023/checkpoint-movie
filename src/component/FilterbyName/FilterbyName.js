import React from 'react'
import { FormControl } from 'react-bootstrap'

const FilterbyName = ({inputSearch,setinputSearch}) => {
  return (
    <div>
        <FormControl
        type='text' placeholder='enter movie title..'
        className='filter-name'
        style={{width:"1000px"}}
        onChange = {(e)=>setinputSearch(e.target.value)}
        value={inputSearch}
        />
      
    </div>
  )
}

export default FilterbyName
