import AddIcon from '@mui/icons-material/Add';

import './Card.css';

const AddNewCardButton = ({ handleOnClick }) => {
  return (
    <div className='add-card-button' onClick={handleOnClick}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <AddIcon />
        <p style={{ margin: '0' }}>Add new card</p>
      </div>
    </div>
  );
};

export default AddNewCardButton;
