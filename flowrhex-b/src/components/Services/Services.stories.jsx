// Services.stories.jsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Services from './Services';

export default {
  title: 'Pages/Services',
  component: Services,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export const Default = () => <Services />;
