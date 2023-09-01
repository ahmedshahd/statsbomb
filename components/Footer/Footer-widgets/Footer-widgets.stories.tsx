import { StoryFn, Meta } from '@storybook/react';
import { FooterWidgets } from './Footer-widgets';
import { FooterWidget } from './Footer-widget';
import { SocialLinks } from './Footer-widget/Social-links';
import { FooterForm } from './Footer-widget/Footer-form';

export default {
  title: 'Components/FooterWidgets',
  component: FooterWidgets,
} as Meta<typeof FooterWidgets>;

const Template: StoryFn<typeof FooterWidgets> = (args) => (
  <FooterWidgets {...args} />
);

const widgets = (
  <>
    <FooterWidget
      titles={['Who We Are']}
      items={[
        'Our Culture',
        'Media',
        'Events',
        'Careers',
        'Contact Us',
        'Arqam Digital',
      ]}
    />
    <FooterWidget
      titles={['Who We Help']}
      items={[
        'Sports Teams',
        'Media',
        'Gambling',
        'Governing Bodies',
        'Case Studies',
        'Customer Success',
      ]}
    />
    <FooterWidget
      titles={['What We Do']}
      items={[
        'Soccer Data',
        'IQ Soccer',
        'IQ Live Soccer',
        'American Football Data & IQ',
        'Consultancy',
        'Media pack',
      ]}
    />
    <FooterWidget
      titles={['Login', 'Contact Us']}
      children={
        <SocialLinks icons={['bi:twitter', 'bi:youtube', 'bi:linkedin']} />
      }
    />
    <FooterWidget
      titles={['Sign up to our email newsletter']}
      children={<FooterForm />}
    />
  </>
);

export const Default = Template.bind({});
Default.args = {
  children: widgets,
};
