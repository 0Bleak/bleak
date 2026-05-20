import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const Experience = () => {
const experiences = [
  {
    title: '5G Network Engineering Intern',
    company: 'Université Gustave Eiffel',
    period: 'Mar 2026 - Sep 2026',
    location: 'Champs-sur-Marne',
    subject: 'Private 5G SA network deployment with srsRAN, Open5GS, Near-RT RIC integration, CQI-driven PRB allocation, ML benchmarking (Random Forest, DQN), and research paper co-authorship.',
  },
  {
    title: 'Software Development Intern',
    company: 'Somocap',
    period: 'Apr 2025 - Aug 2025',
    location: 'Ustaritz',
    subject: 'Quotation automation solution for manufacturing industry. Airbus batch data analysis for anomaly root cause identification.',
  },
  {
    title: 'Frontend Development Intern',
    company: 'Effyis Group',
    period: 'Jun 2023 - Aug 2023',
    location: 'Casablanca',
    subject: 'Payment processing system UI. API endpoint integration for QR code generation.',
  },
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
            EXPERIENCE
          </Typography>
          <Typography variant="h2" sx={{ mb: 5 }}>
            Professional
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
              >
                <Box sx={{ borderLeft: '1px solid #222', pl: 3 }}>
                  <Typography variant="overline" sx={{ color: '#444', display: 'block', mb: 0.5 }}>
                    {exp.period}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#444' }}>
                  {exp.location}
                  </Typography>
                  <Typography variant="h3" sx={{ mb: 0.5 }}>
                    {exp.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#555', mb: 0.5 }}>
                    {exp.company}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#444', fontStyle: 'italic' }}>
                    {exp.subject}
                  </Typography>
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