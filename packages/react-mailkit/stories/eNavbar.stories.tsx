import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ENavbar, ENavbarLink } from '../src/browser';

export default {
  title: 'Email Design System/Standard Body components/eNavbar',
  component: ENavbar,
  argTypes: {
    baseUrl: {
      table: {
        category: 'Hyperlink'
      }
    },
    hamburger: {
      table: {
        category: 'Hamburger'
      }
    },
    align: {
      table: {
        category: 'Alignment'
      },
      control: { type: 'select' }
    },
    icoColor: {
      control: 'color',
      table: {
        category: 'Icon'
      }
    },
    icoAlign: {
      table: {
        category: 'Icon'
      },
      control: { type: 'select' }
    },
    icoClose: {
      table: {
        category: 'Icon'
      }
    },
    icoFontFamily: {
      table: {
        category: 'Icon'
      }
    },
    icoFontSize: {
      table: {
        category: 'Icon'
      }
    },
    icoLineHeight: {
      table: {
        category: 'Icon'
      }
    },
    icoOpen: {
      table: {
        category: 'Icon'
      }
    },
    icoPadding: {
      table: {
        category: 'Icon'
      }
    },
    icoPaddingTop: {
      table: {
        category: 'Icon'
      }
    },
    icoPaddingBottom: {
      table: {
        category: 'Icon'
      }
    },
    icoPaddingLeft: {
      table: {
        category: 'Icon'
      }
    },
    icoPaddingRight: {
      table: {
        category: 'Icon'
      }
    },
    icoTextDecoration: {
      table: {
        category: 'Icon'
      },
      control: { type: 'select' }
    },
    icoTextTransform: {
      table: {
        category: 'Icon'
      },
      control: { type: 'select' }
    },
    cssClass: {
      table: {
        category: 'Extra Class'
      }
    },
    children: {
      table: {
        disable: true
      }
    }
  }
} as ComponentMeta<typeof ENavbar>;

const Template: ComponentStory<typeof ENavbar> = (args) => (
  <ENavbar {...args}>
    <ENavbarLink href="/gettings-started-onboard" color="#ffffff">
      Getting started
    </ENavbarLink>
    <ENavbarLink href="/try-it-live" color="#ffffff">
      Try it live
    </ENavbarLink>
    <ENavbarLink href="/templates" color="#ffffff">
      Templates
    </ENavbarLink>
    <ENavbarLink href="/components" color="#ffffff">
      Components
    </ENavbarLink>
  </ENavbar>
);

export const Overview = Template.bind({});

Overview.args = {
  baseUrl: 'https://mjml.io',
  hamburger: 'hamburger',
  icoColor: '#d9d9d9'
};
