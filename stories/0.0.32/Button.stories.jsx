import React from 'react';

const Button = () => <button>click me</button>

export default {
  title: '0.0.32/Button',
  component: Button,
  argTypes: {}
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: 'Button',
};
