import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ETable, ITableProps } from 'react-mailkit';

export default {
  title: 'Email Design System/Standard Body components/eTable',
  component: ETable,
  argTypes: {
    color: {
      control: 'color',
      table: {
        category: 'Colors'
      }
    },
    role: {
      table: {
        category: 'Accessibility'
      },
      control: { type: 'select' }
    },
    containerBackgroundColor: {
      control: 'color',
      table: {
        category: 'Colors'
      }
    },
    tableLayout: {
      table: {
        category: 'Layout'
      },
      control: { type: 'select' }
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
      }
    },
    lineHeight: {
      table: {
        category: 'Text'
      }
    },
    width: {
      table: {
        category: 'Dimentions'
      }
    },
    align: {
      table: {
        category: 'Aligment'
      },
      control: { type: 'select' }
    },
    cssClass: {
      table: {
        category: 'Extra Class'
      }
    },
    cellpadding: {
      table: {
        category: 'Sizes'
      }
    },
    cellspacing: {
      table: {
        category: 'Sizes'
      }
    },
    border: {
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
    children: {
      table: {
        disable: true
      }
    }
  }
} as Meta;

const Template: Story<ITableProps> = args => (
  <ETable {...args}>
    <tr
      style={{
        borderBottom: '1px solid #ecedee',
        textAlign: 'left',
        padding: '15px 0'
      }}
    >
      <th style={{ padding: '0 15px 0 0' }}>Year</th>
      <th style={{ padding: '0 15px' }}>Language</th>
      <th style={{ padding: '0 0 0 15px' }}>Inspired from</th>
    </tr>
    <tr>
      <td style={{ padding: '0 15px 0 0' }}>1995</td>
      <td style={{ padding: '0 15px' }}>PHP</td>
      <td style={{ padding: '0 0 0 15px' }}>C, Shell Unix</td>
    </tr>
    <tr>
      <td style={{ padding: '0 15px 0 0' }}>1995</td>
      <td style={{ padding: '0 15px' }}>JavaScript</td>
      <td style={{ padding: '0 0 0 15px' }}>Scheme, Self</td>
    </tr>
  </ETable>
);

export const Overview = Template.bind({});

Overview.args = {};
