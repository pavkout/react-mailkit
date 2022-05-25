import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { EStyle } from '../src/eStyle';

const testStyle = `.blue-text div { color: blue !important; }`;

const Style = <EStyle inline="inline">{testStyle}</EStyle>;

describe('should be correct output', () => {
  it('should not be undefined', () => {
    const { container } = render(Style);
    expect(container).not.toBeUndefined();
  });

  it('should render EStyle', () => {
    const { container } = render(Style);
    expect(container.querySelector('mj-style')).toBeInTheDocument();
  });

  it('should have inline attribute', () => {
    const { container } = render(Style);
    expect(
      container.querySelector('mj-style')?.hasAttribute('inline')
    ).toBeTruthy();
  });

  it('should have inline as inline attribute', () => {
    const { container } = render(Style);
    expect(
      container.querySelector('mj-style')?.getAttribute('inline')
    ).toStrictEqual('inline');
  });

  it('should have correct content', () => {
    const { container } = render(Style);
    expect(container.querySelector('mj-style')).toHaveTextContent(testStyle);
  });

  it('renders correctly', () => {
    expect(renderer.create(Style).toJSON()).toMatchSnapshot();
  });
});
