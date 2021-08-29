import React from 'react';
import { Story, Meta } from '@storybook/react';

import { EQrCode, IQrCodeProps } from 'react-mailkit';

export default {
  title: 'Email Design System/Custom Body components/eQrCode',
  component: EQrCode,
  argTypes: {
    value: {
      table: {
        category: 'Value'
      }
    },
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
    containerBackgroundColor: {
      control: 'color',
      table: {
        category: 'Colors'
      }
    },
    ecLevel: {
      table: {
        category: 'Security'
      },
      control: { type: 'select' }
    },
    host: {
      table: {
        category: 'API'
      }
    },
    protocol: {
      table: {
        category: 'API'
      },
      control: { type: 'select' }
    },
    title: {
      table: {
        category: 'Accessibility'
      }
    },
    name: {
      table: {
        category: 'Accessibility'
      }
    },
    height: {
      table: {
        category: 'Dimentions'
      }
    },
    width: {
      table: {
        category: 'Dimentions'
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
    borderRadius: {
      table: {
        category: 'Sizes'
      }
    },
    target: {
      table: {
        category: 'Hyperlink'
      },
      control: { type: 'select' }
    },
    href: {
      table: {
        category: 'Hyperlink'
      }
    },
    rel: {
      table: {
        category: 'Hyperlink'
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
    src: {
      table: {
        disable: true
      }
    },
    alt: {
      table: {
        disable: true
      }
    },
    fluidOnMobile: {
      table: {
        disable: true
      }
    },
    sizes: {
      table: {
        disable: true
      }
    },
    srcset: {
      table: {
        disable: true
      }
    },
    usemap: {
      table: {
        disable: true
      }
    }
  }
} as Meta;

const Template: Story<IQrCodeProps> = args => <EQrCode {...args} />;

export const Overview = Template.bind({});

Overview.args = {
  value: 'This is awesome QR Code'
};

export const Color = Template.bind({});

Color.args = {
  value: 'This is awesome QR Code',
  color: '#567fe8'
};

export const BackgroundColor = Template.bind({});

BackgroundColor.args = {
  value: 'This is awesome QR Code',
  color: '#567fe8',
  backgroundColor: '#cfe856'
};
