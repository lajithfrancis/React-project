import { Grid } from "@mui/material";

import ActionAreaCard from "./movie-card";
import movieSearchList from "../../data/movie-search-list.json";
import SearchBar from "./search-bar";


export default function MoviePage() {
  return (
    <>
      <SearchBar>
        <h1>Movie list</h1>
        <Grid container spacing={2} columns={16}
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start">
          {movieSearchList.Search.map(a => (
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