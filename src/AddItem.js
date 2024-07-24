import React from "react";
import { MdAddBox } from "react-icons/md";
import { useRef } from "react";

export const AddItem = ({NewItem, setNewItem, handleSubmit}) => {
  
  let inputRef=useRef()

  return (
    <form className="AddItem" onSubmit={handleSubmit}>
        <label htmlFor="Add Item"></label>
        <input type="text"
        ref={inputRef}
        required
        placeholder="Add Item"
        autoFocus
        value={NewItem}
        onChange={(e)=> setNewItem(e.target.value)}
        />
        <button>
        <MdAddBox className="Addbtn"
        onClick={()=> inputRef.current.focus()}/>
        </button>
    </form>
  )
}
