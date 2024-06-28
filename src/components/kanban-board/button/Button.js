import React, { useState } from 'react';
import {
  Button,
  IconButton,
  Stack,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SaveIcon from '@mui/icons-material/Save';

const ButtonComponent = ({ handleOnClick }) => {
  const [showActions, setShowActions] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);

  const handleDeleteClick = () => {
    setOpenConfirm(true);
    setShowActions(false);
  };

  const handleCloseConfirm = (confirmed) => {
    setOpenConfirm(false);
    setTimeout(() => {
      setShowActions(false);
    }, 0);
    if (confirmed) {
      handleOnClick();
      // Handle the delete action here
      console.log('Item deleted');
    }
  };

  return (
    <Box
      onClick={() => setShowActions(!showActions)}
      sx={{
        position: 'relative',
        display: 'inline-block',
        width: '100%',
      }}
    >
      <MoreVertIcon />
      <Stack
        position={'absolute'}
        visibility={showActions ? 'visible' : 'hidden'}
        onMouseLeave={() => setShowActions(false)}
        spacing={1}
        direction='column'
        sx={{
          marginLeft: '-10px',
          position: 'absolute',
          top: '100%',
          width: '40px',
          left: 0,
          mt: 1,
          backgroundColor: 'white',
          boxShadow: 3,
          zIndex: 1,
          p: 1,
          borderRadius: 1,
        }}
      >
        {/* <IconButton color='primary' aria-label='add'>
          <AddIcon />
        </IconButton>
        <IconButton color='secondary' aria-label='edit'>
          <EditIcon />
        </IconButton> */}
        <IconButton
          color='error'
          aria-label='delete'
          onClick={handleDeleteClick}
        >
          <DeleteIcon />
        </IconButton>
        {/* <IconButton color='default' aria-label='save'>
          <SaveIcon />
        </IconButton> */}
      </Stack>

      <Dialog
        open={openConfirm}
        onClose={() => handleCloseConfirm(false)}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{'Confirm Delete'}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Are you sure you want to delete this item?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleCloseConfirm(false)} color='primary'>
            Cancel
          </Button>
          <Button
            onClick={() => handleCloseConfirm(true)}
            color='error'
            autoFocus
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ButtonComponent;
