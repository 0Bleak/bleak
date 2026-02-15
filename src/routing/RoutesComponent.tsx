import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../main_components/Home';
import About from '../main_components/About';
import Projects from '../main_components/Projects';
import Experience from '../main_components/Experience';
import Contact from '../main_components/Contact';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      {/* Catch all - redirect to home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default RoutesComponent;