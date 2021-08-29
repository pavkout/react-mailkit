import React from 'react';
import { Story, Meta } from '@storybook/react';

import { EImageText, IImageTextProps } from 'react-mailkit';

export default {
  title: 'Email Design System/Custom Body components/eImageText',
  component: EImageText,
  argTypes: {
    text: {
      table: {
        category: 'Text'
      }
    },
    textProps: {
      table: {
        category: 'Text'
      }
    },
    imageSrc: {
      table: {
        category: 'Image'
      }
    },
    imagePosition: {
      table: {
        category: 'Image'
      },
      control: { type: 'select' }
    },
    sectionProps: {
      table: {
        category: 'Section'
      }
    },
    columnProps: {
      table: {
        category: 'Column'
      }
    },
    imageProps: {
      table: {
        category: 'Extra Image Options'
      }
    },
    children: {
      table: {
        category: 'Children'
      }
    }
  }
} as Meta;

const Template: Story<IImageTextProps> = args => <EImageText {...args} />;

export const ImageRight = Template.bind({});

ImageRight.args = {
  imagePosition: 'right',
  imageSrc:
    'https://designspell.files.wordpress.com/2012/01/sciolino-paris-bw.jpg',
  sectionProps: {
    backgroundColor: '#cfe856'
  },
  text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
	Lorem Ipsum has been the industry's standard dummy text ever since the
	1500s, when an unknown printer took a galley of type and scrambled it to
	make a type specimen book.`
};

export const ImageLeft = Template.bind({});

ImageLeft.args = {
  imagePosition: 'left',
  imageSrc:
    'https://designspell.files.wordpress.com/2012/01/sciolino-paris-bw.jpg',
  sectionProps: {
    backgroundColor: '#56abe8'
  },
  textProps: {
    color: '#ffffff',
    fontSize: 16
  },
  imageProps: {
    borderRadius: 50
  },
  text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
	Lorem Ipsum has been the industry's standard dummy text ever since the
	1500s, when an unknown printer took a galley of type and scrambled it to
	make a type specimen book.`
};
