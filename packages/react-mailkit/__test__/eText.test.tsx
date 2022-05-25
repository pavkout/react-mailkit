import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { EText } from '../src/eText';

const Text = (
  <EText align="center" fontSize={20}>
    I'm awesome email
  </EText>
);

describe('should be correct output', () => {
  it('should not be undefined', () => {
    const { container } = render(Text);
    expect(container).not.toBeUndefined();
  });

  it('should render EText', () => {
    const { container } = render(Text);
    expect(container.querySelector('mj-text')).toBeInTheDocument();
  });

  it('should have font-size attribute', () => {
    const { container } = render(Text);
    expect(
      container.querySelector('mj-text')?.hasAttribute('font-size')
    ).toBeTruthy();
  });

  it('should have 20px as font-size attribute', () => {
    const { container } = render(Text);
    expect(
      container.querySelector('mj-text')?.getAttribute('font-size')
    ).toStrictEqual('20px');
  });

  it('should have align attribute', () => {
    const { container } = render(Text);
    expect(
      container.querySelector('mj-text')?.hasAttribute('align')
    ).toBeTruthy();
  });

  it('should have center as align attribute', () => {
    const { container } = render(Text);
    expect(
      container.querySelector('mj-text')?.getAttribute('align')
    ).toStrictEqual('center');
  });

  it('should have correct content', () => {
    const { container } = render(Text);
    expect(container.querySelector('mj-text')).toHaveTextContent(
      `I'm awesome email`
    );
  });

  it('renders correctly', () => {
    expect(renderer.create(Text).toJSON()).toMatchSnapshot();
  });
});
