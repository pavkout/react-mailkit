import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ESocialPost, ISocialPostProps } from 'react-mailkit';

export default {
  title: 'Email Design System/Custom Body components/eSocialPost',
  component: ESocialPost,
  argTypes: {
    name: {
      table: {
        category: 'Social Media'
      }
    },
    href: {
      table: {
        category: 'Social Media'
      }
    },
    imageSrc: {
      table: {
        category: 'Image'
      }
    },
    title: {
      table: {
        category: 'Title'
      }
    },
    text: {
      table: {
        category: 'Content'
      }
    }
  }
} as Meta;

const Template: Story<ISocialPostProps> = args => <ESocialPost {...args} />;

export const Facebook = Template.bind({});

Facebook.args = {
  name: 'facebook',
  imageSrc:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPPdpXj3y0aAwHAHICOaU-fwqbahRFDWxL7Q&usqp=CAU',
  title: 'My Social Media Post Title',
  text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
};

export const Twitter = Template.bind({});

Twitter.args = {
  name: 'twitter',
  imageSrc:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhNbHqUc1H01VYqnX1KMQrkmRc5JB2Ici_sQ&usqp=CAU',
  title: 'My Social Media Post Title',
  text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
};

export const Instagram = Template.bind({});

Instagram.args = {
  name: 'instagram',
  imageSrc:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQw5m9gnFPjwYbu9u4-EXyg91_h6MXUQW2Eg&usqp=CAU',
  title: 'My Social Media Post Title',
  text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
};

export const Google = Template.bind({});

Google.args = {
  name: 'google',
  imageSrc:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmJ5SdjJUe7OeW1lyQGSP5MJVMbdkeWux7Ow&usqp=CAU',
  title: 'My Social Media Post Title',
  text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
};
