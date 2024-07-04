import { Button, Grid, Paper } from "@mui/material";

const AddNewColumn = ({onClick}) => {
    return (
        <Grid>
        <Paper
        style={{
          width: '300px',
          height: '80vh',
          overflow: 'auto',
          borderRadius: '1rem',
          marginTop: '1rem',
          marginLeft: '1rem',
        //   scrollbarWidth: 'none'
        }}
      >
        <Button style={{
            transform: 'translate(-50%, -50%)',
            left: '50%',
            top: '50%',
        }}
        onClick={onClick}>
            Add
        </Button>
      </Paper>
      </Grid>
    )
}

export default AddNewColumn;