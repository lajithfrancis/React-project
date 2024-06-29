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
      <div style={{ display: ' flex' }}>
        <Container maxWidth='xl'>
          <BoardProvider>
            <KanbanBoard />
          </BoardProvider>
        </Container>
      </div>
    </PersistentDrawerLeft>
  );
};

export default Board;
