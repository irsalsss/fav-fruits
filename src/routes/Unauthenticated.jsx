import React from 'react';
import {
  Routes as ReactRoutes,
  Route,
  Navigate
} from 'react-router-dom';
import loadable from '@loadable/component';

const Login = loadable(() => import('../pages/Login'));

const Unauthenticated = () => {
  return (
    <ReactRoutes>
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </ReactRoutes>
  );
};

export default Unauthenticated;
