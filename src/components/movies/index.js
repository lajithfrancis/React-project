import { Grid, ListItem } from "@mui/material";
import ActionAreaCard from "./movie-card";

export default function MoviePage() {
  return (
    <>
      <h1>Movie list</h1>
      <Grid container spacing={2} columns={16}
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start">
        {[1, 2, 3, 4, 5, 6, 6].map(a => (
          <Grid key={a} item xs={4} >
              <ActionAreaCard key={a} />
          </Grid>
        )
        )}

      </Grid>
    </>
  );
}