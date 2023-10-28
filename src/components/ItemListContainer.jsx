import React, { useState, useEffect } from 'react';
import "../css/main.css";
import ItemList from './ItemList';
import {useParams} from "react-router-dom"
import { db } from '../services/firebaseConfig';
import { where, collection, getDocs, query } from 'firebase/firestore';


function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const collectionRef = categoryId
      ? query(collection(db, "products"), where("category", "==", categoryId))
      : collection(db, "products");

    getDocs(collectionRef)
      .then((response) => {
        const productsAdapted = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProducts(productsAdapted);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <div>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
}

export default ItemListContainer