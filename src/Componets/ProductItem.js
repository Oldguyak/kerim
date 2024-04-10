import React, { useState } from 'react';
import '../ProductItem.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Rating from '@mui/material/Rating';
import products from '../products';

const ProductItem = ({ product }) => {
  const [isLiked, setIsLiked] = useState(product.isLiked);

  const discountedPrice = product.oldPrice ? (product.price / (1 - product.discount / 100)).toFixed(2) : product.price;
  const formattedPrice = new Intl.NumberFormat('en-TM', { style: 'currency', currency: 'TMT' }).format(discountedPrice);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    product.likes = isLiked ? product.likes - 1 : product.likes + 1;
  };

  return (
    <div className="product-item">
      <div>
      {product.promotion && <span className="promotion-label">{product.promotion}</span>}
      <button className='like' onClick={handleLikeClick}>
          {isLiked?(<FavoriteIcon color="primary"/>):(<FavoriteBorderIcon color='primary'/>)}
       </button>
       </div>
       <div className='image-container'>
      <img className="product-image" src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <Rating name="read-only" value={product.rating} readOnly size='small'/>
        {!product.oldPrice && <p className="product-price">{formattedPrice}</p>}
        {product.oldPrice && (
          <div className="price-container">
            <span className='price-container'>
            <span className="old-price">{new Intl.NumberFormat('en-TM', { style: 'currency', currency: 'TMT' }).format(product.oldPrice)} <span className="strikethrough"></span></span>
            <span className="price-container">{formattedPrice}</span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductItem;