import { Typography } from '@mui/material';

export default function Card({ id, card }) {
  return (
    <>
      <Typography variant='h6'>{card?.title}</Typography>
      <Typography variant='body2'>{id}</Typography>
    </>
  );
}
