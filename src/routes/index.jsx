import React from 'react';
import {
  BrowserRouter as Router,
  Routes as ReactRoutes,
  Route,
} from 'react-router-dom';
import loadable from '@loadable/component';

const Favorite = loadable(() => import('../pages/Favorite'));
const Login = loadable(() => import('../pages/Login'));
const NotFound = loadable(() => import('../pages/NotFound'));

const Routes = () => {
  return (
    <Router>
      <ReactRoutes>
        <Route path="/" element={<Favorite />} />
        <Route path="/login" element={<Login />} />

        <Route path="/*" element={<NotFound />} />
      </ReactRoutes>
    </Router>
  );
};

export default Routes;
