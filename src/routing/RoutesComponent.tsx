import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../main_components/Home';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default RoutesComponent;
