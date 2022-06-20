import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { EButton } from '../src/eButton';

const Button = (
  <EButton fontFamily="Helvetica" backgroundColor="#f45e43" color="white">
    Don't click me!
  </EButton>
);

describe('should be correct output', () => {
  it('should not be undefined', () => {
    const { container } = render(Button);
    expect(container).not.toBeUndefined();
  });

  it('should render mj-breakpoint', () => {
    const { container } = render(Button);
    expect(container.querySelector('mj-button')).toBeInTheDocument();
  });

  it('should have font-family attribute', () => {
    const { container } = render(Button);
    expect(
      container.querySelector('mj-button')!.hasAttribute('font-family')
    ).toBeTruthy();
  });

  it('should have background-color attribute', () => {
    const { container } = render(Button);
    expect(
      container.querySelector('mj-button')!.hasAttribute('background-color')
    ).toBeTruthy();
  });

  it('should have color attribute', () => {
    const { container } = render(Button);
    expect(
      container.querySelector('mj-button')!.hasAttribute('color')
    ).toBeTruthy();
  });

  it('should have Helvetica as font-family attribute', () => {
    const { container } = render(Button);
    expect(
      container.querySelector('mj-button')!.getAttribute('font-family')
    ).toStrictEqual('Helvetica');
  });

  it('should have #f45e43 as background-color attribute', () => {
    const { container } = render(Button);
    expect(
      container.querySelector('mj-button')!.getAttribute('background-color')
    ).toStrictEqual('#f45e43');
  });

  it('should have white as color attribute', () => {
    const { container } = render(Button);
    expect(
      container.querySelector('mj-button')!.getAttribute('color')
    ).toStrictEqual('white');
  });

  it('should have correct content', () => {
    const { container } = render(Button);
    expect(container.querySelector('mj-button')!.textContent).toStrictEqual(
      "Don't click me!"
    );
  });

  it('renders correctly', () => {
    expect(renderer.create(Button).toJSON()).toMatchSnapshot();
  });
});
