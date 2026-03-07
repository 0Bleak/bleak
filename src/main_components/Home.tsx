import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 48px)',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="overline" sx={{ mb: 2, display: 'block', color: '#444' }}>
            systems & security engineer
          </Typography>
          <Typography variant="h1" sx={{ mb: 2 }}>
            Mohammed Tamimi
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 5, maxWidth: 520, color: '#666', lineHeight: 1.8 }}
          > 
    I love systems engineering, low-level programming, security, and machine learning.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="contained"
              size="small"
              endIcon={<ArrowForwardIcon sx={{ fontSize: '0.9rem !important' }} />}
              onClick={() => navigate('/projects')}
              sx={{
                bgcolor: '#e0e0e0',
                color: '#0a0a0a',
                '&:hover': { bgcolor: '#fff' },
              }}
            >
              projects
            </Button>
            <Button
              variant="outlined"
              size="small"
              onClick={() => navigate('/contact')}
              sx={{
                borderColor: '#333',
                color: '#888',
                '&:hover': { borderColor: '#555', color: '#ccc', bgcolor: 'transparent' },
              }}
            >
              contact
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Home;