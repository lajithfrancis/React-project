// src/App.js
import React from 'react';
import { Container, CssBaseline, Typography } from '@mui/material';
import KanbanBoard from './KanbanBoard';
import { BoardProvider } from './context/BoardContext';
import PersistentDrawerLeft from './Drawer';

const Board = () => {
  return (
    <PersistentDrawerLeft>
      <CssBaseline />
      <Container
        maxWidth='xl'
        style={{
          backgroundColor: 'red',
        }}
      >
        <BoardProvider>
          <KanbanBoard />
        </BoardProvider>
      </Container>
    </PersistentDrawerLeft>
  );
};

export default Board;
