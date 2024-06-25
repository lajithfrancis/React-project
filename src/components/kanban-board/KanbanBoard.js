// src/components/KanbanBoard.js
import React, { useEffect, useReducer, useState } from 'react';
import { Grid } from '@mui/material';
import Column from './Column';
import CardReducer from './Reducer';

const KanbanBoard = () => {
  const [columns, colDispatch] = useReducer(CardReducer, data);
  const allCards = columns.reduce((acc, column) => {
    const cards = column.cards.map((card) => {
      return { ...card, columnId: column.id };
    });
    return [...acc, ...cards];
  }, []);

  const handleDrop = (e, desColumnId) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('id');
    colDispatch({
      type: 'swap',
      payload: {
        id,
        desColumnId,
      },
    });
  };

  return (
    <Grid container spacing={2} style={{ padding: '16px' }}>
      {columns.map((column, index) => (
        <div
          key={index}
          onDrop={(e) => handleDrop(e, column.id)}
          onDragOver={(e) => e.preventDefault()}
        >
          <Grid item key={index}>
            <Column column={column} />
          </Grid>
        </div>
      ))}
    </Grid>
  );
};

export default KanbanBoard;

const data = [
  {
    id: '1',
    title: 'To Do',
    cards: [
      {
        id: '1',
        title: 'Task 1',
        description: 'Description for Task 1',
        columnId: '1',
      },
      {
        id: '2',
        title: 'Task 2',
        description: 'Description for Task 2',
        columnId: '1',
      },
    ],
  },
  {
    id: '2',
    title: 'In Progress',
    cards: [
      {
        id: '3',
        title: 'Task 3',
        description: 'Description for Task 3',
        columnId: '2',
      },
    ],
  },
  {
    id: '3',
    title: 'Done',
    cards: [
      {
        id: '4',
        title: 'Task 4',
        description: 'Description for Task 4',
        columnId: '3',
      },
    ],
  },
];
