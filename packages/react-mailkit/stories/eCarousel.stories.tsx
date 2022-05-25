import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ECarousel, ECarouselImage } from '../src/browser';

export default {
  title: 'Email Design System/Standard Body components/eCarousel',
  component: ECarousel,
  argTypes: {
    backgroundColor: {
      control: 'color',
      table: {
        category: 'Colors'
      }
    },
    align: {
      table: {
        category: 'Alignment'
      }
    },
    borderRadius: {
      table: {
        category: 'Sizes'
      }
    },
    cssClass: {
      table: {
        category: 'Extra Class'
      }
    },
    leftIcon: {
      table: {
        category: 'Arror Icons'
      }
    },
    rightIcon: {
      table: {
        category: 'Arror Icons'
      }
    },
    iconWidth: {
      table: {
        category: 'Arror Icons'
      }
    },
    thumbnails: {
      table: {
        category: 'Thumbnail'
      }
    },
    tbWidth: {
      table: {
        category: 'Thumbnail'
      }
    },
    tbBorderRadius: {
      table: {
        category: 'Thumbnail'
      }
    },
    tbBorder: {
      table: {
        category: 'Thumbnail'
      }
    },
    tbHoverBorderColor: {
      control: 'color',
      table: {
        category: 'Thumbnail'
      }
    },
    tbSelectedBorderColor: {
      control: 'color',
      table: {
        category: 'Thumbnail'
      }
    },
    children: {
      table: {
        disable: true
      }
    }
  }
} as ComponentMeta<typeof ECarousel>;

const Template: ComponentStory<typeof ECarousel> = (args) => (
  <ECarousel {...args}>
    <ECarouselImage src="https://www.mailjet.com/wp-content/uploads/2016/11/ecommerce-guide.jpg" />
    <ECarouselImage src="https://www.mailjet.com/wp-content/uploads/2016/09/3@1x.png" />
    <ECarouselImage src="https://www.mailjet.com/wp-content/uploads/2016/09/1@1x.png" />
  </ECarousel>
);

export const Overview = Template.bind({});

Overview.args = {};
