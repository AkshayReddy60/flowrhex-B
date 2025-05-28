import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';

export default {
  title: 'Components/Navbar',
  component: Navbar,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {};
