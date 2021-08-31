import React from 'react';
import { Story, Meta } from '@storybook/react';

import { EDivider, IDividerProps } from 'react-mailkit';

export default {
  title: 'Email Design System/Standard Body components/eDivider',
  component: EDivider,
  argTypes: {
    containerBackgroundColor: {
      control: 'color',
      table: {
        category: 'Colors'
      }
    },
    align: {
      table: {
        category: 'Aligment'
      },
      control: { type: 'select' }
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
    width: {
      table: {
        category: 'Dimentions'
      }
    },
    cssClass: {
      table: {
        category: 'Extra Class'
      }
    },
    borderColor: {
      table: {
        category: 'Border'
      }
    },
    borderStyle: {
      table: {
        category: 'Border'
      },
      control: { type: 'select' }
    },
    borderWidth: {
      table: {
        category: 'Border'
      }
    }
  }
} as Meta;

const Template: Story<IDividerProps> = args => <EDivider {...args} />;

export const Overview = Template.bind({});

Overview.args = {};