import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../services/firebaseConfig";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams(); 

  useEffect(() => {
    setLoading(true);

    const docRef = doc(db, "products", itemId);

    getDoc(docRef)
    .then((response) => {
      if (response.exists()) {
        const data = response.data();
        const productAdapted = { id: response.id, ...data };
        setProduct(productAdapted);
      } else {
        console.log("El documento no existe");
      }
    })
    .catch((error) => {
      console.log("Error al obtener el producto:", error);
    })
    .finally(() => {
      setLoading(false);
    });
}, [itemId]);

  return (
    <div className="ItemDetailContainer" style={containerStyles}>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ItemDetail {...product} />
      )}
    </div>
  );
};


const containerStyles = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "10px",
};

export default ItemDetailContainer