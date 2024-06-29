import { useEffect, useState } from 'react';
import { Card as MuiCard, CardContent, Typography } from '@mui/material';
import '../index.css';

export default function DropArea({
  cardDropIndex,
  handleDrop,
  columnId,
  cards,
  setIsDragged,
  isDragged,
  draggedElementHeight,
}) {
  const [isHidden, setIsHidden] = useState(true);
  let timeout;

  const handleOnDrop = (e) => {
    e.preventDefault();
    setIsHidden(true);
    setIsDragged(false);
    const activeCard = JSON.parse(e.dataTransfer.getData('activeCard'));
    handleDrop(activeCard.id, activeCard.columnId, columnId, cardDropIndex);
  };
  console.log('height received in drop area: ', draggedElementHeight);

  return (
    <div
      style={{
        borderRadius: '20px',
        height:
          // isDragged && cardDropIndex === cards.length
          //   ? '100%'
          // : isHidden
          isHidden ? '20px' : `${draggedElementHeight}px`,
        transition: 'height 0.3s ease',
        border: !isHidden && '2px dotted',
        backgroundColor: !isHidden ? '#eeeeee' : 'transparent',
      }}
      className={'drop-area'}
      onDragEnter={() => {
        clearTimeout(timeout);
        setIsHidden(false);
        setIsDragged(true);
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
    ></div>
  );
}
