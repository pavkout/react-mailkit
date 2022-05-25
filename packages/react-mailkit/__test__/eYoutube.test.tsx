import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { EYoutube } from '../src/eYoutube';

const Youtube = <EYoutube id="smGTQrwvOc8" imageQuality="maxres" />;

describe('should be correct output', () => {
  it('should not be undefined', () => {
    const { container } = render(Youtube);
    expect(container).not.toBeUndefined();
  });

  it('should render EWrapper', () => {
    const { container } = render(Youtube);
    expect(container.querySelector('mj-wrapper')).toBeInTheDocument();
  });

  it('should have two children', () => {
    const { container } = render(Youtube);
    expect(
      container.querySelector('mj-wrapper')?.childNodes.length
    ).toStrictEqual(2);
  });

  it('should have ESection as children', () => {
    const { container } = render(Youtube);
    container.querySelector('mj-wrapper')?.childNodes.forEach((child) => {
      expect(child.nodeName).toEqual('MJ-SECTION');
    });
  });

  it('should the up ESection have border-radius attribute', () => {
    const { container } = render(Youtube);
    expect(
      container.querySelector('mj-section')?.hasAttribute('border-radius')
    ).toBeFalsy();
  });

  it('should the EWrapper have background-url attribute', () => {
    const { container } = render(Youtube);
    expect(
      container.querySelector('mj-wrapper')?.hasAttribute('background-url')
    ).toBeTruthy();
  });

  it('should the EWrapper have correct background-url attribute', () => {
    const { container } = render(Youtube);
    expect(
      container.querySelector('mj-wrapper')?.getAttribute('background-url')
    ).toStrictEqual(
      'https://www.marieclairemusic.com/wp-content/themes/music/images/player.png'
    );
  });

  it('should the EWrapper have background-position attribute', () => {
    const { container } = render(Youtube);
    expect(
      container.querySelector('mj-wrapper')?.hasAttribute('background-position')
    ).toBeTruthy();
  });

  it('should the EWrapper have correct background-position attribute', () => {
    const { container } = render(Youtube);
    expect(
      container.querySelector('mj-wrapper')?.getAttribute('background-position')
    ).toStrictEqual('left bottom');
  });

  it('should the EWrapper have background-repeat attribute', () => {
    const { container } = render(Youtube);
    expect(
      container.querySelector('mj-wrapper')?.hasAttribute('background-repeat')
    ).toBeTruthy();
  });

  it('should the EWrapper have correct background-repeat attribute', () => {
    const { container } = render(Youtube);
    expect(
      container.querySelector('mj-wrapper')?.getAttribute('background-repeat')
    ).toStrictEqual('no-repeat');
  });

  it('should the EWrapper have background-size attribute', () => {
    const { container } = render(Youtube);
    expect(
      container.querySelector('mj-wrapper')?.hasAttribute('background-size')
    ).toBeTruthy();
  });

  it('should the EWrapper have correct background-size attribute', () => {
    const { container } = render(Youtube);
    expect(
      container.querySelector('mj-wrapper')?.getAttribute('background-size')
    ).toStrictEqual('contain');
  });

  it('should have padding attribute', () => {
    const { container } = render(Youtube);
    expect(
      container.querySelector('mj-wrapper')?.hasAttribute('padding')
    ).toBeTruthy();
  });

  it('should have 15px 0 as padding attribute', () => {
    const { container } = render(Youtube);
    expect(
      container.querySelector('mj-wrapper')?.getAttribute('padding')
    ).toStrictEqual('15px 0');
  });

  it('renders correctly', () => {
    expect(renderer.create(Youtube).toJSON()).toMatchSnapshot();
  });
});
