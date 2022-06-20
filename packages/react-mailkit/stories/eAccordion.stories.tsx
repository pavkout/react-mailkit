import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  EAccordion,
  EAccordionElement,
  EAccordionText,
  EAccordionTitle,
} from '../src/browser';

export default {
  title: 'Email Design System/Standard Body components/eAccordion',
  component: EAccordion,
  argTypes: {
    containerBackgroundColor: {
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
    border: {
      table: {
        category: 'Sizes',
      },
    },
    fontFamily: {
      table: {
        category: 'Font',
      },
    },
    iconAlign: {
      table: {
        category: 'Icon',
      },
    },
    iconHeight: {
      table: {
        category: 'Icon',
      },
    },
    iconWidth: {
      table: {
        category: 'Icon',
      },
    },
    iconPosition: {
      table: {
        category: 'Icon',
      },
      control: { type: 'select' },
    },
    iconUnwrappedAlt: {
      table: {
        category: 'Icon',
      },
    },
    iconUnwrappedUrl: {
      table: {
        category: 'Icon',
      },
    },
    iconWrappedAlt: {
      table: {
        category: 'Icon',
      },
    },
    iconWrappedUrl: {
      table: {
        category: 'Icon',
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
} as ComponentMeta<typeof EAccordion>;

const Template: ComponentStory<typeof EAccordion> = (args) => (
  <EAccordion {...args}>
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
      <EAccordionText
        fontFamily="Open Sans, Helvetica, Arial, sans-serif"
        backgroundColor="#fafafa"
        padding="15px"
        color="#505050"
        fontSize="14potrt">
        <span style={{ lineHeight: '20px' }}>
          Because emails with a lot of content are most of the time a very bad
          experience on mobile, E-accordion comes handy when you want to deliver
          a lot of information in a concise way.
        </span>
      </EAccordionText>
    </EAccordionElement>
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
        How it works
      </EAccordionTitle>
      <EAccordionText
        fontFamily="Open Sans, Helvetica, Arial, sans-serif"
        backgroundColor="#fafafa"
        padding="15px"
        color="#505050"
        fontSize="14potrt">
        <span style={{ lineHeight: '20px' }}>
          Content is stacked into tabs and users can expand them at will. If
          responsive styles are not supported (mostly on desktop clients), tabs
          are then expanded and your content is readable at once.
        </span>
      </EAccordionText>
    </EAccordionElement>
  </EAccordion>
);

export const Overview = Template.bind({});

Overview.args = {
  border: 'none',
  padding: '1px',
};
