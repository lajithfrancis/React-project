import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

const DeleteDialogBox = ({ openConfirm, setOpenConfirm, handleOnClick }) => {
  const handleCloseConfirm = (confirmed) => {
    if (confirmed) {
      handleOnClick();
      // Handle the delete action here
      console.log('Item deleted');
    }
    setOpenConfirm(false);
  };
  return (
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
  );
};

export default DeleteDialogBox;
