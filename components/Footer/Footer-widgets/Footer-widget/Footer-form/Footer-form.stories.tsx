import { StoryFn, Meta } from '@storybook/react';
import { FooterForm } from './Footer-form';
export default {
  title: 'Components/FooterForm',
  component: FooterForm,
} as Meta<typeof FooterForm>;
const Template: StoryFn<typeof FooterForm> = (args) => (
  <FooterForm {...args} />
);

export const Default = Template.bind({});
Default.args = {
};
