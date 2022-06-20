import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { ECarousel } from '../src/eCarousel';
import { ECarouselImage } from '../src/eCarouselImage';

const Carousel = (
  <ECarousel>
    <ECarouselImage
      data-testid="first-element"
      src="https://www.mailjet.com/wp-content/uploads/2016/11/ecommerce-guide.jpg"
    />
    <ECarouselImage
      data-testid="second-element"
      src="https://www.mailjet.com/wp-content/uploads/2016/09/3@1x.png"
    />
    <ECarouselImage
      data-testid="third-element"
      src="https://www.mailjet.com/wp-content/uploads/2016/09/1@1x.png"
    />
  </ECarousel>
);

describe('should be correct output', () => {
  it('should not be undefined', () => {
    const { container } = render(Carousel);
    expect(container).not.toBeUndefined();
  });

  it('should render mj-carousel', () => {
    const { container } = render(Carousel);
    expect(container.querySelector('mj-carousel')).toBeInTheDocument();
  });

  it('should have three children', () => {
    const { container } = render(Carousel);
    expect(
      container.querySelector('mj-carousel')!.childNodes.length
    ).toStrictEqual(3);
  });

  it('should all children be ECarouselImage', () => {
    const { container } = render(Carousel);
    container.querySelector('mj-carousel')!.childNodes.forEach((child) => {
      expect(child.nodeName).toEqual('MJ-CAROUSEL-IMAGE');
    });
  });

  it('should all children have src attribute', () => {
    const { container } = render(Carousel);
    container.querySelector('mj-carousel')!.childNodes.forEach((child) => {
      expect(child).toHaveAttribute('src');
    });
  });

  it('should the first ECarouselImage has correct src attribute', () => {
    const { getByTestId, debug } = render(Carousel);
    expect(getByTestId('first-element').getAttribute('src')).toStrictEqual(
      'https://www.mailjet.com/wp-content/uploads/2016/11/ecommerce-guide.jpg'
    );
  });

  it('should the second ECarouselImage has correct src attribute', () => {
    const { getByTestId } = render(Carousel);
    expect(getByTestId('second-element').getAttribute('src')).toStrictEqual(
      'https://www.mailjet.com/wp-content/uploads/2016/09/3@1x.png'
    );
  });

  it('should the third ECarouselImage has correct src attribute', () => {
    const { getByTestId } = render(Carousel);
    expect(getByTestId('third-element').getAttribute('src')).toStrictEqual(
      'https://www.mailjet.com/wp-content/uploads/2016/09/1@1x.png'
    );
  });

  it('renders correctly', () => {
    expect(renderer.create(Carousel).toJSON()).toMatchSnapshot();
  });
});
