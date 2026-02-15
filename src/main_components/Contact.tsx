import { Box, Container, Typography, Paper, IconButton, Link } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

const Contact = () => {
  const contactInfo = [
    {
      icon: <EmailIcon />,
      label: 'Email',
      value: 'mr.tamimi.mohammed@gmail.com',
      link: 'mailto:mr.tamimi.mohammed@gmail.com',
    },
    {
      icon: <PhoneIcon />,
      label: 'Phone',
      value: '+33 7 63 43 19 96',
      link: 'tel:+33763431996',
    },
    {
      icon: <LocationOnIcon />,
      label: 'Location',
      value: 'Biarritz 64200, France',
    },
  ];
const socialLinks = [
  {
    icon: <LinkedInIcon />,
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/tamimi-mohammed-b73b22255/',
  },
  {
    icon: <GitHubIcon />,
    label: 'GitHub',
    link: 'https://github.com/0Bleak',
  },
  {
    icon: <LanguageIcon />,
    label: 'Portfolio',
    link: 'https://0bleak.github.io/bleak/',
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
          <Typography variant="h2" gutterBottom sx={{ mb: 2, textAlign: 'center' }}>
            Get In Touch
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 6, textAlign: 'center', maxWidth: '600px', mx: 'auto' }}>
            I'm currently seeking an end-of-studies internship. Feel free to reach out if you have any opportunities or just want to connect!
          </Typography>

          <Paper
            sx={{
              p: 4,
              background: 'linear-gradient(135deg, #151a2e 0%, #1a2038 100%)',
              mb: 4,
            }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    py: 2,
                    borderBottom: index < contactInfo.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
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
                      mr: 3,
                    }}
                  >
                    {info.icon}
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body2" color="text.secondary">
                      {info.label}
                    </Typography>
                    {info.link ? (
                      <Link href={info.link} sx={{ color: 'text.primary', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
                        <Typography variant="body1">{info.value}</Typography>
                      </Link>
                    ) : (
                      <Typography variant="body1">{info.value}</Typography>
                    )}
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Paper>

          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h5" sx={{ mb: 3 }}>
              Connect With Me
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
              {socialLinks.map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconButton
                    component="a"
                    href={social.link}
                    target="_blank"
                    sx={{
                      width: 56,
                      height: 56,
                      background: 'linear-gradient(135deg, #00d4ff 0%, #bb86fc 100%)',
                      color: 'white',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #00a8cc 0%, #9966cc 100%)',
                      },
                    }}
                  >
                    {social.icon}
                  </IconButton>
                </motion.div>
              ))}
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;