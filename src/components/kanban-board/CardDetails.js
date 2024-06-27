import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Grid,
  Avatar,
  Chip,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import './Card.css';
import { useCardContext } from './context/BoardContext';

const CardDetailsPage = ({ card, handleOnClick }) => {
  const [cardDetails, setCardDetails] = useState({});
  const { cardDispatch } = useCardContext();
  useEffect(() => {
    setCardDetails(card);
  }, [card]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prevDetails) => {
      return {
        ...prevDetails,
        [name]: value,
      };
    });
    cardDispatch({
      type: 'update_card',
      cardId: cardDetails.id,
      payload: {
        ...cardDetails,
        [name]: value,
      },
    });
  };
  return (
    <Card className='card-root'>
      <CardContent>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            variant='h5'
            className='card-title'
            style={{ flexGrow: 1 }}
          >
            Card Title
          </Typography>
          <CloseIcon onClick={handleOnClick} />
        </div>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label='Title'
              variant='outlined'
              fullWidth
              name='title'
              className='card-textField'
              value={cardDetails.title}
              onChange={handleOnChange}
            />
            <TextField
              label='Description'
              variant='outlined'
              fullWidth
              name='description'
              multiline
              rows={4}
              className='card-textField'
              value={cardDetails.description}
              onChange={handleOnChange}
            />
            <TextField
              label='Assignee'
              variant='outlined'
              fullWidth
              value={''}
              className='card-textField'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label='Priority'
              variant='outlined'
              fullWidth
              value={''}
              className='card-textField'
            />
            <TextField
              label='Status'
              variant='outlined'
              fullWidth
              value={''}
              className='card-textField'
            />
            <TextField
              label='Due Date'
              type='date'
              variant='outlined'
              fullWidth
              value={''}
              InputLabelProps={{ shrink: true }}
              className='card-textField'
            />
          </Grid>
        </Grid>

        <Typography variant='h6' className='card-section'>
          Comments
        </Typography>
        <TextField
          label='Add a comment'
          variant='outlined'
          fullWidth
          multiline
          rows={3}
          value={''}
          className='card-textField'
        />
        <Button variant='contained' color='primary' className='card-button'>
          Add Comment
        </Button>

        <Typography variant='h6' className='card-section'>
          Activity
        </Typography>
        <Typography variant='body2'>
          <b>John Doe</b> commented on <i>June 24, 2024</i>: "This is a
          comment."
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardDetailsPage;
