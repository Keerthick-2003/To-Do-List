import ListItems from "./ListItems";
// import { MdDelete } from "react-icons/md";
import { AddItem } from "./AddItem";

const Content = ({items, handleCheck, handleDelete}) => {
      
  return (
       <div className="content">
        {items.length ? ( 

        <ListItems 
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        />

       ) : <h4>Your List Items Is Empty</h4>
    }
       <AddItem />
    </div>
    )
}

export default Content