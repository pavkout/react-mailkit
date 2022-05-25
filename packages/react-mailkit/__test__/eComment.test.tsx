import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { EComment } from '../src/eComment';

describe('should be correct output', () => {
  it('should not be undefined', () => {
    const { container } = render(<EComment>My Comment here</EComment>);
    expect(container).not.toBeUndefined();
  });

  it('should render EComment', () => {
    const { container } = render(<EComment>My Comment here</EComment>);
    expect(container.querySelector('mj-raw')).toBeInTheDocument();
  });

  it('should have correct condition', () => {
    const { container } = render(
      <EComment condition="if gte mso 9">MSO conditionals</EComment>
    );
    expect(container.querySelector('mj-raw')).toHaveTextContent(
      '<!--[if gte mso 9]>MSO conditionals<![endif]-->'
    );
  });

  it('should have correct condition', () => {
    const { container } = render(
      <EComment condition="if IE">MSO conditionals</EComment>
    );
    expect(container.querySelector('mj-raw')).toHaveTextContent(
      '<!--[if IE]>MSO conditionals<![endif]-->'
    );
  });

  it('renders correctly', () => {
    expect(
      renderer
        .create(<EComment condition="if IE">MSO conditionals</EComment>)
        .toJSON()
    ).toMatchSnapshot();
  });
});
