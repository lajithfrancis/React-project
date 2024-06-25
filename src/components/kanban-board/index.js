// src/App.js
import React from 'react';
import { Container, CssBaseline, Typography } from '@mui/material';
import KanbanBoard from './KanbanBoard';

const Board = () => {
  return (
    <Container maxWidth='lg'>
      <CssBaseline />
      <Typography variant='h3' gutterBottom style={{ margin: '16px 0' }}>
        Kanban Board
      </Typography>
      <KanbanBoard />
    </Container>
  );
};

export default Board;
