import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ESocial, ISocialProps, ESocialElement } from 'react-mailkit';

export default {
  title: 'Email Design System/Standard Body components/eSocial',
  component: ESocial,
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
      }
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
    lineHeight: {
      table: {
        category: 'Text'
      }
    },
    cssClass: {
      table: {
        category: 'Extra Class'
      }
    },
    iconSize: {
      table: {
        category: 'Icon'
      }
    },
    iconHeight: {
      table: {
        category: 'Icon'
      }
    },
    mode: {
      table: {
        category: 'Aligment'
      },
      control: { type: 'select' }
    },
    align: {
      table: {
        category: 'Aligment'
      },
      control: { type: 'select' }
    },
    textPadding: {
      table: {
        category: 'Sizes'
      }
    },
    iconPadding: {
      table: {
        category: 'Sizes'
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

const Template: Story<ISocialProps> = args => (
  <ESocial {...args}>
    <ESocialElement name='facebook' href='https://mjml.io/'>
      Facebook
    </ESocialElement>
    <ESocialElement name='google' href='https://mjml.io/'>
      Google
    </ESocialElement>
    <ESocialElement name='twitter' href='https://mjml.io/'>
      Twitter
    </ESocialElement>
  </ESocial>
);

export const Overview = Template.bind({});

Overview.args = {
  fontSize: '15px',
  iconSize: '30px',
  mode: 'horizontal'
};
