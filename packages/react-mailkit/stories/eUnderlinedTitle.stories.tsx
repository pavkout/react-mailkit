import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EUnderlinedTitle } from '../src/browser';

export default {
  title: 'Email Design System/Custom Body components/eUnderlinedTitle',
  component: EUnderlinedTitle,
  argTypes: {
    title: {
      table: {
        category: 'Text'
      }
    },
    textProps: {
      table: {
        category: 'Text Props'
      }
    },
    sectionProps: {
      table: {
        category: 'Section Props'
      }
    },
    columnProps: {
      table: {
        category: 'Column Props'
      }
    },
    dividerProps: {
      table: {
        category: 'Divider Props'
      }
    }
  }
} as ComponentMeta<typeof EUnderlinedTitle>;

const Template: ComponentStory<typeof EUnderlinedTitle> = args => (
  <EUnderlinedTitle {...args} />
);

export const LeftAlign = Template.bind({});

LeftAlign.args = {
  title: 'My Awesome Tilte'
};

export const CenterAlign = Template.bind({});

CenterAlign.args = {
  title: 'My Awesome Tilte',
  textProps: {
    align: 'center'
  }
};

export const RightAlign = Template.bind({});

RightAlign.args = {
  title: 'My Awesome Tilte',
  textProps: {
    align: 'right'
  }
};
