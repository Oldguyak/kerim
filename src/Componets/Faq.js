import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function ButtonSizes() {
  return (
    <Box sx={{ '& button': { m: 1 } }}>
      <div className='faq-links'>
        <Button size="small">Blog</Button>
        <Button size="small">Contact us</Button>
        <Button size="small">Customer Support</Button>
        <Button size="small">FAQ</Button>
        <Button size="large"> +993 64 065666</Button>
      </div>
    </Box>
  );
}