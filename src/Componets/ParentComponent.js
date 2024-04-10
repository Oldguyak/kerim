import React, { useState } from 'react';
import ProductItem from './ProductItem';
import NavigationBar from './NavigationBar';
import products from './products';

const ParentComponent = () => {
  const [productsData, setProductsData] = useState(products);

  const updateLikes = (productId, isLiked) => {
    setProductsData((prevData) => {
      const updatedProducts = prevData.map((product) => {
        if (product.id === productId) {
          return { ...product, likes: isLiked ? product.likes - 1 : product.likes + 1 };
        }
        return product;
      });
      return updatedProducts;
    });
  };

  return (
    <>
      <NavigationBar products={productsData} />
      <div className="product-list">
        {productsData.map((product) => (
          <ProductItem key={product.id} product={product} updateLikes={updateLikes} />
        ))}
      </div>
    </>
  );
};

export default ParentComponent;