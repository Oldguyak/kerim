import React, { useState } from 'react';
import CategoryItem from './Componets/CategoryItem';
import './CategoryItem.css'

const categories = [
  'Phones and Smart Watches',
  'Computers & Laptops',
  'Computer Accessories',
  'Smartphones',
  'Headphones',
  'Mobile Accessories',
  'Gaming Consoles',
  'Camera & Photo',
  'TV & Home Appliances',
  'Watches & Accessories',
  'GPS & Navigation',
  'Wearable Technology',
];

const CategoryList = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSelectCategory = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="category-list">
      {categories.map((category, index) => (
        <CategoryItem
          className="category-item"
          key={category}
          category={category}
          name="category_group" // Same name for all categories
          isSelected={selectedCategory === category}
          onSelect={handleSelectCategory}
        />
      ))}
    </div>
  );
};

export default CategoryList;