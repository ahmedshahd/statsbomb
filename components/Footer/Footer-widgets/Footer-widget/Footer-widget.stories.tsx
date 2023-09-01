import { StoryFn, Meta } from '@storybook/react';
import { FooterWidget } from './Footer-widget';
import { SocialLinks } from './Social-links/Social-links';

export default {
  title: 'Components/FooterWidget',
  component: FooterWidget,
} as Meta<typeof FooterWidget>;
const Template: StoryFn<typeof FooterWidget> = (args) => (
  <FooterWidget {...args} />
);
export const Default = Template.bind({});
Default.args = {
  titles: ['Who We Help'],
  items: [
    'Sports Teams',
    'Media',
    'Gambling',
    'Governing Bodies',
    'Case Studies',
    'Customer Success',
  ],
};

const socialLinks = (
  <SocialLinks icons={['bi:twitter', 'bi:youtube', 'bi:linkedin']} />
);

export const Titles = Template.bind({});
Titles.args = {
  titles: ['Login', 'Contact Us'],
  children: socialLinks,
};
