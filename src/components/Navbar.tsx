import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: 'home', path: '/' },
    { label: 'about', path: '/about' },
    { label: 'experience', path: '/experience' },
    { label: 'projects', path: '/projects' },
    { label: 'music', path: '/music' },
    { label: 'contact', path: '/contact' },
  ];

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background: 'rgba(10, 10, 10, 0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid #1a1a1a',
        }}
      >
        <Toolbar sx={{ minHeight: '48px !important', px: { xs: 2, md: 4 } }}>
          <Typography
            variant="body2"
            sx={{
              flexGrow: 1,
              cursor: 'pointer',
              fontWeight: 700,
              color: '#e0e0e0',
              letterSpacing: '0.1em',
              fontSize: '0.85rem',
            }}
            onClick={() => navigate('/')}
          >
            bleak
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0 }}>
            {navItems.map((item) => (
              <Button
                key={item.path}
                onClick={() => navigate(item.path)}
                sx={{
                  color: location.pathname === item.path ? '#e0e0e0' : '#555',
                  fontWeight: location.pathname === item.path ? 600 : 400,
                  fontSize: '0.75rem',
                  minWidth: 'auto',
                  px: 1.5,
                  '&:hover': { color: '#e0e0e0', background: 'transparent' },
                  transition: 'color 0.2s ease',
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          <IconButton
            color="inherit"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' }, color: '#777', p: 0.5 }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { background: '#0a0a0a', width: 200 },
        }}
      >
        <Box sx={{ pt: 1 }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 1 }}>
            <IconButton onClick={handleDrawerToggle} sx={{ color: '#555' }}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.path} disablePadding>
                <ListItemButton
                  onClick={() => { navigate(item.path); handleDrawerToggle(); }}
                  sx={{
                    py: 0.8,
                    '&:hover': { background: '#111' },
                    ...(location.pathname === item.path && {
                      borderLeft: '2px solid #555',
                    }),
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontSize: '0.8rem',
                      color: location.pathname === item.path ? '#e0e0e0' : '#555',
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;