import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import { darkTheme } from './styles/theme';
import SimpleNavbar from './navbar-variations/SimpleNavbar';
import RoutesComponent from './routing/RoutesComponent';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <SimpleNavbar />
          <Box component="main" sx={{ flexGrow: 1 }}>
            <RoutesComponent />
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;