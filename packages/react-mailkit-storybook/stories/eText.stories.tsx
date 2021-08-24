import React from 'react';
import { Story, Meta } from '@storybook/react';

import { EText, ITextProps } from '@react-mailkit/core';

export default {
  title: 'Email Design System/Standard Body components/eText',
  component: EText,
  argTypes: {
    color: {
      control: 'color',
      table: {
        category: 'Colors'
      }
    },
    containerBackgroundColor: {
      control: 'color',
      table: {
        category: 'Colors'
      }
    },
    height: {
      table: {
        category: 'Dimentions'
      }
    },
    fontSize: {
      table: {
        category: 'Font'
      }
    },
    fontFamily: {
      table: {
        category: 'Font'
      }
    },
    fontStyle: {
      table: {
        category: 'Font'
      },
      control: { type: 'select' }
    },
    fontWeight: {
      table: {
        category: 'Font'
      }
    },
    textDecoration: {
      table: {
        category: 'Text'
      },
      control: { type: 'select' }
    },
    textTransform: {
      table: {
        category: 'Text'
      },
      control: { type: 'select' }
    },
    letterSpacing: {
      table: {
        category: 'Text'
      }
    },
    lineHeight: {
      table: {
        category: 'Text'
      }
    },
    align: {
      table: {
        category: 'Aligment'
      },
      control: { type: 'select' }
    },
    cssClass: {
      table: {
        category: 'Extra Class'
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

const Template: Story<ITextProps> = args => (
  <EText {...args}>I'm awesome email</EText>
);

export const Overview = Template.bind({});

Overview.args = {};

export const Color = Template.bind({});

Color.args = {
  color: 'red'
};

export const Size = Template.bind({});

Size.args = {
  fontSize: '22px'
};

export const WithBackground = Template.bind({});

WithBackground.args = {
  color: '#ffffff',
  align: 'center',
  fontSize: '22px',
  containerBackgroundColor: '#095a95'
};
