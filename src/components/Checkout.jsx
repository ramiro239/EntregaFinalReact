import React, { useState, useContext } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../services/firebaseConfig';
import { CartContext } from '../context/CartContext';

const Checkout = () => {
    const cartContext = useContext(CartContext); 
    const { calculateTotal, transformCartItems } = cartContext;

    const [buyerInfo, setBuyerInfo] = useState({
        name: '',
        email: '',
        phone: '',
    });
    const [orderId, setOrderId] = useState(null);

    const handleBuyerInfoChange = (event) => {
        const { name, value } = event.target;
        setBuyerInfo((prevBuyerInfo) => ({
            ...prevBuyerInfo,
            [name]: value,
        }));
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const order = {
                buyer: buyerInfo,
                total: calculateTotal(), // Debes implementar esta función
                items:  transformCartItems(), // Debes implementar esta función
                date: serverTimestamp(),
            };
            const docRef = await addDoc(collection(db, 'ORDERS'), order);
            setOrderId(docRef.id);
        } catch (error) {
            console.error('Error al crear la orden:', error);
        }
    };

    // Debes implementar estas funciones para calcular el total y transformar los items del carrito

    // const calculateTotal = () => {
    //     // Implementa la lógica para calcular el total
    // };

    // const transformCartItems = () => {
    //     // Implementa la lógica para transformar los items del carrito
    // };

    return (
        <div className="Checkout">
            {orderId ? (
                <div>
                    <h2>Orden Creada con Éxito</h2>
                    <p>Número de Orden: {orderId}</p>
                </div>
            ) : (
                <form onSubmit={handleFormSubmit}>
                    <h2>Checkout</h2>
                    <label>
                        Nombre:
                        <input
                            type="text"
                            name="name"
                            value={buyerInfo.name}
                            onChange={handleBuyerInfoChange}
                            required
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={buyerInfo.email}
                            onChange={handleBuyerInfoChange}
                            required
                        />
                    </label>
                    <label>
                        Teléfono:
                        <input
                            type="tel"
                            name="phone"
                            value={buyerInfo.phone}
                            onChange={handleBuyerInfoChange}
                            required
                        />
                    </label>
                    <button type="submit">Crear Orden</button>
                </form>
            )}
        </div>
    );
};

export default Checkout;
