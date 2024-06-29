import AddIcon from '@mui/icons-material/Add';

const AddNewCardButton = ({ handleOnClick }) => {
  return (
    <div
      style={{
        backgroundColor: '#E0E0E0',
        borderRadius: '15px',
        display: 'flex',
        justifyContent: 'center',
        // visibility: isDragged ? 'hidden' : 'visible',
        cursor: 'pointer',
        height: '10%',
      }}
      onClick={handleOnClick}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <AddIcon />
        <p style={{ margin: '0' }}>Add new card</p>
      </div>
    </div>
  );
};

export default AddNewCardButton;
