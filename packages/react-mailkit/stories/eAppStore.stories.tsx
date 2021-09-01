import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EAppStore } from '../src/browser';

export default {
  title: 'Email Design System/Custom Body components/eAppStore',
  component: EAppStore,
  argTypes: {
    url: {
      table: {
        category: 'Hyperlink'
      }
    },
    platform: {
      table: {
        category: 'Store'
      },
      control: { type: 'select' }
    },
    target: {
      table: {
        category: 'Hyperlink'
      },
      control: { type: 'select' }
    },
    height: {
      table: {
        category: 'Dimensions'
      }
    },
    width: {
      table: {
        category: 'Dimensions'
      }
    },
    locale: {
      table: {
        category: 'Locale'
      }
    },
    defaultLocale: {
      table: {
        category: 'Locale'
      }
    }
  }
} as ComponentMeta<typeof EAppStore>;

const Template: ComponentStory<typeof EAppStore> = args => (
  <EAppStore {...args} />
);

export const Apple = Template.bind({});

Apple.args = {
  url: 'https://linkmaker.itunes.apple.com/images/badges/en-us/badge_appstore-lrg.svg',
  platform: 'ios'
};

export const Android = Template.bind({});

Android.args = {
  url: 'https://raw.github.com/yjb94/google-play-badge-svg/master/img/en_get.svg?sanitize=true',
  platform: 'android'
};
