import React from "react";

export const Search = ({search, setSearch}) => {

  return (
    <form className='search' onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor='searchItem'></label>
        <input type='text' 
        placeholder='Search Item'
        role="search box"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        />
    </form>
  )
}
