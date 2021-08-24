import React from 'react';
import { Story, Meta } from '@storybook/react';

import {
  EAccordion,
  EAccordionElement,
  EAccordionText,
  EAccordionTitle,
  IAccordionTitleProps
} from '@react-mailkit/core';

export default {
  title: 'Email Design System/Standard Body components/eAccordionTitle',
  component: EAccordionTitle,
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
    fontFamily: {
      table: {
        category: 'Font'
      }
    },
    fontSize: {
      table: {
        category: 'Font'
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

const Tempate: Story<IAccordionTitleProps> = args => (
  <EAccordion border='none' padding='1px'>
    <EAccordionElement
      iconWrappedUrl='https://i.imgur.com/Xvw0vjq.png'
      iconUnwrappedUrl='https://i.imgur.com/KKHenWa.png'
      iconHeight='24px'
      iconWidth='24px'
    >
      <EAccordionTitle {...args}>Why use an accordion?</EAccordionTitle>
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
  fontFamily: 'Roboto, Open Sans, Helvetica, Arial, sans-serif',
  backgroundColor: '#fff',
  color: '#031017',
  padding: '15px',
  fontSize: '18px'
};
