import React from 'react';
import { Story, Meta } from '@storybook/react';

import { EHero, IHeroProps, EText, EButton } from 'react-mailkit';

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
        category: 'Dimentions'
      }
    },
    width: {
      table: {
        category: 'Dimentions'
      }
    },
    verticalAlign: {
      table: {
        category: 'Aligment'
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
} as Meta;

const Template: Story<IHeroProps> = args => (
  <EHero {...args}>
    <EText
      padding='20px'
      color='#ffffff'
      fontFamily='Helvetica'
      align='center'
      fontSize='45px'
      lineHeight='45px'
      fontWeight='bold'
    >
      GO TO SPACE
    </EText>
    <EButton href='https://mjml.io/' align='center'>
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
