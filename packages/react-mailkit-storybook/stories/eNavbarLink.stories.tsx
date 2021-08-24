import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ENavbarLink, INavbarLinkProps, ENavbar } from '@react-mailkit/core';

export default {
  title: 'Email Design System/Standard Body components/eNavbarLink',
  component: ENavbarLink,
  argTypes: {
    href: {
      table: {
        category: 'Hyperlink'
      }
    },
    color: {
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
    cssClass: {
      table: {
        category: 'Extra Class'
      }
    }
  }
} as Meta;

const Template: Story<INavbarLinkProps> = args => (
  <ENavbar>
    <ENavbarLink {...args}>Getting started</ENavbarLink>
  </ENavbar>
);

export const Overview = Template.bind({});

Overview.args = {
  href: '/gettings-started-onboard',
  color: 'white'
};
