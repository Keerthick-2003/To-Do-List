import { MdDelete } from "react-icons/md";

export const LineItem = ({item, handleCheck, handleDelete}) => {

    return (
        <span className="item">
        <input
        className="input1"
        type="checkbox"
        checked={item.checked}
        onChange={()=>handleCheck(item.id)}
      />
        
      <label
        className="label1"
        onClick={()=>handleCheck(item.id)}
        style={(item.checked) ? {textDecoration:"line-through"} : null}
      >
        {item.item}
      </label>
        
      <MdDelete 
        className="btn1"
        role="button"
        onClick={()=>handleDelete(item.id)}
        aria-label={`Delete, ${item.item}`}
     />
     </span>
  )
}
