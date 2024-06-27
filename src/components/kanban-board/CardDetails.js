import React from 'react';
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

const CardDetailsPage = ({ card }) => {
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
          <CloseIcon />
        </div>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label='Title'
              variant='outlined'
              fullWidth
              className='card-textField'
              value={card?.title}
            />
            <TextField
              label='Description'
              variant='outlined'
              fullWidth
              multiline
              rows={4}
              className='card-textField'
              value={card?.description}
            />
            <TextField
              label='Assignee'
              variant='outlined'
              fullWidth
              className='card-textField'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label='Priority'
              variant='outlined'
              fullWidth
              className='card-textField'
            />
            <TextField
              label='Status'
              variant='outlined'
              fullWidth
              className='card-textField'
            />
            <TextField
              label='Due Date'
              type='date'
              variant='outlined'
              fullWidth
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
