import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Button } from './Button';
import { Icon } from '@iconify/react';

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
  variant: 'primary',
  children: 'Button',
};

export const secondary = Template.bind({});
secondary.args = {
  variant: 'secondary',
  children: 'Button',
};

export const text = Template.bind({});
text.args = {
  variant: 'text',
  children: 'Button',
};

export const buttonIcon = Template.bind({});
buttonIcon.args = {
  variant: 'icon',
  children: <Icon icon="carbon:arrow-left" />,
};
