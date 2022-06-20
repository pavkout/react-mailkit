import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { EUnderlinedTitle } from '../src/eUnderlinedTitle';

const Avatar = (
  <EUnderlinedTitle
    title="My Awesome Tilte"
    textProps={{
      align: 'center',
    }}
  />
);

describe('should be correct output', () => {
  it('should not be undefined', () => {
    const { container } = render(Avatar);
    expect(container).not.toBeUndefined();
  });

  it('should render EText', () => {
    const { container } = render(Avatar);
    expect(container.querySelector('mj-text')).toBeInTheDocument();
  });

  it('should render EDivider', () => {
    const { container } = render(Avatar);
    expect(container.querySelector('mj-divider')).toBeInTheDocument();
  });

  it('should have correct title', () => {
    const { container } = render(Avatar);
    expect(container.querySelector('mj-text')).toHaveTextContent(
      'My Awesome Tilte'
    );
  });

  it('renders correctly', () => {
    expect(renderer.create(Avatar).toJSON()).toMatchSnapshot();
  });
});
