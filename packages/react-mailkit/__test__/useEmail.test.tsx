import React from 'react';

import { EMail } from '../src/eMail';
import { EHead } from '../src/eHead';
import { ETitle } from '../src/eTitle';
import { EBody } from '../src/eBody';
import { ERaw } from '../src/eRaw';

import { useEmail } from '../src/browser';

describe('render()', () => {
  it('should render the HTML', () => {
    const email = (
      <EMail>
        <EHead>
          <ETitle>Title</ETitle>
        </EHead>
        <EBody>
          <ERaw>
            <p>Paragraph</p>
          </ERaw>
        </EBody>
      </EMail>
    );

    const { html } = useEmail(email, { minify: true });
    expect(html).not.toBeUndefined();
    expect(html).toContain('<!doctype html>');
    expect(html).toContain('<title>Title</title>');
    expect(html).toContain('<p>Paragraph</p>');
  });
});
