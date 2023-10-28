import React from "react";

const CartItem = ({ id, title, quantity, price, removeItem }) => {
  
  const cartItemStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    border: "1px solid #ccc",
    marginBottom: "10px",
    marginRight: "2%",
    marginLeft: "2%",
  };

  const cartItemDetailsStyles = {
    flex: "1",
  };

  const removeButtonStyles = {
    backgroundColor: "red",
    color: "white",
    border: "none",
    cursor: "pointer",
    textDecoration: "none",
    padding: "5px 10px",
    borderRadius: "4px",
  };

  return (
    <div className="cart-item" style={cartItemStyles}>
      <div className="cart-item-details" style={cartItemDetailsStyles}>
        <h4>{title}</h4>
        <p>Cantidad: {quantity}</p>
        <p>Precio: ${price * quantity}</p>
        
      </div>
      <button className="remove-button" style={removeButtonStyles} onClick={() => removeItem(id)}>
        Quitar
      </button>
    </div>
  );
};

export default CartItem;