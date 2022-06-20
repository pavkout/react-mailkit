import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EDivider } from '../src/browser';

export default {
  title: 'Email Design System/Standard Body components/eDivider',
  component: EDivider,
  argTypes: {
    containerBackgroundColor: {
      control: 'color',
      table: {
        category: 'Colors',
      },
    },
    align: {
      table: {
        category: 'Alignment',
      },
      control: { type: 'select' },
    },
    padding: {
      table: {
        category: 'Sizes',
      },
    },
    paddingTop: {
      table: {
        category: 'Sizes',
      },
    },
    paddingBottom: {
      table: {
        category: 'Sizes',
      },
    },
    paddingRight: {
      table: {
        category: 'Sizes',
      },
    },
    paddingLeft: {
      table: {
        category: 'Sizes',
      },
    },
    width: {
      table: {
        category: 'Dimensions',
      },
    },
    cssClass: {
      table: {
        category: 'Extra Class',
      },
    },
    borderColor: {
      table: {
        category: 'Border',
      },
    },
    borderStyle: {
      table: {
        category: 'Border',
      },
      control: { type: 'select' },
    },
    borderWidth: {
      table: {
        category: 'Border',
      },
    },
  },
} as ComponentMeta<typeof EDivider>;

const Template: ComponentStory<typeof EDivider> = (args) => (
  <EDivider {...args} />
);

export const Overview = Template.bind({});

Overview.args = {};
