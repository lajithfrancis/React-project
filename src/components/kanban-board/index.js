// src/App.js
import React, { useState } from 'react';
import { Button, Container, CssBaseline, Typography } from '@mui/material';
import KanbanBoard from './KanbanBoard';
import { BoardProvider } from './context/BoardContext';
import Drawer from './Drawer';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

const Board = () => {
  const [isDark, setIsDark] = useState(false);
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#90caf9',
      },
      secondary: {
        main: '#f48fb1',
      },
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#dc004e',
      },
    },
  });

  return (
    <div
      style={
        {
          // background: '#26292C', // TODO: Boar bg color
        }
      }
    >
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <Drawer setIsDark={setIsDark} isDark={isDark}>
          <CssBaseline />
          <Container
            maxWidth='xl'
            style={{
              // backgroundColor: '#26292C', // TODO: board background color
              borderRadius: '1rem',
              paddingBottom: '2rem',
            }}
          >
            <BoardProvider>
              <KanbanBoard />
            </BoardProvider>
          </Container>
        </Drawer>
      </ThemeProvider>
    </div>
  );
};

export default Board;
