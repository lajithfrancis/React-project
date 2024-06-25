import React from 'react';
import { Paper, Typography } from '@mui/material';
import Card from './Card';

const Column = ({ column }) => {
  return (
    <Paper style={{ padding: '16px', width: '300px' }}>
      <Typography variant='h5'>{column.title}</Typography>
      {column.cards.map((card, index) => (
        <Card key={index} card={card} columnId={column.id} />
      ))}
    </Paper>
  );
};

export default Column;
