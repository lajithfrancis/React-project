import { Button, Grid, Paper } from "@mui/material";
import { AddNewButton } from "../card/AddNewCard";

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
        <div style={{
            position: 'relative',
            transform: 'translate(-50%, -50%)',
            left: '50%',
            top: '50%',
        }}>
        <AddNewButton handleOnClick={onClick} title={'Add New Column'} />

        </div>
        {/* <Button style={{
            transform: 'translate(-50%, -50%)',
            left: '50%',
            top: '50%',
        }}
        onClick={onClick}>
            Add New Column
        </Button> */}
      </Paper>
      </Grid>
    )
}

export default AddNewColumn;