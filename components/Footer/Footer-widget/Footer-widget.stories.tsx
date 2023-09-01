import { StoryFn, Meta } from '@storybook/react';
import { FooterWidget } from './Footer-widget';
export default {
  title: 'Components/FooterWidget',
  component: FooterWidget,

} as Meta<typeof FooterWidget>;
const Template: StoryFn<typeof FooterWidget> = (args) => <FooterWidget {...args}   />;
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

export const Titles = Template.bind({});
Titles.args = {
  titles: ['Login', 'Contact Us'],
 
};
