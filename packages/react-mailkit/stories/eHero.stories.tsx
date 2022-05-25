import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EHero, EText, EButton } from '../src/browser';

export default {
  title: 'Email Design System/Standard Body components/eHero',
  component: EHero,
  argTypes: {
    backgroundColor: {
      control: 'color',
      table: {
        category: 'Colors'
      }
    },
    mode: {
      table: {
        category: 'Mode'
      },
      control: { type: 'select' }
    },
    height: {
      table: {
        category: 'Dimensions'
      }
    },
    width: {
      table: {
        category: 'Dimensions'
      }
    },
    verticalAlign: {
      table: {
        category: 'Alignment'
      },
      control: { type: 'select' }
    },
    backgroundUrl: {
      table: {
        category: 'Background'
      }
    },
    backgroundPosition: {
      table: {
        category: 'Background'
      }
    },
    backgroundHeight: {
      table: {
        category: 'Background'
      }
    },
    backgroundWidth: {
      table: {
        category: 'Background'
      }
    },
    borderRadius: {
      table: {
        category: 'Sizes'
      }
    },
    padding: {
      table: {
        category: 'Sizes'
      }
    },
    paddingTop: {
      table: {
        category: 'Sizes'
      }
    },
    paddingBottom: {
      table: {
        category: 'Sizes'
      }
    },
    paddingRight: {
      table: {
        category: 'Sizes'
      }
    },
    paddingLeft: {
      table: {
        category: 'Sizes'
      }
    },
    children: {
      table: {
        disable: true
      }
    }
  }
} as ComponentMeta<typeof EHero>;

const Template: ComponentStory<typeof EHero> = (args) => (
  <EHero {...args}>
    <EText
      padding="20px"
      color="#ffffff"
      fontFamily="Helvetica"
      align="center"
      fontSize="45px"
      lineHeight="45px"
      fontWeight="bold">
      GO TO SPACE
    </EText>
    <EButton href="https://mjml.io/" align="center">
      ORDER YOUR TICKET NOW
    </EButton>
  </EHero>
);

export const FixedHeight = Template.bind({});

FixedHeight.args = {
  mode: 'fixed-height',
  height: '469px',
  backgroundWidth: '600px',
  backgroundHeight: '469px',
  backgroundUrl:
    'https://cloud.githubusercontent.com/assets/1830348/15354890/1442159a-1cf0-11e6-92b1-b861dadf1750.jpg',
  backgroundColor: '#2a3448',
  padding: '100px 0px'
};

export const FluidHeight = Template.bind({});

FluidHeight.args = {
  mode: 'fluid-height',
  backgroundWidth: '600px',
  backgroundHeight: '469px',
  backgroundUrl:
    'https://cloud.githubusercontent.com/assets/1830348/15354890/1442159a-1cf0-11e6-92b1-b861dadf1750.jpg',
  backgroundColor: '#2a3448',
  padding: '100px 0px',
  width: '100%'
};
