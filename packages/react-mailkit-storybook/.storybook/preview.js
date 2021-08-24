import React from 'react';

import { Email } from '../stories/helpers/email';
import { useEmail } from '@react-mailkit/core';
import { theme } from './theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  docs: {
    theme
  },
  layout: 'centered',
  options: {
    storySort: {
      order: [
        'Overview',
        'Email Design System',
        [
          'Components',
          'Standard Head components',
          'Standard Body components',
          'Custom Body components'
        ],
        'Templates',
        'Playground',
        ['Try It Live', 'Mjml To Fastmail']
      ]
    }
  }
};

export const decorators = [
  Story => {
    const { html } = useEmail(
      <Email>
        <Story />
      </Email>
    );

    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  }
];
