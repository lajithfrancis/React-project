import { useEffect, useState } from 'react';
import './Drop-Area.css';
import { Card as MuiCard, CardContent, Typography } from '@mui/material';

export default function DropArea({ handleDrop, columnId }) {
  const [isHidden, setIsHidden] = useState(true);
  let timeout;

  const handleOnDrop = (e) => {
    setIsHidden(true);
    e.preventDefault();
    const id = e.dataTransfer.getData('id');
    handleDrop(id, columnId);
  };
  return (
    <div
      style={{
        height: isHidden ? '20px' : '50px',
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
            height: '50px',
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
