import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { ESocial } from '../src/eSocial';
import { ESocialElement } from '../src/eSocialElement';

const Social = (
  <ESocial fontSize={15} iconSize={30} mode="horizontal">
    <ESocialElement name="facebook" href="https://mjml.io/">
      Facebook
    </ESocialElement>
    <ESocialElement name="google" href="https://mjml.io/">
      Google
    </ESocialElement>
    <ESocialElement name="twitter" href="https://mjml.io/">
      Twitter
    </ESocialElement>
  </ESocial>
);

describe('should be correct output', () => {
  it('should not be undefined', () => {
    const { container } = render(Social);
    expect(container).not.toBeUndefined();
  });

  it('should render ESocial', () => {
    const { container } = render(Social);
    expect(container.querySelector('mj-social')).toBeInTheDocument();
  });

  it('should have three children', () => {
    const { container } = render(Social);
    expect(
      container.querySelector('mj-social')!.childNodes.length
    ).toStrictEqual(3);
  });

  it('should have ESocialElement as children', () => {
    const { container } = render(Social);
    container.querySelector('mj-social')!.childNodes.forEach((child) => {
      expect(child.nodeName).toEqual('MJ-SOCIAL-ELEMENT');
    });
  });

  it('should have font-size attribute', () => {
    const { container } = render(Social);
    expect(
      container.querySelector('mj-social')!.hasAttribute('font-size')
    ).toBeTruthy();
  });

  it('should have 15px as font-size attribute', () => {
    const { container } = render(Social);
    expect(
      container.querySelector('mj-social')!.getAttribute('font-size')
    ).toStrictEqual('15px');
  });

  it('should first ESocialElement have name attribute', () => {
    const { container } = render(Social);
    expect(container.querySelector('mj-social')!.childNodes[0]).toHaveAttribute(
      'name'
    );
  });

  it('renders correctly', () => {
    expect(renderer.create(Social).toJSON()).toMatchSnapshot();
  });
});
