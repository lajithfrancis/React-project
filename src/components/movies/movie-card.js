import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useState } from 'react';
import movieDetails from '../../data/movie.json';
import ModalArea from './modal-details-page';


export default function ActionAreaCard({ data }) {
  const [open, setOpen] = useState(false);
  const [movie, setMovie] = useState('')
  const handleClickAction = () => {
    setOpen(true);
    setMovie(movieDetails)
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onMouseDown={(e) => handleClickAction()}>
        { open? <ModalArea data={movie} isOpen={open} setOpen={setOpen}/> : null}
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
