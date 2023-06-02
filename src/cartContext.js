import React, { createContext, useState } from 'react';

// Create the cart context
export const CartContext = createContext();

// Create the CartProvider component
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  // Add item to the cart
  const addItemToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  // Remove item from the cart
  const removeItemFromCart = (index) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = [...prevCartItems];
      updatedCartItems.splice(index, 1);
      return updatedCartItems;
    });
  };

  // Add item to the wishlist
  const addWishlistItem = (item) => {
    setWishlistItems((prevItems) => [...prevItems, item]);
  };

  // Remove item from the wishlist
  const removeItemFromWishlist = (index) => {
    setWishlistItems((prevWishlistItems) => {
      const updatedWishlistItems = [...prevWishlistItems];
      updatedWishlistItems.pop(index);
      return updatedWishlistItems;
    });
  };

  // Clear the cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Calculate the total number of items in the cart
  const getTotalItems = () => {
    return cartItems.length;
  };

  // Calculate the total price of all items in the cart
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  // Cart provider value
  const cartContextValue = {
    cartItems,
    wishlistItems,
    addItemToCart,
    removeItemFromCart,
    addWishlistItem,
    removeItemFromWishlist,
    clearCart,
    getTotalItems,
    getTotalPrice,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
