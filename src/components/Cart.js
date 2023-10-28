import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import CartItem from "./CartItem"
import { Link } from "react-router-dom"

const Cart = () => {
    const { cart, clearCart, totalQuantity, calculateTotal, removeItem } = useContext(CartContext)

    const total = calculateTotal();

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to="/" className="Option">Productos</Link>
            </div>
        )
    }

    return (
        <div>
            <h1>Mi carrito</h1>
            {cart.map(p => <CartItem
                key={p.id}
                id={p.id}
                title={p.title}
                quantity={p.quantity}
                price={p.price}
                removeItem={removeItem} 
                image={p.image}/>) 
                }
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
            <Link to="/checkout" className="Option">Checkout</Link>
        </div>
    )
}

export default Cart