import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EImage } from '../src/browser';

export default {
  title: 'Email Design System/Standard Body components/eImage',
  component: EImage,
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
    height: {
      table: {
        category: 'Dimensions',
      },
    },
    width: {
      table: {
        category: 'Dimensions',
      },
    },
    sizes: {
      table: {
        category: 'Dimensions',
      },
    },
    src: {
      table: {
        category: 'Hyperlink',
      },
    },
    srcSet: {
      table: {
        category: 'Hyperlink',
      },
    },
    name: {
      table: {
        category: 'Hyperlink',
      },
    },
    alt: {
      table: {
        category: 'Hyperlink',
      },
    },
    href: {
      table: {
        category: 'Hyperlink',
      },
    },
    rel: {
      table: {
        category: 'Hyperlink',
      },
    },
    target: {
      table: {
        category: 'Hyperlink',
      },
      control: { type: 'select' },
    },
    cssClass: {
      table: {
        category: 'Extra Class',
      },
    },
    fluidOnMobile: {
      table: {
        category: 'Fluid on Mobile',
      },
      control: { type: 'boolean' },
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
    border: {
      table: {
        category: 'Sizes',
      },
    },
    borderTop: {
      table: {
        category: 'Sizes',
      },
    },
    borderBottom: {
      table: {
        category: 'Sizes',
      },
    },
    borderRight: {
      table: {
        category: 'Sizes',
      },
    },
    borderLeft: {
      table: {
        category: 'Sizes',
      },
    },
    borderRadius: {
      table: {
        category: 'Sizes',
      },
    },
    useMap: {
      table: {
        category: 'Attributes',
      },
    },
    title: {
      table: {
        category: 'Accessibility',
      },
    },
  },
} as ComponentMeta<typeof EImage>;

const Template: ComponentStory<typeof EImage> = (args) => <EImage {...args} />;

export const Overview = Template.bind({});

Overview.args = {
  width: 300,
  src: 'https://www.online-image-editor.com//styles/2014/images/example_image.png',
};

export const HrefImage = Template.bind({});

HrefImage.args = {
  href: 'https://www.google.com',
  target: '_blank',
  width: 300,
  src: 'https://www.online-image-editor.com//styles/2014/images/example_image.png',
};

export const RadiusImage = Template.bind({});

RadiusImage.args = {
  borderRadius: 50,
  width: 300,
  src: 'https://www.online-image-editor.com//styles/2014/images/example_image.png',
};
