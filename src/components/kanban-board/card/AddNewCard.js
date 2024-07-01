import AddIcon from '@mui/icons-material/Add';

import './Card.css';
import { Grid, IconButton, Typography, styled } from '@mui/material';

const AddNewCardButton = ({ handleOnClick }) => {
  // Create a styled IconButton component using @mui/system
  const StyledIconButton = styled(IconButton)(({ theme }) => ({
    color: theme.palette.text.secondary, // Default icon color from the theme
    '&:hover': {
      color: theme.palette.text.primary, // Icon color on hover, using secondary color from the theme
    },
  }));

  const StyledGridTypography = styled(Grid)(({ theme }) => ({
    color: theme.palette.text.secondary, // Default icon color from the theme
    '&:hover': {
      color: theme.palette.text.primary, // Icon color on hover, using secondary color from the theme
    },
  }));

  return (
    <StyledGridTypography
      onClick={handleOnClick}
      style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}
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
