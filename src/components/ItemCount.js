import { useState } from "react"

const ItemCount = ({ initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  }

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div className="item-count" style={itemCountStyles}>
      <div className="controls" style={controlsStyles}>
        <button className="decrement-button" style={buttonStyles} onClick={decrement}>-</button>
        <h4 className="quantity" style={quantityStyles}>{quantity}</h4>
        <button className="increment-button" style={buttonStyles} onClick={increment}>+</button>
      </div>
      <div>
        <button className="add-to-cart-button" style={addToCartButtonStyles} onClick={() => onAdd(quantity)} disabled={!10}>
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

const itemCountStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const controlsStyles = {
  display: "flex",
  alignItems: "center",
};

const buttonStyles = {
  backgroundColor: "#3f51b5",
  color: "#fff",
  fontSize: "16px",
  padding: "8px 16px",
  borderRadius: "4px",
  cursor: "pointer",
  margin: "0 8px",
};

const quantityStyles = {
  fontSize: "20px",
  fontWeight: "bold",
};

const addToCartButtonStyles = {
  backgroundColor: "#ff5722",
  color: "#fff",
  fontSize: "18px",
  padding: "12px 24px",
  borderRadius: "4px",
  cursor: "pointer",
  marginTop: "10px",
};

export default ItemCount