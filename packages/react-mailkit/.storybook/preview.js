import React from 'react';

import { Email } from '../stories/helpers/email';
import { useEmail } from '../src/browser';
import { theme } from './theme';

export const parameters = {
  docs: {
    theme,
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
          'Custom Body components',
        ],
      ],
    },
  },
};

export const decorators = [
  (Story) => {
    const { html } = useEmail(
      <Email>
        <Story />
      </Email>
    );

    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  },
];
