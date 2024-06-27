import { useEffect, useState } from 'react';
import './Drop-Area.css';
import { Card as MuiCard, CardContent, Typography } from '@mui/material';

export default function DropArea({
  cardDropIndex,
  handleDrop,
  columnId,
  cards,
}) {
  const [isHidden, setIsHidden] = useState(true);
  let timeout;

  const handleOnDrop = (e) => {
    setIsHidden(true);
    e.preventDefault();
    const id = e.dataTransfer.getData('id');
    const activeCard = JSON.parse(e.dataTransfer.getData('activeCard'));
    handleDrop(id, activeCard.columnId, columnId, cardDropIndex);
  };
  return (
    <div
      style={{
        height:
          cards.length === cardDropIndex
            ? '100%'
            : isHidden
            ? '20px'
            : cards.length
            ? '100px'
            : '100%',
        transition: 'height 0.3s ease',
      }}
      className={'drop-area'}
      onDragEnter={() => {
        clearTimeout(timeout);
        setIsHidden(false);
      }}
      onDragLeave={() => {
        timeout = setTimeout(() => {
          setIsHidden(true);
        }, 100);
      }}
      onDrop={(e) => handleOnDrop(e)}
      onDragOver={(e) => {
        e.preventDefault();
        clearTimeout(timeout);
      }}
    >
      {!isHidden && (
        <MuiCard
          style={{
            height: '100%',
            backgroundColor: !isHidden ? 'lightgrey' : 'transparent',
          }}
        >
          <CardContent>
            <Typography variant='h6'></Typography>
            <Typography variant='body2' color='textSecondary'></Typography>
          </CardContent>
        </MuiCard>
      )}
    </div>
  );
}
