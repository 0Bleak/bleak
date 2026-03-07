import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#c4c4c4',
      light: '#e0e0e0',
      dark: '#8a8a8a',
    },
    secondary: {
      main: '#8b7355',
      light: '#b09a7a',
      dark: '#5e4d38',
    },
    background: {
      default: '#0a0a0a',
      paper: '#111111',
    },
    text: {
      primary: '#e0e0e0',
      secondary: '#777777',
    },
  },
  typography: {
    fontFamily: '"JetBrains Mono", "Fira Code", "SF Mono", monospace',
    h1: {
      fontSize: '2.8rem',
      fontWeight: 700,
      letterSpacing: '-0.03em',
      color: '#e0e0e0',
    },
    h2: {
      fontSize: '1.8rem',
      fontWeight: 600,
      letterSpacing: '-0.02em',
      color: '#e0e0e0',
    },
    h3: {
      fontSize: '1.3rem',
      fontWeight: 600,
      color: '#c4c4c4',
    },
    h4: {
      fontSize: '1.1rem',
      fontWeight: 500,
      color: '#aaaaaa',
    },
    body1: {
      fontSize: '0.9rem',
      lineHeight: 1.6,
      color: '#999999',
    },
    body2: {
      fontSize: '0.8rem',
      lineHeight: 1.5,
      color: '#777777',
    },
    overline: {
      fontSize: '0.7rem',
      letterSpacing: '0.15em',
      color: '#555555',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          textTransform: 'none',
          fontWeight: 500,
          padding: '8px 20px',
          fontSize: '0.8rem',
          fontFamily: '"JetBrains Mono", monospace',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          backgroundImage: 'none',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '0.7rem',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          backgroundImage: 'none',
        },
      },
    },
  },
});