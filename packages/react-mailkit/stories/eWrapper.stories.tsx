import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  EWrapper,
  ESection,
  EColumn,
  EImage,
  EText,
  EDivider
} from '../src/browser';

export default {
  title: 'Email Design System/Standard Body components/eWrapper',
  component: EWrapper,
  argTypes: {
    backgroundColor: {
      control: 'color',
      table: {
        category: 'Colors'
      }
    },
    fullWidth: {
      table: {
        category: 'Dimensions'
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
    textAlign: {
      table: {
        category: 'Text'
      }
    },
    cssClass: {
      table: {
        category: 'Extra Class'
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
    children: {
      table: {
        disable: true
      }
    }
  }
} as ComponentMeta<typeof EWrapper>;

const Template: ComponentStory<typeof EWrapper> = (args) => (
  <EWrapper {...args}>
    <ESection
      borderTop="1px solid #aaaaaa"
      borderLeft="1px solid #aaaaaa"
      borderRight="1px solid #aaaaaa"
      padding="20px">
      <EColumn>
        <EImage padding="0" src="https://place-hold.it/350x150" />
      </EColumn>
    </ESection>
    <ESection
      borderLeft="1px solid #aaaaaa"
      borderRight="1px solid #aaaaaa"
      padding="20px"
      border-bottom="1px solid #aaaaaa">
      <EColumn border="1px solid #dddddd">
        <EText padding="20px"> First line of text </EText>
        <EDivider
          borderWidth="1px"
          borderStyle="dashed"
          borderColor="lightgrey"
          padding="0 20px"
        />
        <EText padding="20px"> Second line of text </EText>
      </EColumn>
    </ESection>
  </EWrapper>
);

export const Overview = Template.bind({});

Overview.args = {
  border: '1px solid #000000',
  padding: '50px 30px'
};
