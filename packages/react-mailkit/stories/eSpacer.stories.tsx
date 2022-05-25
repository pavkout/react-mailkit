import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ESection, EColumn, EText, ESpacer } from '../src/browser';

export default {
  title: 'Email Design System/Standard Body components/eSpacer',
  component: ESpacer,
  argTypes: {
    containerBackgroundColor: {
      control: 'color',
      table: {
        category: 'Colors'
      }
    },
    height: {
      table: {
        category: 'Dimensions'
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
    cssClass: {
      table: {
        category: 'Extra Class'
      }
    }
  }
} as ComponentMeta<typeof ESpacer>;

const Template: ComponentStory<typeof ESpacer> = (args) => (
  <ESection>
    <EColumn>
      <EText>A first line of text</EText>
      <ESpacer {...args} />
      <EText>A second line of text</EText>
    </EColumn>
  </ESection>
);

export const Overview = Template.bind({});

Overview.args = {
  height: '50px'
};

export const WithColor = Template.bind({});

WithColor.args = {
  height: '100px',
  containerBackgroundColor: '#a21717'
};
