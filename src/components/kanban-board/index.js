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
        main: '#45365a', // Custom primary color (purple)
        light: '#735b97', // Lighter shade of the primary color
        dark: '#3b2f4e', // Darker shade of the primary color
        contrastText: '#ffffff', // White text for contrast
      },
      secondary: {
        main: '#ff4081', // Example secondary color (pink)
        light: '#ff79b0', // Very light pink
        dark: '#c60055', // Dark pink
        contrastText: '#000000', // Black text for contrast
      },
      background: {
        default: '#000000', // Black background
        paper: '#121212', // Slightly lighter dark background
      },
      text: {
        primary: '#ffffff', // White text
        secondary: '#b0bec5', // Light gray text
        custom: '#000000',
      },
      success: {
        main: '#66bb6a', // Light green
        light: '#81c784', // Very light green
        dark: '#388e3c', // Dark green
      },
      error: {
        main: '#e57373', // Light red
        light: '#ef9a9a', // Very light red
        dark: '#d32f2f', // Dark red
      },
      warning: {
        main: '#ffb74d', // Light orange
        light: '#ffcc80', // Very light orange
        dark: '#f57c00', // Dark orange
      },
      info: {
        main: '#4fc3f7', // Light cyan
        light: '#81d4fa', // Very light cyan
        dark: '#0288d1', // Dark cyan
      },
      divider: '#424242', // Divider color
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#574573', // Slightly desaturated violet.
        light: '#9c89b8', // Lighter shade of the primary color
        dark: '#483392', // Darker shade of the primary color
        contrastText: '#ffffff', // White text for contrast
      },
      secondary: {
        main: '#ff4081', // Example secondary color (pink)
        light: '#ff79b0', // Very light pink
        dark: '#c60055', // Dark pink
        contrastText: '#ffffff', // White text for contrast
      },
      background: {
        default: '#ffffff', // White background
        paper: '#f8f8f8', // Slightly off-white paper background
      },
      text: {
        primary: '#000000', // Black text
        secondary: '#333333', // Dark gray text
        custom: '#ffffff',
      },
      success: {
        main: '#4caf50', // Green
        light: '#81c784', // Light green
        dark: '#388e3c', // Dark green
      },
      error: {
        main: '#f44336', // Red
        light: '#e57373', // Light red
        dark: '#d32f2f', // Dark red
      },
      warning: {
        main: '#ff9800', // Orange
        light: '#ffb74d', // Light orange
        dark: '#f57c00', // Dark orange
      },
      info: {
        main: '#2196f3', // Blue
        light: '#64b5f6', // Light blue
        dark: '#1976d2', // Dark blue
      },
      divider: '#e0e0e0',
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
