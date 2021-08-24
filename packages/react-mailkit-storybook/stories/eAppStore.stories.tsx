import React from 'react';
import { Story, Meta } from '@storybook/react';

import { EAppStore, IAppStoreProps } from '@react-mailkit/core';

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
        category: 'Dimentions'
      }
    },
    width: {
      table: {
        category: 'Dimentions'
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
} as Meta;

const Template: Story<IAppStoreProps> = args => <EAppStore {...args} />;

export const Apple = Template.bind({});

Apple.args = {
  url:
    'https://linkmaker.itunes.apple.com/images/badges/en-us/badge_appstore-lrg.svg',
  platform: 'ios'
};

export const Android = Template.bind({});

Android.args = {
  url:
    'https://raw.github.com/yjb94/google-play-badge-svg/master/img/en_get.svg?sanitize=true',
  platform: 'android'
};
