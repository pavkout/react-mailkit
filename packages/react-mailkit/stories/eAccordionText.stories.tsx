import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  EAccordion,
  EAccordionElement,
  EAccordionText,
  EAccordionTitle,
} from '../src/browser';

export default {
  title: 'Email Design System/Standard Body components/eAccordionText',
  component: EAccordionText,
  argTypes: {
    backgroundColor: {
      control: 'color',
      table: {
        category: 'Colors',
      },
    },
    color: {
      control: 'color',
      table: {
        category: 'Colors',
      },
    },
    padding: {
      table: {
        category: 'Sizes',
      },
    },
    paddingTop: {
      table: {
        category: 'Sizes',
      },
    },
    paddingBottom: {
      table: {
        category: 'Sizes',
      },
    },
    paddingRight: {
      table: {
        category: 'Sizes',
      },
    },
    paddingLeft: {
      table: {
        category: 'Sizes',
      },
    },
    letterSpacing: {
      table: {
        category: 'Text',
      },
    },
    lineHeight: {
      table: {
        category: 'Text',
      },
    },
    fontSize: {
      table: {
        category: 'Font',
      },
    },
    fontFamily: {
      table: {
        category: 'Font',
      },
    },
    fontWeight: {
      table: {
        category: 'Font',
      },
    },
    cssClass: {
      table: {
        category: 'Extra Class',
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof EAccordionText>;

const Template: ComponentStory<typeof EAccordionText> = (args) => (
  <EAccordion border="none" padding="1px">
    <EAccordionElement
      iconWrappedUrl="https://i.imgur.com/Xvw0vjq.png"
      iconUnwrappedUrl="https://i.imgur.com/KKHenWa.png"
      iconHeight="24px"
      iconWidth="24px">
      <EAccordionTitle
        fontFamily="Roboto, Open Sans, Helvetica, Arial, sans-serif"
        backgroundColor="#fff"
        color="#031017"
        padding="15px"
        fontSize="18px">
        Why use an accordion?
      </EAccordionTitle>
      <EAccordionText {...args}>
        <span style={{ lineHeight: '20px' }}>
          Because emails with a lot of content are most of the time a very bad
          experience on mobile, E-accordion comes handy when you want to deliver
          a lot of information in a concise way.
        </span>
      </EAccordionText>
    </EAccordionElement>
  </EAccordion>
);

export const Overview = Template.bind({});

Overview.args = {
  fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
  backgroundColor: '#fafafa',
  padding: '15px',
  color: '#505050',
  fontSize: '14px',
};
