import { Box, Container, Typography, Chip } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  const skills: Record<string, string[]> = {
    languages: ['C', 'C++', 'Python', 'Go', 'Java'],
    tools: ['Docker', 'Git', 'Linux', 'GDB', 'Wireshark'],
    data: ['PostgreSQL', 'MongoDB', 'Redis'],
    interests: ['Reverse Engineering', 'Binary Exploitation', 'Network Security', 'Reinforcement Learning', '5G/Telecom Security'],
  };

  const languages = [
    { name: 'French', level: 'Native' },
    { name: 'Arabic', level: 'Native' },
    { name: 'English', level: 'Professional' },
  ];

  const certifications = [
    'NDG Linux Essentials - Cisco',
    'CCNA v7: Introduction to Networks - Cisco',
    'Introduction to IoT and Digital Transformation - Cisco',
    'Industrial Control Systems and IIoT Essentials - Cisco',
    'Data Science Essentials with Python - Cisco',
  ];

  return (
    <Box sx={{ minHeight: '100vh', py: 8 }}>
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="overline" sx={{ display: 'block', mb: 1, color: '#444' }}>
            ABOUT
          </Typography>
          <Typography variant="h2" sx={{ mb: 3 }}>
            Background
          </Typography>
          <Typography variant="body1" sx={{ mb: 6, maxWidth: 600 }}>
            Masters in Computer Science. Interested in systems engineering, low-level security, 
            machine learning, and telecom infrastructure. Currently learning reverse engineering, 
            exploit development, and network security.
          </Typography>

          {/* Education */}
          <Box sx={{ mb: 6 }}>
            <Typography variant="h3" sx={{ mb: 2 }}>
              Education
            </Typography>
            <Box sx={{ borderLeft: '1px solid #222', pl: 3 }}>
              <Typography variant="body1" sx={{ color: '#ccc', fontWeight: 500 }}>
                Computer Science
              </Typography>
              <Typography variant="body2">
                Universite de Pau et des Pays de l'Adour - France 2024-2026
              </Typography>
            </Box>
          </Box>

          {/* Skills */}
          <Box sx={{ mb: 6 }}>
            <Typography variant="h3" sx={{ mb: 3 }}>
              Stack
            </Typography>
            {Object.entries(skills).map(([category, items]) => (
              <Box key={category} sx={{ mb: 2.5 }}>
                <Typography
                  variant="overline"
                  sx={{ display: 'block', mb: 1, color: '#444', fontSize: '0.65rem' }}
                >
                  {category}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {items.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      size="small"
                      sx={{
                        bgcolor: '#161616',
                        color: '#888',
                        border: '1px solid #222',
                        height: 24,
                      }}
                    />
                  ))}
                </Box>
              </Box>
            ))}
          </Box>

          {/* Languages */}
          <Box sx={{ mb: 6 }}>
            <Typography variant="h3" sx={{ mb: 2 }}>
              Languages
            </Typography>
            <Box sx={{ display: 'flex', gap: 4 }}>
              {languages.map((lang) => (
                <Box key={lang.name}>
                  <Typography variant="body1" sx={{ color: '#ccc', fontWeight: 500 }}>
                    {lang.name}
                  </Typography>
                  <Typography variant="body2">{lang.level}</Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Certifications */}
          <Box>
            <Typography variant="h3" sx={{ mb: 2 }}>
              Certifications
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {certifications.map((cert, i) => (
                <Typography key={i} variant="body2" sx={{ color: '#666' }}>
                  {cert}
                </Typography>
              ))}
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;