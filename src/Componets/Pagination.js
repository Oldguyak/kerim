import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationOutlined() {
  return (
    <Stack spacing={2} 
    style={{
            display:'flex',
            alignItems:'center', 
            marginTop:"20px", 
            marginBottom:"25px"
            }}>
      <Pagination count={10} variant="outlined" color="primary" />
    </Stack>
  );
}