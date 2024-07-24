import './App.css';

const Header = (props) => {


  return (
    <div className="header">{props.title}</div>
  )
}

Header.defaultProps={
  title:"TO Do App"
}

export default Header;