import { styled, Typography, Card as MuiCard } from '@mui/material';

const StyledCard = styled(MuiCard)(({ theme }) => ({
  borderRadius: '1rem',
  padding: '1rem',
  backgroundColor: theme.palette.text.custom,
  ':hover': {
    // backgroundColor: theme.palette.primary.light,
    background: `linear-gradient(to right, ${theme.palette.primary.light}, ${theme.palette.primary.dark})`,
    color: theme.palette.text.custom,
  },
  transition: 'opacity .3s cubic-bezier(0.4, 0, 1, 1)',
  boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px',
}));

export default function Card({ id, card }) {
  return (
    <StyledCard>
      <Typography variant='h6'>{card?.title}</Typography>
      <Typography variant='body2'>{id}</Typography>
    </StyledCard>
  );
}
