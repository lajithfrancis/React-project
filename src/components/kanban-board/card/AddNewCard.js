import AddIcon from '@mui/icons-material/Add';

import './Card.css';
import { Grid, IconButton, Typography, styled } from '@mui/material';

const AddNewCardButton = ({ handleOnClick }) => {
  const StyledGridTypography = styled(Grid)(({ theme }) => ({
    color: theme.palette.secondary.main, // Default icon color from the theme
    '&:hover': {
      color: theme.palette.primary.main, // Icon color on hover, using secondary color from the theme
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

export default AddNewCardButton;
