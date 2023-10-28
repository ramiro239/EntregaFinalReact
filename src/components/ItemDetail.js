import ItemCount from "./ItemCount"
import {Link} from "react-router-dom"
import {useContext, useState} from "react"
import { CartContext } from "../context/CartContext"

const ItemDetail = ({ category, description, id, image, price, title }) => {
  const [quantityAdded, setQuantityAdded] = useState(0)

  const { addItem } = useContext(CartContext)

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)

    const item = {
      id, title, price
    }

    addItem(item, quantity)
  }

  return (
    <article className="card-item" style={itemStyles}>
      <header className="header" style={headerStyles}>
        <h2 className="item-header">{title}</h2>
      </header>
      <picture>
        <img src={image} alt={title} className="item-img" style={imageStyles} />
      </picture>
      <section style={infoStyles}>
        <p className="info" style={categoryStyles}>
          Categoría: {category}
        </p>
        <p className="info" style={descriptionStyles}>
          Descripción: {description}
        </p>
        <p className="info" style={priceStyles}>
          Precio: ${price}
        </p>
      </section>
      <footer className="item-footer" style={footerStyles}>
        {
          quantityAdded > 0 ? (
            <Link to="/cart" className="Option" style={linkStyles}>Terminar Compra</Link>
          ) : (
            <ItemCount
            initial={1}
            stock="10"
            onAdd={handleOnAdd}
          />
          )
        }
      </footer>
    </article>
  );
};

const linkStyles = {
  textDecoration: "none",
  backgroundColor: "#007BFF",
  color: "#fff",
  padding: "5px 10px",
  borderRadius: "4px",
};


const itemStyles = {
  backgroundColor: "#fff",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  margin: "10px",
  padding: "10px",
  width: "250px",
  textAlign: "center",
};

const headerStyles = {
  fontSize: "18px",
  fontWeight: "bold",
};

const imageStyles = {
  maxWidth: "100%",
  height: "auto",
};

const infoStyles = {
  marginTop: "10px",
};

const categoryStyles = {
  fontSize: "16px",
};

const descriptionStyles = {
  fontSize: "14px",
  color: "#888",
};

const priceStyles = {
  fontSize: "16px",
};

const footerStyles = {
  marginTop: "10px",
};


export default ItemDetail