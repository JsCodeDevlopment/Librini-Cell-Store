import React, { useContext, createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartQnt, setCartQnt] = useState(0);

  
  return (
    <CartContext.Provider
      value={{
        cartQnt,
        setCartQnt
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);
