import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { EHero } from '../src/eHero';
import { EText } from '../src/eText';
import { EButton } from '../src/eButton';

const Hero = (
  <EHero
    mode='fixed-height'
    height={469}
    backgroundWidth={600}
    backgroundHeight={469}
    backgroundUrl='https://cloud.githubusercontent.com/assets/1830348/15354890/1442159a-1cf0-11e6-92b1-b861dadf1750.jpg'
    backgroundColor='#2a3448'
    padding='100px 0px'
  >
    <EText
      padding='20px'
      color='#ffffff'
      fontFamily='Helvetica'
      align='center'
      fontSize={45}
      lineHeight={45}
      fontWeight='bold'
    >
      GO TO SPACE
    </EText>
    <EButton href='https://react-mailkit.io/' align='center'>
      ORDER YOUR TICKET NOW
    </EButton>
  </EHero>
);

describe('should be correct output', () => {
  it('should not be undefined', () => {
    const { container } = render(Hero);
    expect(container).not.toBeUndefined();
  });

  it('should render EHead', () => {
    const { container } = render(Hero);
    expect(container.querySelector('mj-hero')).toBeInTheDocument();
  });

  it('should have two children', () => {
    const { container } = render(Hero);
    expect(container.querySelector('mj-hero')?.childNodes.length).toStrictEqual(
      2
    );
  });

  it('should have as first child an EText', () => {
    const { container } = render(Hero);
    expect(
      container.querySelector('mj-hero')?.childNodes[0].nodeName
    ).toStrictEqual('MJ-TEXT');
  });

  it('should have as second child an EButton', () => {
    const { container } = render(Hero);
    expect(
      container.querySelector('mj-hero')?.childNodes[1].nodeName
    ).toStrictEqual('MJ-BUTTON');
  });

  it('should have mode attribute', () => {
    const { container } = render(Hero);
    expect(
      container.querySelector('mj-hero')?.hasAttribute('mode')
    ).toBeTruthy();
  });

  it('should have fixed-height as mode attribute', () => {
    const { container } = render(Hero);
    expect(
      container.querySelector('mj-hero')?.getAttribute('mode')
    ).toStrictEqual('fixed-height');
  });

  it('should have height attribute', () => {
    const { container } = render(Hero);
    expect(
      container.querySelector('mj-hero')?.hasAttribute('height')
    ).toBeTruthy();
  });

  it('should have correct height attribute', () => {
    const { container } = render(Hero);
    expect(
      container.querySelector('mj-hero')?.getAttribute('height')
    ).toStrictEqual('469px');
  });

  it('should have background-url attribute', () => {
    const { container } = render(Hero);
    expect(
      container.querySelector('mj-hero')?.hasAttribute('background-url')
    ).toBeTruthy();
  });

  it('should have correct backgroundUrl attribute', () => {
    const { container } = render(Hero);
    expect(
      container.querySelector('mj-hero')?.getAttribute('background-url')
    ).toStrictEqual(
      'https://cloud.githubusercontent.com/assets/1830348/15354890/1442159a-1cf0-11e6-92b1-b861dadf1750.jpg'
    );
  });

  it('renders correctly', () => {
    expect(renderer.create(Hero).toJSON()).toMatchSnapshot();
  });
});
