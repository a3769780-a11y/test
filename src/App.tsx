import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Cafe from './pages/Cafe';
import Catering from './pages/Catering';
import Gallery from './pages/Gallery';
import AICakeConsultant from './components/AICakeConsultant';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ueber-mich" element={<About />} />
          <Route path="/leistungen" element={<Services />} />
          <Route path="/cafe" element={<Cafe />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/galerie" element={<Gallery />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        {/* Floating AI Consultant Button/Modal is available globally or can be placed in Layout */}
        <AICakeConsultant />
      </Layout>
    </HashRouter>
  );
};

export default App;