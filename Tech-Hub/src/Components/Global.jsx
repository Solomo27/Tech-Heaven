import React, { createContext, useContext, useState } from 'react';
import Data from '../Data'
import { data } from 'autoprefixer';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }) => {
  // State variables
  const [products, setProducts] = useState(Data);
  const [cart, setCart] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('all');
  

  // Other state manipulation functions...

  // Value to be provided by the context
  const contextValue = {
    products,
    cart,
    currentCategory,
    setCart,
    setCurrentCategory,
    // Add other state manipulation functions as needed
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};