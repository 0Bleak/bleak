import { Box, Container, Typography, Link, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = () => {
  const info = [
    { icon: <EmailIcon sx={{ fontSize: '1rem' }} />, label: 'mr.tamimi.mohammed@gmail.com', href: 'mailto:mr.tamimi.mohammed@gmail.com' },
    { icon: <PhoneIcon sx={{ fontSize: '1rem' }} />, label: '+33 7 63 43 19 96', href: 'tel:+33763431996' },
    { icon: <LocationOnIcon sx={{ fontSize: '1rem' }} />, label: 'Biarritz 64200, France', href: undefined },
  ];

  const socials = [
    { icon: <LinkedInIcon />, href: 'https://www.linkedin.com/in/tamimi-mohammed-b73b22255/' },
    { icon: <GitHubIcon />, href: 'https://github.com/0Bleak' },
  ];

  return (
    <Box sx={{ minHeight: '100vh', py: 8 }}>
      <Container maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="overline" sx={{ display: 'block', mb: 1, color: '#444' }}>
            CONTACT
          </Typography>
          <Typography variant="h2" sx={{ mb: 1 }}>
            Get in touch
          </Typography>
          <Typography variant="body2" sx={{ mb: 5, color: '#444' }}>
            Open to security opportunities and collaboration.
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, mb: 5 }}>
            {info.map((item, i) => (
              <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ color: '#444' }}>{item.icon}</Box>
                {item.href ? (
                  <Link
                    href={item.href}
                    sx={{
                      color: '#888',
                      textDecoration: 'none',
                      fontSize: '0.85rem',
                      fontFamily: '"JetBrains Mono", monospace',
                      '&:hover': { color: '#ccc' },
                    }}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <Typography variant="body1" sx={{ color: '#888', fontSize: '0.85rem' }}>
                    {item.label}
                  </Typography>
                )}
              </Box>
            ))}
          </Box>

          <Box sx={{ display: 'flex', gap: 1 }}>
            {socials.map((s, i) => (
              <IconButton
                key={i}
                component="a"
                href={s.href}
                target="_blank"
                sx={{
                  color: '#444',
                  border: '1px solid #1e1e1e',
                  borderRadius: 1,
                  width: 40,
                  height: 40,
                  '&:hover': { color: '#aaa', borderColor: '#333' },
                }}
              >
                {s.icon}
              </IconButton>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;