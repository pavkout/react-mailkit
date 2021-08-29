import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ECarouselImage, ICarouselImageProps, ECarousel } from 'react-mailkit';

export default {
  title: 'Email Design System/Standard Body components/eCarouselImage',
  component: ECarouselImage,
  argTypes: {
    thumbnailsSrc: {
      table: {
        category: 'Thumbnail'
      }
    },
    src: {
      table: {
        category: 'Hyperlink'
      }
    },
    href: {
      table: {
        category: 'Hyperlink'
      }
    },
    alt: {
      table: {
        category: 'Hyperlink'
      }
    },
    rel: {
      table: {
        category: 'Hyperlink'
      }
    },
    title: {
      table: {
        category: 'Accessibility'
      }
    },
    target: {
      table: {
        category: 'Hyperlink'
      },
      control: { type: 'select' }
    },
    cssClass: {
      table: {
        category: 'Extra Class'
      }
    }
  }
} as Meta;

const Template: Story<ICarouselImageProps> = args => (
  <ECarousel>
    <ECarouselImage
      {...args}
      src='https://www.mailjet.com/wp-content/uploads/2016/11/ecommerce-guide.jpg'
    />
    <ECarouselImage
      {...args}
      src='https://www.mailjet.com/wp-content/uploads/2016/09/3@1x.png'
    />
    <ECarouselImage
      {...args}
      src='https://www.mailjet.com/wp-content/uploads/2016/09/1@1x.png'
    />
  </ECarousel>
);

export const Overview = Template.bind({});

Overview.args = {};
