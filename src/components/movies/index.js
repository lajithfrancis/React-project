import { Grid } from "@mui/material";

import ActionAreaCard from "./movie-card";
import SearchBar from "./search-bar";
import { MovieProvider, useMovieContext } from "../context/movie-context";
import { useEffect } from "react";


function MoviesPage() {
  const movies = useMovieContext();
  useEffect(() => {
    console.log('movies context', movies);
  }, [movies]);
  return (
    <>
      <SearchBar>
        <h1>Movie list</h1>
        <Grid container spacing={2} columns={16}
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start">
          {movies.map(a => (
            <Grid key={a.imdbID} item xs={4} >
              <ActionAreaCard key={a.imdbID} data={a} />
            </Grid>
          )
          )}

        </Grid>
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