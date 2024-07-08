import { createContext, useContext, useState } from "react";

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const addProductToCart = (newProduct) => {
        setCart([...cart, newProduct])
    }
    const deleteProductFromCart = (index) => {
        const newCart = cart.filter((_, i) => i != index)
        setCart(newCart)
    }
    const updateProductQuantityInCart = (index, newQuantity) => {
        const newCart = [...cart];
        newCart[index] = {
            ...newCart[index],
            quantity: newQuantity,
            total: newQuantity * newCart[index].price
        };
        setCart(newCart)
    }
    return (
        <CartContext.Provider value={{ cart, addProductToCart, deleteProductFromCart, updateProductQuantityInCart }}>
            {children}
        </CartContext.Provider>
    )
}

