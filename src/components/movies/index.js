import { Grid } from "@mui/material";

import ActionAreaCard from "./movie-card";
import SearchBar from "./search-bar";
import { MovieProvider, useMovieContext } from "../context/movie-context";
import { useEffect } from "react";


function MoviesPage() {
  const movies = useMovieContext();
  return (
    <>
      <SearchBar>
        <div className='container'>
          <br />
          <Grid
            container
            spacing={2}
            columns={16}
            direction='row'
            justifyContent='flex-start'
            alignItems='flex-start'
          >
            {movies.map((a) => (
              <Grid key={a.imdbID} item xs={4}>
                <ActionAreaCard key={a.imdbID} data={a} />
              </Grid>
            ))}
          </Grid>
        </div>
      </SearchBar>
    </>
  );
}

export default function MoviePage() {
  return (
    <>
      <MovieProvider>
        <MoviesPage />
      </MovieProvider>
    </>
  )
}