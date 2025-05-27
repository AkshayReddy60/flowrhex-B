// Contact.stories.jsx
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Contact from './Contact';

const withRouter = (Story) => (
  <MemoryRouter>
    <Story />
  </MemoryRouter>
);

export default {
  title: 'Pages/Contact',
  component: Contact,
  decorators: [withRouter],
};

export const Default = () => <Contact />;
