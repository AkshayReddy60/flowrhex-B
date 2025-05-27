// Products.stories.jsx
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Products from './Products';

const withRouter = (Story) => (
  <MemoryRouter>
    <Story />
  </MemoryRouter>
);

export default {
  title: 'Pages/Products',
  component: Products,
  decorators: [withRouter],
};

export const Default = () => <Products />;
