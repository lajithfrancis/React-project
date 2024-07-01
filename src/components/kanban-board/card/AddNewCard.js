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

  const StyledTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary, // Default icon color from the theme
    '&:hover': {
      color: theme.palette.text.primary, // Icon color on hover, using secondary color from the theme
    },
  }));

  return (
    <Grid className='add-card-button' onClick={handleOnClick}>
      <Grid style={{ display: 'flex', alignItems: 'center' }}>
        <StyledIconButton>
          <AddIcon />
        </StyledIconButton>
        <StyledTypography>
          <Typography color='main' style={{ margin: '0' }}>
            Add new card
          </Typography>
        </StyledTypography>
      </Grid>
    </Grid>
  );
};

export default AddNewCardButton;
