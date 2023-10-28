import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget";


function NavBar() {

  return (
    <nav className="Navbar" style={navStyles}>
      <Link to="/" style={logoStyles}>
        <h3>ShopNow</h3>
      </Link>
      <div className="Categories" style={categoriesStyles}>
        <NavLink to={"/category/men's clothing"} className={({ isActive }) => isActive ? "ActiveOption" : "Option"} style={categoryStyles}>Men's clothing</NavLink>
        <NavLink to={"/category/jewelery"} className={({ isActive }) => isActive ? "ActiveOption" : "Option"} style={categoryStyles}>Jewelery</NavLink>
        <NavLink to={"/category/electronics"} className={({ isActive }) => isActive ? "ActiveOption" : "Option"} style={categoryStyles}>Electronics</NavLink>
        <NavLink to={"/category/women's clothing"} className={({ isActive }) => isActive ? "ActiveOption" : "Option"} style={categoryStyles}>Women's clothing</NavLink>
      </div>
      <CartWidget />
    </nav>

  )
}

const navStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#333",
  color: "#fff",
  padding: "10px 20px",
};

const logoStyles = {
  textDecoration: "none",
  color: "#fff",
  fontSize: "24px",
  fontWeight: "bold",
  marginRight: "auto",
};

const categoriesStyles = {
  display: "flex",
  alignItems: "center",
};

const categoryStyles = {
  textDecoration: "none",
  color: "#fff",
  marginRight: "20px",
  fontSize: "16px",
};

export default NavBar;