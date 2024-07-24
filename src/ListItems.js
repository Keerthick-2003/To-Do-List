import { LineItem } from "./LineItem";

const ListItems = ({items, handleCheck, handleDelete}) => {

  return (
    <main className="main">
          {items.map((item)=> (
          
          <LineItem 
          item={item}
          key={item.id}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          />
          
          ))}
        </main>
  )
}

export default ListItems;