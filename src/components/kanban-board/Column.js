import React, { useEffect, useState } from 'react';
import { Button, Paper, Typography } from '@mui/material';
import Card from './Card';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import DropArea from './Drop-Area';
import { useColumnContext } from './context/BoardContext';

const Column = ({ column, fetchCards, boardCards, handleDrop }) => {
  const [cards, setCards] = useState([]);
  const { boardColumns, colDispatch } = useColumnContext();
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
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
    opacity: isDragging && '40%',
  };

  useEffect(() => {
    const cards = fetchCards(column.id);
    setCards([...cards]);
  }, [column, boardCards]);

  const handleOnClick = () => {
    colDispatch({ type: 'delete_column', id: column.id });
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
            <Typography variant='h5'>{column.title}</Typography>
          </div>
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

export default Column;
