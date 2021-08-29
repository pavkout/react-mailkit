import React from 'react';
import { Story, Meta } from '@storybook/react';

import { EBarcode, IBarcodeProps } from 'react-mailkit';

export default {
  title: 'Email Design System/Custom Body components/eBarcode',
  component: EBarcode,
  argTypes: {
    bcid: {
      table: {
        category: 'Barcode Type'
      }
    },
    value: {
      table: {
        category: 'Value'
      }
    },
    scale: {
      table: {
        category: 'Scale'
      }
    },
    scaleX: {
      table: {
        category: 'Scale'
      }
    },
    scaleY: {
      table: {
        category: 'Scale'
      }
    },
    rotate: {
      table: {
        category: 'Rotation'
      },
      control: { type: 'select' }
    },
    monochrome: {
      table: {
        category: 'Monochrome'
      },
      control: { type: 'boolean' }
    },
    includetext: {
      table: {
        category: 'Include Text'
      },
      control: { type: 'boolean' }
    },
    height: {
      table: {
        category: 'Dimentions'
      }
    },
    width: {
      table: {
        category: 'Dimentions'
      }
    }
  }
} as Meta;

const Template: Story<IBarcodeProps> = args => <EBarcode {...args} />;

export const Overview = Template.bind({});

Overview.args = {
  value: '1234567890',
  rotate: 'N'
};

export const Scale = Template.bind({});

Scale.args = {
  value: '1234567890',
  scale: 3,
  rotate: 'N'
};

export const Rotate = Template.bind({});

Rotate.args = {
  value: '1234567890',
  rotate: 'L'
};

export const WithTextIncluded = Template.bind({});

WithTextIncluded.args = {
  value: '1234567890',
  includetext: true,
  rotate: 'N'
};

export const RotateWithText = Template.bind({});

RotateWithText.args = {
  value: '1234567890',
  includetext: true,
  rotate: 'R'
};
