import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../main_components/Home';

const RoutesComponent: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default RoutesComponent;
