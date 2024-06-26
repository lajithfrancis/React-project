import React from 'react';
import { Paper, Typography } from '@mui/material';
import Card from './Card';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const Column = ({ column }) => {
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

  return (
    <div ref={setNodeRef} style={style}>
      <Paper style={{ padding: '16px', width: '300px' }}>
        <div {...attributes} {...listeners}>
          <Typography variant='h5'>{column.title}</Typography>
        </div>
        {column.cards.map((card, index) => (
          <Card key={index} card={card} columnId={column.id} />
        ))}
      </Paper>
    </div>
  );
};

export default Column;
