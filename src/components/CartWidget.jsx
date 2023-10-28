import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom"

function CartWidget() {
  const { totalQuantity } = useContext(CartContext)

  const cartWidgetStyle = {
    textDecoration: "none",
    color: "#333", 
    padding: "10px",
    border: "1px solid #ccc", 
    borderRadius: "30%", 
    background: "#fff", 
    fontSize: "1.2rem", 
    marginRight: "10px", 
    display: totalQuantity > 0 ? "block" : "none",
  };

  return (
    <Link to="/cart" className="CartWidget" style={cartWidgetStyle}>
      <i className="fas fa-shopping-cart"></i> 
      {totalQuantity}
    </Link>
  )
}

export default CartWidget;