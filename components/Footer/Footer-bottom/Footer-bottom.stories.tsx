import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { FooterBottom } from './Footer-bottom';
// import { FooterBottomRow } from './Footer-bottom-row/Footor-bottom-row';
export default {
  title: 'Components/FooterBottom',
  component: FooterBottom,
} as Meta<typeof FooterBottom>;

const Template: StoryFn<typeof FooterBottom> = (args) => (
  <FooterBottom {...args} />
);

export const Default = Template.bind({});
// const footerMiddleRow = (
//   <FooterBottomRow
//     items={[
//       'Privacy Policy',
//       'All images (c) PA Images',
//       'Recruitment Privacy Policy',
//       'International Data Transfers',
//     ]}
//   />
// );
Default.args = {
  // rightItem: 'Copyright © 2022 StatsBomb Inc. All rights reserved',
  // middleItem: footerMiddleRow,
  // leftItem: 'United Kingdom',
};
