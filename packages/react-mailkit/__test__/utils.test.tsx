import React from 'react';
import {
  boolToString,
  convertToMjml,
  kebabCase,
  toColor,
  toPx
} from '../src/utils';

import { EMail } from '../src/eMail';
import { EBody } from '../src/eBody';
import { ESection } from '../src/eSection';
import { EColumn } from '../src/eColumn';
import { EText } from '../src/eText';

const eMail = (
  <EMail>
    <EBody>
      <ESection>
        <EColumn>
          <EText>Awesome Email</EText>
        </EColumn>
      </ESection>
    </EBody>
  </EMail>
);

const mjmlEmail =
  '<mjml><mj-body><mj-section><mj-column><mj-text>Awesome Email</mj-text></mj-column></mj-section></mj-body></mjml>';

describe('should be correct output from utils', () => {
  it('should convertToMjml return correct mjml markup', () => {
    expect(convertToMjml(eMail)).toStrictEqual(mjmlEmail);
  });

  it('should kebabCase of borderRadius be border-radius', () => {
    expect(kebabCase('borderRadius')).toStrictEqual('border-radius');
  });

  it('should kebabCase of color be color', () => {
    expect(kebabCase('color')).toStrictEqual('color');
  });

  it('should toPx of 10 be 10px', () => {
    expect(toPx('width', 10)).toStrictEqual('10px');
  });

  it('should toPx of 25px be 25px', () => {
    expect(toPx('width', '25px')).toStrictEqual('25px');
  });

  it('should boolToString of full-width be full-width', () => {
    expect(boolToString('full-width', 'full-width')).toStrictEqual(
      'full-width'
    );
  });

  it('should boolToString of inline be inline', () => {
    expect(boolToString('inline', 'inline')).toStrictEqual('inline');
  });

  it('should toColor of red be red', () => {
    expect(toColor('color', 'red')).toStrictEqual('red');
  });

  it('should toColor of #ffffff be #ffffff', () => {
    expect(toColor('color', '#ffffff')).toStrictEqual('#ffffff');
  });

  it('should toColor of #ffffff80 be rgba(255, 255, 255, 0.5)', () => {
    expect(toColor('color', '#ffffff80')).toStrictEqual(
      'rgba(255, 255, 255, 0.5)'
    );
  });
});
