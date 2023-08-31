import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Card } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = (args) => <Card {...args} />;

export const primary = Template.bind({});
primary.args = {
  variant: 'primary',
  title: 'News',
  description:
    'StatsBomb Offers Free Analytics Support to Women’s Teams in 2023/24',
  imageUrl:
    'https://statsbomb.com/wp-content/uploads/2023/08/Salma_Paralluelo_WWC.png',
};

export const secondary = Template.bind({});
secondary.args = {
  variant: 'secondary',
  title: 'Teams',
  titleComponent: 'h4',
  description:
    'Our data helps soccer and football teams improve their performance, discover new players, and reveal hidden tactics',
  descriptionComponent: 'p',
  imageUrl:
    'https://statsbomb.com/wp-content/uploads/2022/02/Roma_Celebrate_1500x1000-min.png',
};
