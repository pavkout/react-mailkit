import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EYoutubeThumbnail } from '../src/browser';

export default {
  title: 'Email Design System/Custom Body components/eYoutubeThumbnail',
  component: EYoutubeThumbnail,
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
    borderRadius: {
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
    }
  }
} as ComponentMeta<typeof EYoutubeThumbnail>;

const Template: ComponentStory<typeof EYoutubeThumbnail> = (args) => (
  <EYoutubeThumbnail {...args} />
);

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

export const MaxresWithRadius = Template.bind({});

MaxresWithRadius.args = {
  id: 'smGTQrwvOc8',
  imageQuality: 'maxres',
  borderRadius: 12
};
