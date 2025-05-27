// About.stories.jsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import About from './About';

// Decorator to wrap About in BrowserRouter
const withRouter = (Story) => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
);

export default {
  title: 'Pages/About',
  component: About,
  decorators: [withRouter],
};

export const Default = () => <About />;
