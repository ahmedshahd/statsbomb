import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { Link } from './Link';

export default {
  title: 'Components/Link',
  component: Link,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Link>;

const Template: StoryFn<typeof Link> = (args) => <Link {...args} />;

export const red = Template.bind({});

red.args = {
  red: true,
  label: 'Link',
};

export const grey = Template.bind({});
grey.args = {
  label: 'Link',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Link',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Link',
};
