// src/App.js
import React from 'react';
import { Container, CssBaseline, Typography } from '@mui/material';
import KanbanBoard from './KanbanBoard';
import { BoardProvider } from './context/BoardContext';
import PersistentDrawerLeft from './Drawer';

const Board = () => {
  return (
    <div
      style={{
        background: '#26292C',
      }}
    >
      <PersistentDrawerLeft>
        <CssBaseline />
        <Container
          maxWidth='xl'
          style={{
            backgroundColor: '#26292C', // TODO: board background color
            borderRadius: '1rem',
            paddingBottom: '2rem',
          }}
        >
          <BoardProvider>
            <KanbanBoard />
          </BoardProvider>
        </Container>
      </PersistentDrawerLeft>
    </div>
  );
};

export default Board;
