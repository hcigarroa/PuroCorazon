import React, { useState } from "react";
import Item from "../components/Item";
export const cartContext = React.createContext([]);

const CartProvider = ({ Children }) => {
    const [cart, setCart] = useState([]);

const addProcuct = (Item, newQuantity) => {
    const newCart = cart.filter(prod => prod.id !== Item.id);
    newCart.push({...Item, quantity: newQuantity });
    setCart(newCart); 
}

const clearCart = () => setCart([]);

const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));


    return(
        <cartContext.Provider value={{
            clearCart,
            isInCart,
            removeProduct
        }}>
            {Children}
        </cartContext.Provider>
    )
}

export default CartProvider