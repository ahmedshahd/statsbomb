import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { FooterBottomRow } from './Footor-bottom-row';
export default {
  title: 'Components/FooterBottomRow',
  component: FooterBottomRow,
} as Meta<typeof FooterBottomRow>;

const Template: StoryFn<typeof FooterBottomRow> = (args) => (
  <FooterBottomRow {...args} />
);

export const Default = Template.bind({});

Default.args = {
  items: [
    'Privacy Policy',
    'All images (c) PA Images',
    'Recruitment Privacy Policy',
    'International Data Transfers',
  ],
};
