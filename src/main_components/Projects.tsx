import { Box, Container, Typography, Grid, Card, CardContent, Chip, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const Projects = () => {
  const projects = [
    {
      title: 'Wine Quality Prediction Dashboard',
      description:
        'Exploratory analysis and machine learning models for wine quality prediction. Interactive visualizations with Power BI.',
      tech: ['Python', 'scikit-learn', 'Power BI', 'JupyterLab'],
      category: 'Data Science',
    },
    {
      title: 'E-commerce Microservices Platform',
      description:
        '6 microservices architecture with service discovery, API Gateway, asynchronous messaging, centralized monitoring, and CI/CD pipeline.',
      tech: ['Go', 'Protocol Buffers', 'PostgreSQL', 'MongoDB', 'Redis', 'NATS', 'Consul', 'Docker', 'Prometheus', 'Grafana', 'GitHub Actions'],
      category: 'Backend',
    },
    {
      title: 'IoT Monitoring Dashboard',
      description: 'Real-time visualization dashboard for simulated IoT sensors with live data streaming and interactive charts.',
      tech: ['Node.js', 'Express.js', 'React', 'TypeScript', 'Chart.js', 'MongoDB', 'WebSockets', 'Docker'],
      category: 'Full Stack',
    },
    {
      title: 'Library Management API',
      description: 'RESTful API for managing book loans and reservations with authentication and authorization.',
      tech: ['C#', 'ASP.NET Core', 'SQL Server', 'JWT'],
      category: 'Backend',
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
            Academic Projects
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 6, maxWidth: '800px' }}>
            A collection of projects showcasing my skills in full-stack development, data science, and microservices architecture.
          </Typography>

          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      background: 'linear-gradient(135deg, #151a2e 0%, #1a2038 100%)',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 40px rgba(0, 212, 255, 0.2)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2 }}>
                        <Typography variant="h5" sx={{ fontWeight: 600 }}>
                          {project.title}
                        </Typography>
                        <Box>
                          <IconButton size="small" sx={{ color: 'primary.main' }}>
                            <GitHubIcon />
                          </IconButton>
                          <IconButton size="small" sx={{ color: 'primary.main' }}>
                            <LaunchIcon />
                          </IconButton>
                        </Box>
                      </Box>

                      <Chip
                        label={project.category}
                        size="small"
                        sx={{
                          mb: 2,
                          background: 'rgba(187, 134, 252, 0.1)',
                          border: '1px solid rgba(187, 134, 252, 0.3)',
                          color: 'secondary.light',
                        }}
                      />

                      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                        {project.description}
                      </Typography>

                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {project.tech.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              fontSize: '0.75rem',
                              background: 'rgba(0, 212, 255, 0.05)',
                              border: '1px solid rgba(0, 212, 255, 0.2)',
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;