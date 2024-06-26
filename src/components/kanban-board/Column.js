import React, { useEffect, useState } from 'react';
import { Paper, Typography } from '@mui/material';
import Card from './Card';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const Column = ({ column, fetchCards, boardsCards }) => {
  const [cards, setCards] = useState([]);
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
  }, [column, boardsCards]);

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
        <div {...attributes} {...listeners}>
          <Typography variant='h5'>{column.title}</Typography>
        </div>
        {cards.map((card, index) => (
          <Card key={index} card={card} columnId={column.id} />
        ))}
      </Paper>
    </div>
  );
};

export default Column;
