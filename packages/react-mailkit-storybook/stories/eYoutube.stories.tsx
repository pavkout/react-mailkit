import React from 'react';
import { Story, Meta } from '@storybook/react';

import { EYoutube, IYoutubeProps } from 'react-mailkit';

export default {
  title: 'Email Design System/Custom Body components/eYoutube',
  component: EYoutube,
  argTypes: {
    id: {
      table: {
        category: 'Video'
      }
    },
    imageQuality: {
      table: {
        category: 'Video'
      }
    },
    videoTitle: {
      table: {
        category: 'Video'
      }
    },
    videoViews: {
      table: {
        category: 'Video'
      }
    },
    videoDatePeriod: {
      table: {
        category: 'Video'
      }
    },
    accountName: {
      table: {
        category: 'Account'
      }
    },
    accountThumbnail: {
      table: {
        category: 'Account'
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
    }
  }
} as Meta;

const Template: Story<IYoutubeProps> = args => <EYoutube {...args} />;

export const Default = Template.bind({});

Default.args = {
  id: 'smGTQrwvOc8'
};

export const Medium = Template.bind({});

Medium.args = {
  id: 'smGTQrwvOc8',
  imageQuality: 'medium'
};

export const High = Template.bind({});

High.args = {
  id: 'smGTQrwvOc8',
  imageQuality: 'high'
};

export const Standard = Template.bind({});

Standard.args = {
  id: 'smGTQrwvOc8',
  imageQuality: 'standard'
};

export const Maxres = Template.bind({});

Maxres.args = {
  id: 'smGTQrwvOc8',
  imageQuality: 'maxres'
};
