import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Feed from './pages/Feed';
import Login from './pages/Login';
import Register from './pages/Register';

const Router: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/feed" element={<Feed />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
