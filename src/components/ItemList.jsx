import Item from "./Item"

const ItemList= ({products}) => {
    return(
        <div className="ListGroup" style={containerStyles}>
            {products.map (prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

const containerStyles = {
    display: "flex",  
    flexWrap: "wrap",  
    justifyContent: "center",
    gap: "10px", 
  };

export default ItemList