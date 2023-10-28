import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { Timestamp, collection, getDocs, query, writeBatch, where, addDoc,  } from "firebase/firestore"
import { db } from "../services/firebaseConfig"

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState("")

    const { cart, total, clearCart} = useContext (CartContext)

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);
      
        try {
          const objOrder = {
            buyer: {
              name,
              phone,
              email,
            },
            items: cart,
            total: total,
            date: Timestamp.fromDate(new Date()),
          };
      
          const batch = writeBatch(db);
          const outOfStock = [];
          const ids = cart.map((prod) => prod.id);
          const productsRef = collection(db, "products");
      

          const productsAddedFromFirestore = await getDocs(query(productsRef, where('id', 'in', ids)));
      
          productsAddedFromFirestore.forEach((doc) => {
            const productData = doc.data();
            const cartItem = cart.find((item) => item.id === productData.id);
            if (cartItem && cartItem.quantity <= productData.stock) {
              const docRef = doc(db, "products", doc.id);
              batch.update(docRef, {
                stock: productData.stock - cartItem.quantity,
              });
            } else {
              outOfStock.push(cartItem);
            }
          });
      
          if (outOfStock.length > 0) {
            alert("Algunos productos están fuera de stock. Verifica tu carrito.");
            setLoading(false);
          } else {
            const ordersRef = collection(db, "orders");
            const newOrder = await addDoc(ordersRef, objOrder);
            setOrderId(newOrder.id);
            clearCart();
          }
        } catch (error) {
          console.error("Error al crear la orden:", error);
        }
      };
      

    if(loading) {
        return <h1>Se esta generando su orden...</h1>
    }

    if(orderId) {
        return <h1>El id de su orden es: {orderId}</h1>
    }

    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
    )
}

export default Checkout