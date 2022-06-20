import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EQrCode } from '../src/browser';

export default {
  title: 'Email Design System/Custom Body components/eQrCode',
  component: EQrCode,
  argTypes: {
    value: {
      table: {
        category: 'Value',
      },
    },
    backgroundColor: {
      control: 'color',
      table: {
        category: 'Colors',
      },
    },
    color: {
      control: 'color',
      table: {
        category: 'Colors',
      },
    },
    ecLevel: {
      table: {
        category: 'Security',
      },
      control: { type: 'select' },
    },
    host: {
      table: {
        category: 'API',
      },
    },
    protocol: {
      table: {
        category: 'API',
      },
      control: { type: 'select' },
    },
    margin: {
      table: {
        category: 'Sizes',
      },
    },
    width: {
      table: {
        category: 'Dimensions',
      },
    },
  },
} as ComponentMeta<typeof EQrCode>;

const Template: ComponentStory<typeof EQrCode> = (args) => (
  <EQrCode {...args} />
);

export const Overview = Template.bind({});

Overview.args = {
  value: 'This is awesome QR Code',
};

export const Color = Template.bind({});

Color.args = {
  value: 'This is awesome QR Code',
  color: '#567fe8',
};

export const BackgroundColor = Template.bind({});

BackgroundColor.args = {
  value: 'This is awesome QR Code',
  color: '#567fe8',
  backgroundColor: '#cfe856',
};
