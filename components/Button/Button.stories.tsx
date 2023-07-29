import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const red = Template.bind({});

red.args = {
  red: true,
  label: 'Button',
};

export const grey = Template.bind({});
grey.args = {
  grey: true,
  label: 'Button',
};

export const white = Template.bind({});
white.args = {
  white: true,
  label: 'Button',
};

export const arrowRight = Template.bind({});
arrowRight.args = {
  backgroundImage: 'right-arrow',
};

export const arrowleft = Template.bind({});
arrowleft.args = {
  backgroundImage: 'left-arrow',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
