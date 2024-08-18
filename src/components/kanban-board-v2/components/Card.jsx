import { Typography } from '@mui/material';

export default function Card({ id, card }) {
  return (
    <div
      style={{
        borderRadius: '1rem',
        padding: '1rem',
        width: '100%',
        height: '100%',
        zIndex: 10,
        position: 'relative',
      }}
    >
      <Typography variant='h6'>{card?.title}</Typography>
      <Typography variant='body2'>{id}</Typography>
    </div>
  );
}
