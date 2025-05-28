// Technology.stories.jsx
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Technology from "./Technology";

export default {
  title: "Pages/Technology",
  component: Technology,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template = (args) => <Technology {...args} />;

export const Default = Template.bind({});
Default.args = {};
