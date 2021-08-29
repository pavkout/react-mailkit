import React from 'react';
import { Story, Meta } from '@storybook/react';

import { EButton, IButtonProps } from 'react-mailkit';

export default {
  title: 'Email Design System/Standard Body components/eButton',
  component: EButton,
  argTypes: {
    backgroundColor: {
      control: 'color',
      table: {
        category: 'Colors'
      }
    },
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
    textAlign: {
      table: {
        category: 'Text'
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
    href: {
      table: {
        category: 'Hyperlink'
      }
    },
    rel: {
      table: {
        category: 'Hyperlink'
      }
    },
    target: {
      table: {
        category: 'Hyperlink'
      },
      control: { type: 'select' }
    },
    title: {
      table: {
        category: 'Accessibility'
      }
    },
    verticalAlign: {
      table: {
        category: 'Aligment'
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
    innerPadding: {
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
    border: {
      table: {
        category: 'Sizes'
      }
    },
    borderTop: {
      table: {
        category: 'Sizes'
      }
    },
    borderBottom: {
      table: {
        category: 'Sizes'
      }
    },
    borderRight: {
      table: {
        category: 'Sizes'
      }
    },
    borderLeft: {
      table: {
        category: 'Sizes'
      }
    },
    borderRadius: {
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

const Template: Story<IButtonProps> = args => (
  <EButton {...args}>I'm a Button</EButton>
);

export const Overview = Template.bind({});

Overview.args = {
  backgroundColor: '#8305f2'
};
