import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Input from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import '../index.css'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectPlaceholder() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div className='dropdown-container'>
      <FormControl sx={{ m: 1, mt: 3 }} style={{display:'flex', flexDirection:'row'}}>
        <div>
        <Select
          multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<Input/>}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>All Categories</em>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
          style={{borderRadius:'10px', marginLeft:'20px'}}
        >
          <MenuItem disabled value="">
            <em>All Categories</em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
        
        <Select
          multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<Input/>}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Global orders</em>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
          style={{borderRadius:'10px', marginLeft:'20px'}}
        >
          <MenuItem disabled value="" style={{border:'none'}}>
            <em>Global orders</em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
              
            </MenuItem>
          ))}
        </Select>

        <Select
          multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<Input />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Best Deals</em>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
          style={{borderRadius:'10px', marginLeft:'20px'}}
        >
          <MenuItem disabled value="" style={{borderRadius:'25px'}}>
            <em>Best Deals</em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
        </div>
    <Box sx={{ '& button': { m: 1 } }}>
      <div className='faq-links'>
        <Button size="small"><CreateOutlinedIcon/> Blog</Button>
        <Button size="small"> <EmailOutlinedIcon/> Contact us</Button>
        <Button size="small"> <HeadphonesOutlinedIcon/> Customer Support</Button>
        <Button size="small"> <ErrorOutlineOutlinedIcon/> FAQ</Button>
        <Button size="large" style={{left:'20%'}}> <PhoneInTalkOutlinedIcon/> +993 64 065666</Button>
      </div>
    </Box>
      </FormControl>
    </div>
  );
}