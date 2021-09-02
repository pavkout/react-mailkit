import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EGroup, EColumn, EImage, EText } from '../src/browser';

export default {
  title: 'Email Design System/Standard Body components/eGroup',
  component: EGroup,
  argTypes: {
    backgroundColor: {
      control: 'color',
      table: {
        category: 'Colors'
      }
    },
    width: {
      table: {
        category: 'Dimensions'
      }
    },
    verticalAlign: {
      table: {
        category: 'Alignment'
      },
      control: { type: 'select' }
    },
    direction: {
      table: {
        category: 'Direction'
      },
      control: { type: 'select' }
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
} as ComponentMeta<typeof EGroup>;

const Template: ComponentStory<typeof EGroup> = args => (
  <EGroup {...args}>
    <EColumn>
      <EImage
        width='137px'
        height='185px'
        padding='0'
        src='https://mjml.io/assets/img/easy-and-quick.png'
      />
      <EText align='center'>
        <h2>Easy and quick</h2>
        <p>
          Write less code, save time and code more efficiently with MJML’s
          semantic syntax.
        </p>
      </EText>
    </EColumn>
    <EColumn>
      <EImage
        width='166px'
        height='185px'
        padding='0'
        src='https://mjml.io/assets/img/responsive.png'
      />
      <EText align='center'>
        <h2>Responsive</h2>
        <p>
          MJML is responsive by design on most-popular email clients, even
          Outlook.
        </p>
      </EText>
    </EColumn>
  </EGroup>
);

export const Overview = Template.bind({});

Overview.args = {};
