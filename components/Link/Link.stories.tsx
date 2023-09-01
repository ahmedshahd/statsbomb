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

export const primary = Template.bind({});
primary.args = {
  variant: 'primary',
  label: 'Link',
};

export const secondary = Template.bind({});
secondary.args = {
  variant: 'secondary',
  label: 'Link',
};

export const tertiary = Template.bind({});
tertiary.args = {
  variant: 'tertiary',
  label: 'Link',
};

export const text = Template.bind({});
text.args = {
  variant: 'text',
  label: 'Link',
};

export const highlitedText = Template.bind({});
highlitedText.args = {
  variant: 'text',
  label: 'Link',
  isHighlited: true,
};
