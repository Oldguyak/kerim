import React, { useState } from "react";
import "../ProductItem.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Rating from "@mui/material/Rating";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const ProductItem = ({ product }) => {
  const { updateLikes } = useContext(ProductContext);

  const [isLiked, setIsLiked] = useState(product.isLiked);

  const price = parseFloat(product.price);
  const discount = parseFloat(product.discount);

  const discountedPrice = product.oldPrice
    ? (price / (1 - discount / 100)).toFixed(2)
    : price;
  const formattedPrice = new Intl.NumberFormat("en-TM", {
    style: "currency",
    currency: "TMT",
  }).format(discountedPrice);

  console.log(discountedPrice);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    updateLikes(product.id, !isLiked);
  };

  return (
    <div className="product-item">
      <div>
        {product.promotion && (
          <span className="promotion-label">{product.promotion}</span>
        )}
        <button className="like" onClick={handleLikeClick}>
          {isLiked ? (
            <FavoriteIcon color="primary" />
          ) : (
            <FavoriteBorderIcon color="primary" />
          )}
        </button>
      </div>
      <div className="image-container">
        <img
          className="product-image"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <Rating name="read-only" value={product.rating} readOnly size="small" />
        {!product.oldPrice && <p className="product-price">{formattedPrice}</p>}
        {product.oldPrice && (
          <div className="price-container">
            <span className="price-container">
              <span className="old-price">
                {new Intl.NumberFormat("en-TM", {
                  style: "currency",
                  currency: "TMT",
                }).format(product.oldPrice)}{" "}
                <span className="strikethrough"></span>
              </span>
              <span className="price-container">
                {" "}
                {new Intl.NumberFormat("en-TM", {
                  style: "currency",
                  currency: "TMT",
                }).format(product.price)}{" "}
              </span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductItem;