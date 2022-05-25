import React from 'react';
import { render } from '@testing-library/react';
import { isInaccessible } from '@testing-library/dom';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ERating } from '../src/eRating';

const Rating = (
  <ERating
    url="https://campaignmonitor.wufoo.com/forms/q1iszi41dp3po9/def/field="
    stars={5}
    size={36}
    urlPerStar={true}
  />
);

describe('should be correct output', () => {
  it('should not be undefined', () => {
    const { container } = render(Rating);
    expect(container).not.toBeUndefined();
  });

  it('should render ERaw', () => {
    const { container } = render(Rating);
    expect(container.querySelector('mj-raw')).toBeInTheDocument();
  });

  it('should have five stars', () => {
    const { container } = render(Rating);
    expect(
      container.querySelector('mj-raw')?.firstChild?.childNodes.length
    ).toStrictEqual(5);
  });

  it('should have the fifth star correct href attribute', () => {
    const { container } = render(Rating);
    expect(container.querySelector('a')?.getAttribute('href')).toStrictEqual(
      'https://campaignmonitor.wufoo.com/forms/q1iszi41dp3po9/def/field=5'
    );
  });

  it('should have the fifth star correct title attribute', () => {
    const { container } = render(Rating);
    expect(container.querySelector('a')?.getAttribute('title')).toStrictEqual(
      '5'
    );
  });

  it('should accessible', () => {
    const { container } = render(Rating);
    expect(isInaccessible(container)).toBeFalsy();
  });

  it('renders correctly', () => {
    expect(renderer.create(Rating).toJSON()).toMatchSnapshot();
  });
});
