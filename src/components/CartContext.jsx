import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); // initialiserer cartItems som et tomt array

  // Funktion til at tilføje varer til kurven
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  // Funktion til at fjerne varer fra kurven
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
