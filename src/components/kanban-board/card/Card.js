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
        borderRadius: '.5rem',
        opacity: isDragging ? 0.5 : 1,
      }}
      draggable
      onDragStart={(e) => {
        setIsDragged(true);
        setIsDragging(true);
        console.log('drag started');
        e.dataTransfer.setData('activeCard', JSON.stringify(card));
      }}
      onDragEnd={() => {
        setIsDragged(false);
        setIsDragging(false);
        console.log('drag stopped');
      }}
      onClick={handleOnClick}
    >
      <CardContent
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: '7rem',
          maxHeight: '10rem',
          overflow: 'auto',
        }}
      >
        <Typography variant='h6'>{card.title}</Typography>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant='body2' color='textSecondary'>
            {card.description}
          </Typography>
          <Typography variant='body2' color='textSecondary'>
            {5}
          </Typography>
        </div>
      </CardContent>
    </MuiCard>
  );
};

export default Card;
