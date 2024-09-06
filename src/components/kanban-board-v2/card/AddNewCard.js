import AddIcon from '@mui/icons-material/Add';
import { Grid, Typography, styled } from '@mui/material';

import './Card.css';

const AddNewCardButton = ({ handleOnClick }) => {
  const StyledGridTypography = styled(Grid)(({ theme }) => ({
    color: theme.palette.secondary.main, // Default icon color from the theme
    '&:hover': {
      color: theme.palette.secondary.light, // Icon color on hover, using secondary color from the theme
    },
  }));

  return (
    <StyledGridTypography
      onClick={handleOnClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '1rem',
        cursor: 'pointer',
      }}
    >
      <AddIcon
        style={{
          marginRight: '5px',
        }}
      />
      <Typography>Add new card</Typography>
    </StyledGridTypography>
  );
};

export const AddNewButton = ({ handleOnClick, title }) => {
  const StyledGridTypography = styled(Grid)(({ theme }) => ({
    color: theme.palette.secondary.main, // Default icon color from the theme
    '&:hover': {
      color: theme.palette.secondary.light, // Icon color on hover, using secondary color from the theme
    },
  }));

  return (
    <StyledGridTypography
      onClick={handleOnClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: '1rem',
        cursor: 'pointer',
      }}
    >
      <AddIcon
        style={{
          marginRight: '5px',
        }}
      />
      <Typography>{title}</Typography>
    </StyledGridTypography>
  );
};

export default AddNewCardButton;
