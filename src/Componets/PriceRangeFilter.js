import React, { useState } from 'react';
import '../PriceRangeFilter.css';
import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: '50%',
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 0 0 1px rgb(16 22 26 / 40%)'
      : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
  backgroundImage:
    theme.palette.mode === 'dark'
      ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
      : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background:
      theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#137cbd',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&::before': {
    display: 'block',
    width: 16,
    height: 16,
    backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#106ba3',
  },
});

function BpRadio(props) {
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

const priceRanges = [
  'All Price',
  'Under $20',
  '$25 to $100',
  '$100 to $300',
  '$300 to $500',
  '$500 to $1,000',
  '$1,000 to $10,000',
];

const PriceRangeFilter = () => {
  const [selectedRange, setSelectedRange] = useState('All Price');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleRangeChange = (event) => {
    setSelectedRange(event.target.value);
    setMinPrice(''); // Reset min/max prices if a pre-defined range is selected
    setMaxPrice('');
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'minPrice') {
      setMinPrice(value);
    } else if (name === 'maxPrice') {
      setMaxPrice(value);
    }
  };
  
  return (
    <div className="price-range-filter">
      <span className="filter-title">PRICE RANGE</span>
      <div className="price-inputs"> 
        <input
          className="price-input"
          type="number"
          name="minPrice"
          placeholder="Min Price"
          value={minPrice}
          onChange={handleInputChange}
          
        />
        <input
          className="price-input"
          type="number"
          name="maxPrice"
          placeholder="Max Price"
          value={maxPrice}
          onChange={handleInputChange}
        />
      </div>
      <FormControl> 
        <RadioGroup
          aria-labelledby="demo-customized-radios"
          name="price-range"
          value={selectedRange}
          onChange={handleRangeChange}
        >
          {priceRanges.map((range) => (
            <FormControlLabel
              className='price-lable'
              key={range}
              control={<BpRadio />} 
              value={range}
              checked={selectedRange === range}
              label={<span style={{ color: selectedRange === range ? 'black' : '#475156', fontWeight: selectedRange === range ? 'bold' : 'normal' }}>
              {range}
            </span>}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default PriceRangeFilter;