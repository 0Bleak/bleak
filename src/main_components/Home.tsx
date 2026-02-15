import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CodeIcon from '@mui/icons-material/Code';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(0, 212, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(187, 134, 252, 0.1) 0%, transparent 50%)',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="overline"
                sx={{
                  color: 'primary.main',
                  fontSize: '1rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  mb: 2,
                  display: 'block',
                }}
              >
                FULL STACK WEB ENGINEER
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  mb: 3,
                  background: 'linear-gradient(135deg, #00d4ff 0%, #bb86fc 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Mohammed Tamimi
              </Typography>
              <Typography variant="h5" color="text.secondary" sx={{ mb: 4, lineHeight: 1.6 }}>
                Passionate about web development, data engineering, and building scalable software solutions.
                Currently pursuing a Master's in Computer Science and Logistics.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  onClick={() => navigate('/projects')}
                  sx={{
                    background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #00a8cc 0%, #007a99 100%)',
                    },
                  }}
                >
                  View Projects
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => navigate('/contact')}
                  sx={{
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    '&:hover': {
                      borderColor: 'primary.light',
                      background: 'rgba(0, 212, 255, 0.1)',
                    },
                  }}
                >
                  Contact Me
                </Button>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 3,
                }}
              >
                {[
                  { icon: <CodeIcon />, title: 'Clean Code', desc: 'Writing maintainable and scalable solutions' },
                  { icon: <RocketLaunchIcon />, title: 'Fast Learner', desc: 'Adapting to new technologies quickly' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.2 }}
                  >
                    <Box
                      sx={{
                        p: 3,
                        background: 'linear-gradient(135deg, #151a2e 0%, #1a2038 100%)',
                        borderRadius: 2,
                        border: '1px solid rgba(0, 212, 255, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateX(-8px)',
                          boxShadow: '8px 8px 24px rgba(0, 212, 255, 0.2)',
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: '50%',
                          background: 'rgba(0, 212, 255, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'primary.main',
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ mb: 0.5 }}>
                          {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.desc}
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;