// src/components/Card.js
import React from 'react';
import { Card as MuiCard, CardContent, Typography } from '@mui/material';

const Card = ({ card }) => {
  return (
    <MuiCard
      draggable
      onDragStart={(e) => {
        e.dataTransfer.setData('id', card.id);
        e.dataTransfer.setData('activeCard', JSON.stringify(card));
      }}
    >
      <CardContent>
        <Typography variant='h6'>{card.title}</Typography>
        <Typography variant='body2' color='textSecondary'>
          {card.description}
        </Typography>
      </CardContent>
    </MuiCard>
  );
};

export default Card;
