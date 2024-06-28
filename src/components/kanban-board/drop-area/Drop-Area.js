import { useEffect, useState } from 'react';
import './Drop-Area.css';
import { Card as MuiCard, CardContent, Typography } from '@mui/material';

export default function DropArea({
  cardDropIndex,
  handleDrop,
  columnId,
  cards,
  setIsDragged,
  isDragged,
}) {
  const [isHidden, setIsHidden] = useState(true);
  let timeout;

  const handleOnDrop = (e) => {
    setIsHidden(true);
    setIsDragged(false);
    e.preventDefault();
    const id = e.dataTransfer.getData('id');
    const activeCard = JSON.parse(e.dataTransfer.getData('activeCard'));
    handleDrop(id, activeCard.columnId, columnId, cardDropIndex);
  };
  return (
    <div
      style={{
        borderRadius: '20px',
        height:
          // isDragged && cardDropIndex === cards.length
          //   ? '100%'
          // : isHidden
          isHidden ? '20px' : '100px',
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
