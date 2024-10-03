import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

const FourthSinger = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
    console.log('Input changed:', event.target.value);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClick}>
        Fourth Singer
      </Button>
      <TextField
        value={inputValue}
        onChange={handleChange}
        style={{ marginTop: '10px' }}
      />
    </div>
  );
};

export default FourthSinger;
