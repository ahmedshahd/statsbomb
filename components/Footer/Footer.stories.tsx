import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Footer } from './Footer';
import { FooterBottom } from './Footer-bottom';
import { FooterBottomRow } from './Footer-bottom/Footer-bottom-row';
import { FooterWidgets } from './Footer-widgets';
import { FooterWidget } from './Footer-widgets/Footer-widget';
import { SocialLinks } from './Footer-widgets/Footer-widget/Social-links';
import { FooterForm } from './Footer-widgets/Footer-widget/Footer-form';

export default {
  title: 'Components/Footer',
  component: Footer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Footer>;

const Template: StoryFn<typeof Footer> = (args) => <Footer {...args} />;

const footerMiddleRow = (
  <FooterBottomRow
    items={[
      'Privacy Policy',
      'All images (c) PA Images',
      'Recruitment Privacy Policy',
      'International Data Transfers',
    ]}
  />
);
const footerBottom = (
  <FooterBottom
    rightItem={'Copyright © 2022 StatsBomb Inc. All rights reserved'}
    middleItem={footerMiddleRow}
    leftItem={'United Kingdom'}
  />
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
const footerWidgets = <FooterWidgets children={widgets} />;

export const Defualt = Template.bind({});
Defualt.args = {
  footerWidgets,
  footerBottom,
};
