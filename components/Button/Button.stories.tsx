import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Button } from './Button';
import RightArrowIcon from '../Icon/Right-Arrow';
import LeftArrowIcon from '../Icon/Left-Arrow';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const primary = Template.bind({});

primary.args = {
  varient: 'primary',
  children: 'Button',
};

export const secondary = Template.bind({});
secondary.args = {
  varient: 'secondary',
  children: 'Button',
};

export const text = Template.bind({});
text.args = {
  varient: 'text',
  children: 'Button',
};

export const rightArrowIcon = Template.bind({});
rightArrowIcon.args = {
  varient: 'icon',
  icon: RightArrowIcon,
};


export const leftArrowIcon = Template.bind({});
leftArrowIcon.args = {
  varient: 'icon',
  icon: LeftArrowIcon,
};

