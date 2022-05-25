import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ESection, EColumn, EText } from '../src/browser';

export default {
  title: 'Email Design System/Standard Body components/eSection',
  component: ESection,
  argTypes: {
    backgroundColor: {
      control: 'color',
      table: {
        category: 'Colors'
      }
    },
    backgroundPosition: {
      table: {
        category: 'Background'
      }
    },
    backgroundPositionX: {
      table: {
        category: 'Background'
      }
    },
    backgroundPositionY: {
      table: {
        category: 'Background'
      }
    },
    backgroundRepeat: {
      table: {
        category: 'Background'
      }
    },
    backgroundSize: {
      table: {
        category: 'Background'
      }
    },
    backgroundUrl: {
      table: {
        category: 'Background'
      }
    },
    direction: {
      table: {
        category: 'Alignment'
      },
      control: { type: 'select' }
    },
    textAlign: {
      table: {
        category: 'Text'
      }
    },
    fullWidth: {
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
} as ComponentMeta<typeof ESection>;

const Template: ComponentStory<typeof ESection> = (args) => (
  <ESection {...args}>
    <EColumn>
      <EText color="#ffffff" fontSize="22px">
        Hello react-mailkit
      </EText>
    </EColumn>
  </ESection>
);

export const Overview = Template.bind({});

Overview.args = {
  fullWidth: 'full-width',
  backgroundColor: '#0075ff'
};
