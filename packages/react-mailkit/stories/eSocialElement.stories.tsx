import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ESocialElement, ESocial } from '../src/browser';

export default {
  title: 'Email Design System/Standard Body components/eSocialElement',
  component: ESocialElement,
  argTypes: {
    name: {
      table: {
        category: 'Name'
      }
    },
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
    sizes: {
      table: {
        category: 'Dimensions'
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
    rel: {
      table: {
        category: 'Hyperlink'
      }
    },
    alt: {
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
    srcSet: {
      table: {
        category: 'Hyperlink'
      }
    },
    title: {
      table: {
        category: 'Accessibility'
      }
    },
    verticalAlign: {
      table: {
        category: 'Alignment'
      },
      control: { type: 'select' }
    },
    align: {
      table: {
        category: 'Alignment'
      },
      control: { type: 'select' }
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
    lineHeight: {
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
    iconPadding: {
      table: {
        category: 'Sizes'
      }
    },
    textPadding: {
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
} as ComponentMeta<typeof ESocialElement>;

const Template: ComponentStory<typeof ESocialElement> = (args) => (
  <ESocial fontSize={15} iconSize={30} mode="horizontal">
    <ESocialElement {...args}>Facebook</ESocialElement>
  </ESocial>
);

export const Overview = Template.bind({});

Overview.args = {
  name: 'facebook',
  href: 'https://mjml.io/'
};
