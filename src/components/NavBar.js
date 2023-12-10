import './NavBar.css';
import CartWidget from './CartWidget/CartWidget';
import logo from './Logo/logo1.JPG';
import 'bulma/css/bulma.min.css';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
  console.log("NavBar rendered");
  return (
<nav className="navbar">
      <div className="navbar-brand">
        <Link to='/'>
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <div className="Categories">
        <NavLink to={'/category/Longboards'} activeclassname="ActiveOption" className="Option">Longboards</NavLink>
        <NavLink to={'/category/MediumBoard'} activeclassname="ActiveOption" className="Option">MediumBoard</NavLink>
        <NavLink to={'/category/Skate'} activeclassname="ActiveOption" className="Option">Skate</NavLink>
      </div>
      
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
