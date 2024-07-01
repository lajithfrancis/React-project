// src/components/Card.js
import React, { useState } from 'react';
import {
  Card as MuiCard,
  CardContent,
  Typography,
  styled,
} from '@mui/material';

const StyledGrid = styled(MuiCard)(({ theme }) => ({
  borderRadius: '.5rem',
  backgroundColor: theme.palette.text.custom,
  ':hover': {
    // backgroundColor: theme.palette.primary.light,
    background:
      'linear-gradient(to right, #9565dc, #945de4, #9256eb, #914ff2, #8f48f9)',
    color: theme.palette.text.custom,
  },
  transition: 'opacity .3s cubic-bezier(0.4, 0, 1, 1)',
  boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px',
}));

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
    <StyledGrid
      style={{
        // borderRadius: '.5rem',
        opacity: isDragging ? 0.5 : 1,
        // transition: 'opacity .3s cubic-bezier(0.4, 0, 1, 1)',
        // boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px',
        // boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px',
        // boxShadow: 'rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px'
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
    </StyledGrid>
  );
};

export default Card;
