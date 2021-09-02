import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { EMap } from '../src/eMap';

describe('should be correct output', () => {
  it('should not be undefined', () => {
    const { container } = render(<EMap />);
    expect(container).not.toBeUndefined();
  });

  it('should render EImage', () => {
    const { container } = render(<EMap />);
    expect(container.querySelector('mj-image')).toBeInTheDocument();
  });

  it('should have height attribute', () => {
    const { container } = render(<EMap />);
    expect(
      container.querySelector('mj-image')?.hasAttribute('height')
    ).toBeTruthy();
  });

  it('should have 300px as height attribute', () => {
    const { container } = render(<EMap />);
    expect(
      container.querySelector('mj-image')?.getAttribute('height')
    ).toStrictEqual('300px');
  });

  it('should have src attribute', () => {
    const { container } = render(<EMap />);
    expect(
      container.querySelector('mj-image')?.hasAttribute('src')
    ).toBeTruthy();
  });

  it('should have correct src attribute', () => {
    const { container } = render(<EMap />);
    expect(
      container.querySelector('mj-image')?.getAttribute('src')
    ).toStrictEqual(
      'https://maps.googleapis.com/maps/api/staticmap?size=600x300&scale=1&format=png&maptype=roadmap&key=AIzaSyCd5ZoMYrDuVeDkXnpztEodrQ-IyXInnek&'
    );
  });

  it('should have correct src attribute when pass satellite as maptype', () => {
    const { container } = render(<EMap mapType='satellite' />);
    expect(
      container.querySelector('mj-image')?.getAttribute('src')
    ).toStrictEqual(
      'https://maps.googleapis.com/maps/api/staticmap?size=600x300&scale=1&format=png&maptype=satellite&key=AIzaSyCd5ZoMYrDuVeDkXnpztEodrQ-IyXInnek&'
    );
  });

  it('should have correct src attribute when pass png8 as format', () => {
    const { container } = render(<EMap mapType='satellite' format='png8' />);
    expect(
      container.querySelector('mj-image')?.getAttribute('src')
    ).toStrictEqual(
      'https://maps.googleapis.com/maps/api/staticmap?size=600x300&scale=1&format=png8&maptype=satellite&key=AIzaSyCd5ZoMYrDuVeDkXnpztEodrQ-IyXInnek&'
    );
  });

  it('renders correctly', () => {
    expect(
      renderer.create(<EMap mapType='satellite' format='png8' />).toJSON()
    ).toMatchSnapshot();
  });
});
