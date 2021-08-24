import React from 'react';
import { Story, Meta } from '@storybook/react';

import {
  EAccordion,
  EAccordionElement,
  IAccordionElementProps,
  EAccordionText,
  EAccordionTitle
} from '@react-mailkit/core';

export default {
  title: 'Email Design System/Standard Body components/eAccordionElement',
  component: EAccordionElement,
  argTypes: {
    backgroundColor: {
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
    border: {
      table: {
        category: 'Sizes'
      }
    },
    fontFamily: {
      table: {
        category: 'Font'
      }
    },
    iconAlign: {
      table: {
        category: 'Icon'
      }
    },
    iconHeight: {
      table: {
        category: 'Icon'
      }
    },
    iconWidth: {
      table: {
        category: 'Icon'
      }
    },
    iconPosition: {
      table: {
        category: 'Icon'
      },
      control: { type: 'select' }
    },
    iconUnwrappedAlt: {
      table: {
        category: 'Icon'
      }
    },
    iconUnwrappedUrl: {
      table: {
        category: 'Icon'
      }
    },
    iconWrappedAlt: {
      table: {
        category: 'Icon'
      }
    },
    iconWrappedUrl: {
      table: {
        category: 'Icon'
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
} as Meta;

const Tempate: Story<IAccordionElementProps> = args => (
  <EAccordion border='none' padding='1px'>
    <EAccordionElement {...args}>
      <EAccordionTitle
        fontFamily='Roboto, Open Sans, Helvetica, Arial, sans-serif'
        backgroundColor='#fff'
        color='#031017'
        padding='15px'
        fontSize='18px'
      >
        Why use an accordion?
      </EAccordionTitle>
      <EAccordionText
        fontFamily='Open Sans, Helvetica, Arial, sans-serif'
        backgroundColor='#fafafa'
        padding='15px'
        color='#505050'
        fontSize='14potrt'
      >
        <span style={{ lineHeight: '20px' }}>
          Because emails with a lot of content are most of the time a very bad
          experience on mobile, E-accordion comes handy when you want to deliver
          a lot of information in a concise way.
        </span>
      </EAccordionText>
    </EAccordionElement>
  </EAccordion>
);

export const Overview = Tempate.bind({});

Overview.args = {
  iconWrappedUrl: 'https://i.imgur.com/Xvw0vjq.png',
  iconUnwrappedUrl: 'https://i.imgur.com/KKHenWa.png',
  iconHeight: '24px',
  iconWidth: '24px'
};
