import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { EFont } from '../src/eFont';

const Font = (
  <EFont
    name="Raleway"
    href="https://fonts.googleapis.com/css?family=Raleway"
  />
);

describe('should be correct output', () => {
  it('should not be undefined', () => {
    const { container } = render(Font);
    expect(container).not.toBeUndefined();
  });

  it('should render EFont', () => {
    const { container } = render(Font);
    expect(container.querySelector('mj-font')).toBeInTheDocument();
  });

  it('should have name attribute', () => {
    const { container } = render(Font);
    expect(
      container.querySelector('mj-font')?.hasAttribute('name')
    ).toBeTruthy();
  });

  it('should have Raleway as name attribute', () => {
    const { container } = render(Font);
    expect(
      container.querySelector('mj-font')?.getAttribute('name')
    ).toStrictEqual('Raleway');
  });

  it('should have href attribute', () => {
    const { container } = render(Font);
    expect(
      container.querySelector('mj-font')?.hasAttribute('href')
    ).toBeTruthy();
  });

  it('should have correct href attribute', () => {
    const { container } = render(Font);
    expect(
      container.querySelector('mj-font')?.getAttribute('href')
    ).toStrictEqual('https://fonts.googleapis.com/css?family=Raleway');
  });

  it('renders correctly', () => {
    expect(renderer.create(Font).toJSON()).toMatchSnapshot();
  });
});
