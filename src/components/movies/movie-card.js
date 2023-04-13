import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({ data }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={data.Poster}
          alt="movie image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.Title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.Year}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
