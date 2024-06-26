import React, { useEffect, useState } from 'react';
import { Button, Input, Paper, Typography } from '@mui/material';
import Card from './Card';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import DropArea from './Drop-Area';
import { useColumnContext } from './context/BoardContext';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

const Column = ({ column, fetchCards, handleDrop }) => {
  const [cards, setCards] = useState([]);
  const [title, setTitle] = useState('');
  const { boardCards, colDispatch } = useColumnContext();
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: {
      type: 'column',
      column,
    },
  });

  useEffect(() => {
    setTitle(column.title);
  }, [column]);

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
    opacity: isDragging && '40%',
  };

  useEffect(() => {
    const cards = fetchCards(column.id);
    setCards([...cards]);
  }, [column]);

  const handleOnClick = () => {
    colDispatch({ type: 'delete_column', id: column.id });
  };
  const handleSaveClick = () => {
    colDispatch({
      type: 'edit_column',
      payload: {
        id: column.id,
        title,
      },
    });
  };

  return (
    <div ref={setNodeRef} style={style}>
      <Paper
        style={{
          padding: '16px',
          width: '300px',
          height: '80vh',
          overflow: 'auto',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div {...attributes} {...listeners}>
            <DragIndicatorIcon />
          </div>
          <EditableTypography
            title={title}
            setTitle={setTitle}
            handleSave={handleSaveClick}
          />
          <Button style={{ marginLeft: 'auto' }} onClick={handleOnClick}>
            Delete
          </Button>
        </div>

        <DropArea handleDrop={handleDrop} columnId={column.id} cards={cards} />
        {cards.map((card, index) => (
          <React.Fragment key={index}>
            <Card key={index} card={card} columnId={column.id} />
            <DropArea
              handleDrop={handleDrop}
              columnId={column.id}
              cards={cards}
            />
          </React.Fragment>
        ))}
      </Paper>
    </div>
  );
};

function EditableTypography({ title, setTitle, handleSave }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (event) => {
    setTitle(event.target.value);
  };
  const handleOnClick = () => {
    handleSave();
    setIsEditing(false);
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleOnClick();
    }
  };

  return (
    <>
      {isEditing ? (
        <div>
          <Input
            value={title}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            autoFocus
          />
          <Button onClick={handleOnClick}>Save</Button>
        </div>
      ) : (
        <div onClick={() => setIsEditing(true)}>
          <Typography variant='h5'>{title}</Typography>
        </div>
      )}
    </>
  );
}

export default Column;
