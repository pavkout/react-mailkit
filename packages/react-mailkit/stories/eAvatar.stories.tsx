import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EAvatar } from '../src/browser';

export default {
  title: 'Email Design System/Custom Body components/eAvatar',
  component: EAvatar,
  argTypes: {
    src: {
      table: {
        category: 'Image',
      },
    },
    alt: {
      table: {
        category: 'Accessibility',
      },
    },
    size: {
      table: {
        category: 'Dimensions',
      },
    },
    shape: {
      table: {
        category: 'Shape',
      },
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof EAvatar>;

const Template: ComponentStory<typeof EAvatar> = (args) => (
  <EAvatar {...args} />
);

export const Circle = Template.bind({});

Circle.args = {
  src: 'https://www.ethode.com/contentAsset/image/84e3be24-58bc-499c-9d50-f8088158f11a/image/filter/Resize/resize_w/1024',
  shape: 'circle',
};

export const SmallCircle = Template.bind({});

SmallCircle.args = {
  src: 'https://www.ethode.com/contentAsset/image/84e3be24-58bc-499c-9d50-f8088158f11a/image/filter/Resize/resize_w/1024',
  shape: 'circle',
  size: 40,
};

export const Rectangular = Template.bind({});

Rectangular.args = {
  src: 'https://www.ethode.com/contentAsset/image/84e3be24-58bc-499c-9d50-f8088158f11a/image/filter/Resize/resize_w/1024',
  shape: 'rectangular',
};

export const SmallRectangular = Template.bind({});

SmallRectangular.args = {
  src: 'https://www.ethode.com/contentAsset/image/84e3be24-58bc-499c-9d50-f8088158f11a/image/filter/Resize/resize_w/1024',
  shape: 'rectangular',
  size: 40,
};
