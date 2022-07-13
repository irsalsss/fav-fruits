import React from 'react';
import {
  Routes as ReactRoutes,
  Route,
} from 'react-router-dom';
import loadable from '@loadable/component';

const Favorite = loadable(() => import('../pages/Favorite'));
const NotFound = loadable(() => import('../pages/NotFound'));

const Authenticated = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<Favorite />} />
      <Route path="*" element={<NotFound />} />
    </ReactRoutes>
  );
};

export default Authenticated;
