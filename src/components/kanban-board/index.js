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
      background: {
        default: '#121212',
        paper: '#1e1e1e',
      },
      text: {
        primary: '#ffffff',
        secondary: '#bbbbbb',
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
      background: {
        default: '#ffffff',
        paper: '#f5f5f5',
      },
      text: {
        primary: '#000000',
        secondary: '#555555',
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
