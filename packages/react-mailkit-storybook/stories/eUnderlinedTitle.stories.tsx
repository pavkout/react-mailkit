import React from 'react';
import { Story, Meta } from '@storybook/react';

import { EUnderlinedTitle, IUnderlinedTitleProps } from 'react-mailkit';

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
} as Meta;

const Template: Story<IUnderlinedTitleProps> = args => (
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
