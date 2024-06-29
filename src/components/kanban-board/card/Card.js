// src/components/Card.js
import React, { useState } from 'react';
import { Card as MuiCard, CardContent, Typography } from '@mui/material';

const Card = ({ card, setIsDragged, handleCardOnClick }) => {
  const [isDragging, setIsDragging] = useState();
  const handleOnClick = () => {
    handleCardOnClick(card);
  };
  return (
    <MuiCard
      style={{
        borderRadius: '15px',
        opacity: isDragging ? 0.5 : 1,
      }}
      draggable
      onDragStart={(e) => {
        setIsDragged(true);
        setIsDragging(true);
        console.log('drag started');
        e.dataTransfer.setData('id', card.id);
        e.dataTransfer.setData('activeCard', JSON.stringify(card));
      }}
      onDragEnd={() => {
        setIsDragged(false);
        setIsDragging(false);
        console.log('drag stopped');
      }}
      onClick={handleOnClick}
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
