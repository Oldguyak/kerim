import { createContext, useState } from "react";
import Products from "../products";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(Products);

  const updateLikes = (productId, shouldIncrease) => {
    setProducts(
      products.map((product) => {
        if (product.id === productId) {
          const newLikes = shouldIncrease
            ? product.likes + 1
            : product.likes - 1;
          return { ...product, likes: newLikes };
        }
        return product;
      })
    );
  };
  return (
    <ProductContext.Provider value={{ products, updateLikes }}>
      {children}
    </ProductContext.Provider>
  );
};