import { createContext, useState, useEffect } from "react";
const addCartItem=(cartItems, productToAdd)=>{
    // find if cart items contain Product to add
    const existingCartItem=cartItems.find(item=>item.id===productToAdd.id);
    // if found, increment quantity
    if (existingCartItem) {
        // Return new array with incremented quantity for matched product
        return cartItems.map(item =>item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item);
    }
    return [...cartItems, {...productToAdd, quantity:1}]
}
export const CartContext=createContext({
    isCartOpen:false,
    setIsCartOpen: ()=>{},
    cartItems:[],
    addItemToCart:()=>{},
    cartCount:0,
});

export const CartProvider=({children})=>{
    const [isCartOpen, setIsCartOpen]=useState(false);
    const [cartItems,setCartItems]=useState([]);
    const [cartCount,setCartCount]=useState(0);
    useEffect(()=>{
        const newCartCount=cartItems.reduce((total, cartItem)=>total+cartItem.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems])
    const addItemToCart=(productToAdd)=>{
        setCartItems(addCartItem(cartItems, productToAdd))
    }
    return <CartContext.Provider value={{isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount}}>{children}</CartContext.Provider>
}