import { Link } from "react-router-dom"

const Item = ({ id, title, image, price }) => {
    return (
        <article className="card-item" style={itemStyles}>
            <header className="header" style={headerStyles}>
                <h2 className="item-header">{title}</h2>
            </header>
            <picture>
                <img src={image} alt={title} className="item-img" style={imageStyles} />
            </picture>
            <section style={infoStyles}>
                <p className="info" style={priceStyles}>
                    Precio: ${price}
                </p>
                <p className="info" style={stockStyles}>
                    Stock disponible: 10
                </p>
            </section>
            <footer className="item-footer" style={footerStyles}>
                <Link to={`/item/${id}`} className="option" style={linkStyles}>
                    Ver detalles
                </Link>
            </footer>
        </article>
    );
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

const priceStyles = {
    fontSize: "16px",
};

const stockStyles = {
    fontSize: "14px",
    color: "#888",
};

const footerStyles = {
    marginTop: "10px",
};

const linkStyles = {
    textDecoration: "none",
    backgroundColor: "#007BFF",
    color: "#fff",
    padding: "5px 10px",
    borderRadius: "4px",
};


export default Item