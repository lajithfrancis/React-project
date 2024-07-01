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
        main: '#F0F0F0', // Primary main color
        light: '#FFFFFF', // Primary light color
        dark: '#DADADA', // Primary dark color
      },
      secondary: {
        main: '#EFE7DD', // Secondary main color
        light: '#FFFFFF', // Secondary light color
        dark: '#D2C4B2', // Secondary dark color
      },
      background: {
        default: '#FAFAFA', // Background default color
        paper: '#FFFFFF', // Background paper color
      },
      text: {
        primary: '#212121', // Primary text color
        secondary: '#757575', // Secondary text color
      },
      success: {
        main: '#E8F5E9', // Success main color
        light: '#FFFFFF', // Success light color
        dark: '#C5E1A5', // Success dark color
      },
      error: {
        main: '#FFEBEE', // Error main color
        light: '#FFFFFF', // Error light color
        dark: '#FFCDD2', // Error dark color
      },
      warning: {
        main: '#FFFDE7', // Warning main color
        light: '#FFFFFF', // Warning light color
        dark: '#FFF9C4', // Warning dark color
      },
      info: {
        main: '#E3F2FD', // Info main color
        light: '#FFFFFF', // Info light color
        dark: '#BBDEFB', // Info dark color
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
