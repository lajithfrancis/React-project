// src/components/Card.js
import React, { useState } from 'react';
import { Card as MuiCard, CardContent, Typography } from '@mui/material';

const Card = ({
  card,
  setIsDragged,
  handleCardOnClick,
  setDraggedElementHeight,
}) => {
  const [isDragging, setIsDragging] = useState();
  const handleOnClick = () => {
    handleCardOnClick(card);
  };
  return (
    <MuiCard
      style={{
        borderRadius: '.5rem',
        opacity: isDragging ? 0.5 : 1,
        transition: 'opacity .3s cubic-bezier(0.4, 0, 1, 1)',
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px',
      }}
      draggable
      onDragStart={(e) => {
        setIsDragged(true);
        setIsDragging(true);
        setDraggedElementHeight(e.target.offsetHeight);
        console.log('e.target.offsetHeight: ', e.target.offsetHeight);
        console.log('drag started');
        e.dataTransfer.setData('activeCard', JSON.stringify(card));
      }}
      onDragEnd={() => {
        setIsDragged(false);
        setIsDragging(false);
        setDraggedElementHeight(null);
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
          // overflow: 'auto',
        }}
      >
        <Typography variant='h6'>{card.title}</Typography>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            overflow: 'auto',
          }}
        >
          <Typography variant='body2' color='' style={{ overflow: 'auto' }}>
            {card.description}
          </Typography>
          <Typography variant='body2' color='GrayText'>
            {5}
          </Typography>
        </div>
      </CardContent>
    </MuiCard>
  );
};

export default Card;
