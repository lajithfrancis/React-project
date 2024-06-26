import { useEffect, useState } from 'react';
import './Drop-Area.css';
import { Card as MuiCard, CardContent, Typography } from '@mui/material';

export default function DropArea({ handleDrop, columnId }) {
  const [isHidden, setIsHidden] = useState(true);
  let timeout;
  useEffect(() => {
    console.log('isHidden', isHidden);
  }, [isHidden]);

  const handleOnDrop = (e) => {
    setIsHidden(true);
    e.preventDefault();
    const id = e.dataTransfer.getData('id');
    handleDrop(id, columnId);
    console.log('drop area event: ', e);
  };
  return (
    <div
      style={{
        height: '20px',
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
        // setIsHidden(true);
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
            marginBottom: '16px',
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
