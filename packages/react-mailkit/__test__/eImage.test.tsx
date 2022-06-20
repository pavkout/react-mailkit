import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { EImage } from '../src/eImage';

const Image = (
  <EImage
    href="https://www.google.com"
    target="_blank"
    width={300}
    src="https://www.online-image-editor.com//styles/2014/images/example_image.png"
  />
);

describe('should be correct output', () => {
  it('should not be undefined', () => {
    const { container } = render(Image);
    expect(container).not.toBeUndefined();
  });

  it('should render EImage', () => {
    const { container } = render(Image);
    expect(container.querySelector('mj-image')).toBeInTheDocument();
  });

  it('should have href attribute', () => {
    const { container } = render(Image);
    expect(
      container.querySelector('mj-image')!.hasAttribute('href')
    ).toBeTruthy();
  });

  it('should have https://www.google.com as href attribute', () => {
    const { container } = render(Image);
    expect(
      container.querySelector('mj-image')!.getAttribute('href')
    ).toStrictEqual('https://www.google.com');
  });

  it('should have width attribute', () => {
    const { container } = render(Image);
    expect(
      container.querySelector('mj-image')!.hasAttribute('width')
    ).toBeTruthy();
  });

  it('should have 300px as width attribute', () => {
    const { container } = render(Image);
    expect(
      container.querySelector('mj-image')!.getAttribute('width')
    ).toStrictEqual('300px');
  });

  it('renders correctly', () => {
    expect(renderer.create(Image).toJSON()).toMatchSnapshot();
  });
});
