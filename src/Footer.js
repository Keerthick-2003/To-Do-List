const Footer = ({length}) => {

  return (
    <div className="footer"><h2>{length} List {length===1 ? "Item" : "Items"}</h2></div>
  )
}

export default Footer