import { Box, Container, Typography, Chip, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Microservices Platform',
      desc: '6-service architecture with service discovery, API Gateway, async messaging, monitoring, and CI/CD.',
      tech: ['Go', 'Protocol Buffers', 'PostgreSQL', 'MongoDB', 'Redis', 'NATS', 'Consul', 'Docker', 'Prometheus', 'Grafana', 'GitHub Actions'],
      category: 'distributed systems',
    },
    {
      title: 'Wine Quality Prediction',
      desc: 'ML models for wine quality classification with exploratory analysis and interactive dashboards.',
      tech: ['Python', 'scikit-learn', 'Power BI', 'JupyterLab'],
      category: 'machine learning',
    },
    {
      title: 'RAG Olive Oil Q&A System',
      desc: 'Retrieval-Augmented Generation system using vector search and local LLM inference.',
      tech: ['Python', 'FAISS', 'Ollama', 'Semantic MediaWiki', 'phi3:mini'],
      category: 'ai / nlp',
    },
    {
      title: 'IoT Monitoring Dashboard',
      desc: 'Real-time monitoring for simulated IoT sensors with live data streaming.',
      tech: ['Node.js', 'React', 'TypeScript', 'MongoDB', 'WebSockets', 'Docker'],
      category: 'iot',
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
            PROJECTS
          </Typography>
          <Typography variant="h2" sx={{ mb: 5 }}>
            Selected Work
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
              >
                <Box
                  sx={{
                    p: 3,
                    bgcolor: '#111',
                    border: '1px solid #1a1a1a',
                    borderRadius: 1,
                    transition: 'border-color 0.2s ease',
                    '&:hover': { borderColor: '#333' },
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 1 }}>
                    <Box>
                      <Typography variant="h3" sx={{ mb: 0.5 }}>
                        {project.title}
                      </Typography>
                      <Typography variant="overline" sx={{ color: '#444' }}>
                        {project.category}
                      </Typography>
                    </Box>
                    <IconButton size="small" sx={{ color: '#444', '&:hover': { color: '#888' } }}>
                      <GitHubIcon fontSize="small" />
                    </IconButton>
                  </Box>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    {project.desc}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {project.tech.map((t) => (
                      <Chip
                        key={t}
                        label={t}
                        size="small"
                        sx={{
                          bgcolor: '#0e0e0e',
                          color: '#555',
                          border: '1px solid #1a1a1a',
                          height: 22,
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;