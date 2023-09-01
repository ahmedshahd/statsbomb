import { StoryFn, Meta } from '@storybook/react';
import { SocialLinks } from './Social-links';
export default {
  title: 'Components/SocialLinks',
  component: SocialLinks,
} as Meta<typeof SocialLinks>;
const Template: StoryFn<typeof SocialLinks> = (args) => (
  <SocialLinks {...args} />
);

export const Default = Template.bind({});
Default.args = {
  icons: ['bi:twitter', 'bi:youtube', 'bi:linkedin'],
};
