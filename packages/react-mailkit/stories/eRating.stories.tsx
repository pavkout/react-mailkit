import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ERating } from '../src/browser';

export default {
  title: 'Email Design System/Custom Body components/eRating',
  component: ERating,
  argTypes: {
    size: {
      table: {
        category: 'Dimensions'
      }
    },
    url: {
      table: {
        category: 'Link'
      }
    },
    stars: {
      table: {
        category: 'Number of Starts'
      }
    },
    urlPerStar: {
      table: {
        category: 'Security'
      },
      control: { type: 'Boolean' }
    }
  }
} as ComponentMeta<typeof ERating>;

const Template: ComponentStory<typeof ERating> = (args) => (
  <ERating {...args} />
);

export const FiveStarts = Template.bind({});

FiveStarts.args = {
  url: 'https://campaignmonitor.wufoo.com/forms/q1iszi41dp3po9/def/field=',
  stars: 5,
  size: 36
};

export const Smaller = Template.bind({});

Smaller.args = {
  url: 'https://campaignmonitor.wufoo.com/forms/q1iszi41dp3po9/def/field=',
  stars: 5,
  size: 20
};

export const TenStarts = Template.bind({});

TenStarts.args = {
  url: 'https://campaignmonitor.wufoo.com/forms/q1iszi41dp3po9/def/field=',
  stars: 10,
  size: 36
};

export const URLPerStart = Template.bind({});

URLPerStart.args = {
  url: 'https://campaignmonitor.wufoo.com/forms/q1iszi41dp3po9/def/field=',
  stars: 5,
  size: 36,
  urlPerStar: true
};
