import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import { darkTheme } from './styles/theme';
import Navbar from './components/Navbar';
import RoutesComponent from './routing/RoutesComponent';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router basename="/bleak">
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#0a0a0a' }}>
          <Navbar />
          <Box component="main" sx={{ flexGrow: 1 }}>
            <RoutesComponent />
          </Box>
          <Box
            component="footer"
            sx={{
              py: 3,
              textAlign: 'center',
              borderTop: '1px solid #1a1a1a',
              color: '#444',
              fontSize: '0.7rem',
              fontFamily: '"JetBrains Mono", monospace',
            }}
          >
            mohammed tamimi / 2026
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;