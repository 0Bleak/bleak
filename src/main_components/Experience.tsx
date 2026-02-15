import { Box, Container, Typography, Paper, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import WorkIcon from '@mui/icons-material/Work';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Development Intern',
      company: 'Somocap',
      period: '04/2024 – 08/2024',
      description: [
        'Developed an automated quotation solution for the manufacturing industry',
        'Analyzed Airbus machine data to identify causes of anomalies',
      ],
      tech: ['React', 'Node.js', 'Docker', 'Python', 'GitHub', 'Git', 'Material-UI'],
    },
    {
      title: 'Frontend Development Intern',
      company: 'Effyis Group',
      period: '06/2023 – 08/2023',
      description: [
        'Developed the user interface for a payment system',
        'Integrated API endpoints for payment QR code generation',
      ],
      tech: ['React', 'Spring Boot', 'GitHub', 'Git', 'Material-UI'],
    },
  ];

  return (
    <Box sx={{ minHeight: '100vh', py: 8 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h2" gutterBottom sx={{ mb: 2 }}>
            Professional Experience
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 6, maxWidth: '800px' }}>
            My professional journey in software development and full-stack engineering.
          </Typography>

          <Box sx={{ position: 'relative' }}>
            {/* Timeline line */}
            <Box
              sx={{
                position: 'absolute',
                left: { xs: '20px', md: '50%' },
                top: 0,
                bottom: 0,
                width: '2px',
                background: 'linear-gradient(180deg, #00d4ff 0%, #bb86fc 100%)',
              }}
            />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: { xs: 'flex-start', md: index % 2 === 0 ? 'flex-end' : 'flex-start' },
                    mb: 6,
                    pl: { xs: 6, md: 0 },
                  }}
                >
                  <Paper
                    sx={{
                      p: 3,
                      maxWidth: { xs: '100%', md: '45%' },
                      background: 'linear-gradient(135deg, #151a2e 0%, #1a2038 100%)',
                      position: 'relative',
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        left: { xs: '-42px', md: index % 2 === 0 ? 'auto' : '-42px' },
                        right: { xs: 'auto', md: index % 2 === 0 ? '-42px' : 'auto' },
                        top: '24px',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #00d4ff 0%, #bb86fc 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <WorkIcon sx={{ color: 'white', fontSize: 20 }} />
                    </Box>

                    <Typography variant="overline" color="primary.main" sx={{ fontWeight: 600 }}>
                      {exp.period}
                    </Typography>
                    <Typography variant="h5" sx={{ mt: 1, mb: 0.5, fontWeight: 600 }}>
                      {exp.title}
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
                      {exp.company}
                    </Typography>

                    <Box sx={{ mb: 3 }}>
                      {exp.description.map((item, i) => (
                        <Typography key={i} variant="body2" sx={{ mb: 1, display: 'flex', alignItems: 'start' }}>
                          <Box
                            sx={{
                              width: 6,
                              height: 6,
                              borderRadius: '50%',
                              bgcolor: 'primary.main',
                              mr: 1.5,
                              mt: 0.8,
                              flexShrink: 0,
                            }}
                          />
                          {item}
                        </Typography>
                      ))}
                    </Box>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {exp.tech.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            fontSize: '0.75rem',
                            background: 'rgba(0, 212, 255, 0.1)',
                            border: '1px solid rgba(0, 212, 255, 0.3)',
                          }}
                        />
                      ))}
                    </Box>
                  </Paper>
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Experience;