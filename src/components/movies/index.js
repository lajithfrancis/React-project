import { Grid, ListItem } from "@mui/material";
import ActionAreaCard from "./movie-card";
import movieSearchList from "../../data/movie-search-list.json";
import axios from 'axios';
import { useEffect, useState } from "react";


export default function MoviePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  // console.log("posts", posts)
  return (
    <>
      <h1>Movie list</h1>
      <Grid container spacing={2} columns={16}
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start">
        {movieSearchList.Search.map(a => (
          <Grid key={a.imdbID} item xs={4} >
              <ActionAreaCard key={a.imdbID} data={a}  />
          </Grid>
        )
        )}

      </Grid>
    </>
  );
}