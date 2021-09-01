import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EButton } from '../src/browser';

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
        category: 'Dimensions'
      }
    },
    width: {
      table: {
        category: 'Dimensions'
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
        category: 'Alignment'
      }
    },
    align: {
      table: {
        category: 'Alignment'
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
} as ComponentMeta<typeof EButton>;

const Template: ComponentStory<typeof EButton> = args => (
  <EButton {...args}>Button</EButton>
);

export const BackgroundColor = Template.bind({});

BackgroundColor.args = {
  backgroundColor: '#86c232'
};

export const ContainerColor = Template.bind({});

ContainerColor.args = {
  color: '#86c232',
  backgroundColor: '#fff',
  containerBackgroundColor: '#86c232'
};

export const Border = Template.bind({});

Border.args = {
  color: '#86c232',
  backgroundColor: '#fff',
  border: '1px solid #86c232',
  borderRadius: 25
};

export const BorderRadius = Template.bind({});

BorderRadius.args = {
  backgroundColor: '#86c232',
  BorderRadius: 10
};

export const Size = Template.bind({});

Size.args = {
  width: 300,
  backgroundColor: '#86c232'
};

export const TextAlign = Template.bind({});

TextAlign.args = {
  width: 200,
  backgroundColor: '#86c232',
  textAlign: 'right'
};
