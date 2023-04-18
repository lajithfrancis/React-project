import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';

import ModalArea from './modal-details-page';
// import CircularLoader from '../../helpers/loader';
import SimpleBackdrop from '../../helpers/backdrop';


export default function ActionAreaCard({ data }) {
  const [open, setOpen] = useState(false);
  const [isLoading, setLoaderStatus] = useState(false);
  const [movie, setMovie] = useState('')
  const [movieData, setMovieData] = useState([]);

  const handleClickAction = (clickedMovie) => {
    setOpen(true);
    setMovie(clickedMovie);
  }

  useEffect(() => {
    if (open && movie.imdbID) {
      setLoaderStatus(true)
      axios.get(`https://www.omdbapi.com/?apikey=e7570bb3&i=${movie.imdbID}`)
      .then(({data}) => {
        if (data.Title) {
          setMovieData(data);
          setLoaderStatus(false)
        }
      })
      .catch(error => {
        console.error(error);
      })
    }
  }, [open, movie]);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onMouseDown={(e) => handleClickAction(data)}>
        {open ? <ModalArea data={movieData} isOpen={open} setOpen={setOpen}>
        {/* {isLoading ? <SimpleBackdrop isOpen={open} /> : null} */}
        </ModalArea> : null}
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
