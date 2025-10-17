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

const removeCartItem=(cartItems, cartItemToRemove)=>{
    //find item to remove or decrement
    const existingCartItem=cartItems.find(item=>item.id===cartItemToRemove.id);

    // remove item from the cartItems 
    if (existingCartItem.quantity===1){
        return cartItems.filter(item=>item.id!==cartItemToRemove.id);
    } 
    //decrement quantity
    return cartItems.map(item =>item.id === existingCartItem.id ? { ...item, quantity: item.quantity - 1 } : item);
}
const clearItem=(cartItems, cartItemToRemove)=>{
    return cartItems.filter(item=>item.id!==cartItemToRemove.id);
}
export const CartContext=createContext({
    isCartOpen:false,
    setIsCartOpen: ()=>{},
    cartItems:[],
    addItemToCart:()=>{},
    removeItemFromCart:()=>{},
    clearItemFromCart:()=>{},
    cartCount:0,
    cartTotal:0
});

export const CartProvider=({children})=>{
    const [isCartOpen, setIsCartOpen]=useState(false);
    const [cartItems,setCartItems]=useState([]);
    const [cartCount,setCartCount]=useState(0);
    const [cartTotal,setCartTotal]=useState(0);
    useEffect(()=>{
        const newCartCount=cartItems.reduce((total, cartItem)=>total+cartItem.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems])
    useEffect(()=>{
        const newCartTotal=cartItems.reduce((total, cartItem)=>total+cartItem.quantity*cartItem.price, 0);
        setCartTotal(newCartTotal);
    }, [cartItems])
    const addItemToCart=(productToAdd)=>{
        setCartItems(addCartItem(cartItems, productToAdd))
    }
    const removeItemFromCart=(cartItemToRemove)=>{
        setCartItems(removeCartItem(cartItems,cartItemToRemove));
    }
    const clearItemFromCart=(cartItemToRemove)=>{
        setCartItems(clearItem(cartItems, cartItemToRemove));
    }

    return <CartContext.Provider value={{isCartOpen, setIsCartOpen, addItemToCart, removeItemFromCart, clearItemFromCart,cartTotal, cartItems, cartCount}}>{children}</CartContext.Provider>
}