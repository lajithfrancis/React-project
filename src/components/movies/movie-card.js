import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345, maxHeight: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/image.jpg"
          alt="movie image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Movie title
          </Typography>
          <Typography variant="body2" color="text.secondary">
          A film – also called a movie, motion picture, moving picture, picture, photoplay or (slang) flick – is a work of visual art that simulates experiences and otherwise communicates ideas, stories, perceptions, feelings, beauty, or atmosphere through the use of moving images.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
