import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { ESection } from '../src/eSection';
import { EColumn } from '../src/eColumn';
import { EText } from '../src/eText';
import { ESpacer } from '../src/eSpacer';

const Spacer = (
  <ESection>
    <EColumn>
      <EText>A first line of text</EText>
      <ESpacer height={100} containerBackgroundColor="#a21717" />
      <EText>A second line of text</EText>
    </EColumn>
  </ESection>
);

describe('should be correct output', () => {
  it('should not be undefined', () => {
    const { container } = render(Spacer);
    expect(container).not.toBeUndefined();
  });

  it('should render ESpacer', () => {
    const { container } = render(Spacer);
    expect(container.querySelector('mj-spacer')).toBeInTheDocument();
  });

  it('should have height attribute', () => {
    const { container } = render(Spacer);
    expect(
      container.querySelector('mj-spacer')!.hasAttribute('height')
    ).toBeTruthy();
  });

  it('should have 100px as height attribute', () => {
    const { container } = render(Spacer);
    expect(
      container.querySelector('mj-spacer')!.getAttribute('height')
    ).toStrictEqual('100px');
  });

  it('renders correctly', () => {
    expect(renderer.create(Spacer).toJSON()).toMatchSnapshot();
  });
});
