import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    setCartCount(totalItems);
  }, [cartItems]);


  const addToWishlist = (item) => {
    setWishlistItems((prevItems) => {
      if (!prevItems.find(wishlistItem => wishlistItem.id === item.id)) {
        return [...prevItems, item];
      }
      return prevItems;
    });
  };

  const removeFromWishlist = (itemId) => {
    setWishlistItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  return (
    <CartContext.Provider value={{cartCount , cartItems, setCartItems, wishlistItems, addToWishlist, removeFromWishlist }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };
