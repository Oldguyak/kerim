import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function SwitchLabels() {
  return (
    <FormGroup className='switch-labels'>
      <FormControlLabel control={<Switch defaultChecked />} label="Best Deals" />
      <FormControlLabel control={<Switch />} label="Out of Stock" />
    </FormGroup>
  );
}