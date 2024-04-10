import React from 'react';
import '../BrandFilter.css'; 
import Checkbox from '@mui/material/Checkbox';


const brands = ['Apple', 'Microsoft', 'Dell', 'Symphony',
                'Sony', 'LG', 'One Plus', 'Google', 'Samsung',
                'HP', 'Xiaomi', 'Panasonic', 'Intel'];

const BrandFilter = () => {
  return (
    <div className="brand-filter">
      <span className="filter-title">BRANDS</span>
      <div className="checkbox-group">
        {brands.map((brand) => (
          <label key={brand}>
            <Checkbox size='medium'/> {brand}
          </label>
        ))}
      </div>
      <button className="filter-button">APPLY</button>
    </div>
  );
};

export default BrandFilter;