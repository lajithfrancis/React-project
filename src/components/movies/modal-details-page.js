import { Box, Modal } from "@mui/material";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function ModalArea({ data, isOpen, setOpen, children }) {
  const handleClose = () => setOpen(false);
  return (
    <>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style }}>
          {children}
          <h2 id="parent-modal-title">{data.Title}</h2>
          <p id="parent-modal-description">
            {data.Plot}
          </p>
          <img src={data.Poster} alt="poster" />
        </Box>
      </Modal>
    </>

  );
}