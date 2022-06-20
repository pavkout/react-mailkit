import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { EQrCode } from '../src/eQrCode';

describe('should be correct output', () => {
  it('should not be undefined', () => {
    const { container } = render(<EQrCode value="Awesome QR" />);
    expect(container).not.toBeUndefined();
  });

  it('should render EImage', () => {
    const { container } = render(<EQrCode value="Awesome QR" />);
    expect(container.querySelector('mj-image')).toBeInTheDocument();
  });

  it('should have width attribute', () => {
    const { container } = render(<EQrCode value="Awesome QR" />);
    expect(
      container.querySelector('mj-image')!.hasAttribute('width')
    ).toBeTruthy();
  });

  it('should have 200px as width attribute', () => {
    const { container } = render(<EQrCode value="Awesome QR" />);
    expect(
      container.querySelector('mj-image')!.getAttribute('width')
    ).toStrictEqual('200px');
  });

  it('should have src attribute', () => {
    const { container } = render(<EQrCode value="Awesome QR" />);
    expect(
      container.querySelector('mj-image')!.hasAttribute('src')
    ).toBeTruthy();
  });

  it('should have correct src attribute', () => {
    const { container } = render(<EQrCode value="Awesome QR" />);
    expect(
      container.querySelector('mj-image')!.getAttribute('src')
    ).toStrictEqual(
      'https://quickchart.io/qr?text=Awesome%20QR&size=200&dark=000000&light=%23ffffff&ecLevel=M&margin=4'
    );
  });

  it('renders correctly', () => {
    expect(
      renderer.create(<EQrCode value="Awesome QR" />).toJSON()
    ).toMatchSnapshot();
  });
});
