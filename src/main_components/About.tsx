import { Box, Container, Typography, Grid, Chip, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import LanguageIcon from '@mui/icons-material/Language';

const About = () => {
  const skills = {
    frontend: ['React', 'TypeScript', 'HTML/CSS', 'SCSS', 'Material-UI', 'JavaScript'],
    backend: ['Node.js', 'Express.js', 'Java (Spring Boot)', 'Python', 'C#'],
    databases: ['MongoDB', 'MySQL', 'PostgreSQL'],
    microservices: ['Consul', 'Service Discovery', 'API Gateway (NGINX)', 'Apache Kafka'],
    devops: ['Docker', 'Docker Compose', 'CI/CD (GitHub Actions)'],
    monitoring: ['Prometheus', 'Grafana'],
    security: ['JWT', 'OAuth 2.0'],
    dataViz: ['Power BI', 'Metabase'],
  };

  const languages = [
    { name: 'French', level: 'Native' },
    { name: 'English', level: 'Professional' },
    { name: 'Arabic', level: 'Native' },
  ];

  const certifications = [
    'NDG Linux Essentials – Cisco Networking Academy',
    'CCNA v7: Introduction to Networks – Cisco',
    'Introduction to IoT and Digital Transformation – Cisco',
    'Industrial Control Systems and IIoT Essentials – Cisco',
    'Data Science Essentials with Python – Cisco',
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
            About Me
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 6, maxWidth: '800px' }}>
            I'm a student in SIGLIS program, passionate about web development, data, and software engineering.
            I'm seeking an end-of-studies internship to apply my analytical skills, acquire new ones, and contribute
            effectively to projects. Curious, rigorous, and comfortable in teams, I fully invest myself in every
            mission that allows me to grow.
          </Typography>

          {/* Education */}
          <Paper sx={{ p: 4, mb: 4, background: 'linear-gradient(135deg, #151a2e 0%, #1a2038 100%)' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <SchoolIcon sx={{ fontSize: 32, mr: 2, color: 'primary.main' }} />
              <Typography variant="h4">Education</Typography>
            </Box>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Master's in Computer Science and Logistics
            </Typography>
            <Typography variant="body1" color="text.secondary">
              University of Pau and Pays de l'Adour | Anglet | 2024 – Present
            </Typography>
          </Paper>

          {/* Skills */}
          <Paper sx={{ p: 4, mb: 4, background: 'linear-gradient(135deg, #151a2e 0%, #1a2038 100%)' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <CodeIcon sx={{ fontSize: 32, mr: 2, color: 'primary.main' }} />
              <Typography variant="h4">Technical Skills</Typography>
            </Box>
            <Grid container spacing={3}>
              {Object.entries(skills).map(([category, items]) => (
                <Grid item xs={12} md={6} key={category}>
                  <Typography variant="h6" sx={{ mb: 2, textTransform: 'capitalize' }}>
                    {category.replace(/([A-Z])/g, ' $1').trim()}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {items.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        sx={{
                          background: 'rgba(0, 212, 255, 0.1)',
                          border: '1px solid rgba(0, 212, 255, 0.3)',
                          color: 'primary.light',
                        }}
                      />
                    ))}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>

          {/* Languages */}
          <Paper sx={{ p: 4, mb: 4, background: 'linear-gradient(135deg, #151a2e 0%, #1a2038 100%)' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <LanguageIcon sx={{ fontSize: 32, mr: 2, color: 'primary.main' }} />
              <Typography variant="h4">Languages</Typography>
            </Box>
            <Grid container spacing={2}>
              {languages.map((lang) => (
                <Grid item xs={12} sm={4} key={lang.name}>
                  <Typography variant="h6">{lang.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {lang.level}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Paper>

          {/* Certifications */}
          <Paper sx={{ p: 4, background: 'linear-gradient(135deg, #151a2e 0%, #1a2038 100%)' }}>
            <Typography variant="h4" sx={{ mb: 3 }}>
              Certifications
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        bgcolor: 'primary.main',
                        mr: 2,
                      }}
                    />
                    {cert}
                  </Typography>
                </motion.div>
              ))}
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;