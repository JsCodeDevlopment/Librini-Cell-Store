import React, { useContext, createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartQnt, setCartQnt] = useState(0);
  function increment() {
    setCartQnt(cartQnt + 1);
  }
  function decrement() {
    if (cartQnt > 0) {
      setCartQnt(cartQnt - 1);
    }
  }

  return (
    <CartContext.Provider
      value={{
        cartQnt,
        increment,
        decrement,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext)
